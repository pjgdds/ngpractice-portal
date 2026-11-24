export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Your Next Generation Dental Patient Portal</h1>
        <p className="text-xl mb-8">Complete forms before you arrive. Manage your care securely.</p>
        <a href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg">Create Your Account</a>
      </div>
    </main>
  );
}