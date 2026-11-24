export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Get Started</h1>
        <p className="mb-6 text-gray-600">Complete forms before you arrive. Create your secure account.</p>
        <button className="w-full border border-gray-300 py-3 rounded-lg mb-4 hover:bg-gray-50">Continue with Google</button>
        <p className="text-sm"><a href="/login" className="text-blue-600">Already have an account? Log in</a></p>
      </div>
    </div>
  );
}