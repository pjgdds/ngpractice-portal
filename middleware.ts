import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PATHS = ['/forms', '/dashboard', '/account', '/patient'];
const AUTH_PATHS = ['/register', '/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get('session')?.value || request.cookies.get('session-token')?.value;

  // Security headers on all responses
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Protect future dashboard and forms routes
  const isProtected = PROTECTED_PATHS.some((path) => pathname.startsWith(path));
  if (isProtected && !session) {
    const redirectUrl = new URL('/register', request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect authenticated users away from auth pages
  const isAuthPage = AUTH_PATHS.some((path) => pathname.startsWith(path));
  if (isAuthPage && session) {
    return NextResponse.redirect(new URL('/forms', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/forms/:path*',
    '/dashboard/:path*',
    '/account/:path*',
    '/patient/:path*',
    '/register',
    '/login',
  ],
};