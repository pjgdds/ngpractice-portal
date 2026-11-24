import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Add security headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Example: Protect /forms and /register routes (placeholder auth check)
  const protectedPaths = ['/forms', '/dashboard'];
  const isProtected = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path));

  if (isProtected) {
    // In production, check for session cookie here
    // const token = request.cookies.get('session-token');
    // if (!token) return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};