export default function FormsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Patient Forms</h2>
        {children}
      </div>
    </div>
  );
}