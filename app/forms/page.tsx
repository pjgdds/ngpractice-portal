export default function Forms() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Digital Patient Forms</h1>
      <p className="mb-6">Complete these before your visit. Covers Patient Agreement, consents, and records.</p>
      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
        <input type="date" className="w-full border p-2 rounded" required />
        <textarea placeholder="Medical history, medications, allergies" className="w-full border p-2 rounded" rows="4" />
        <label className="flex items-start"><input type="checkbox" required className="mt-1 mr-2" /> I have read and agree to the Patient Agreement (appointments, fees, communication, privacy).</label>
        <label className="flex items-start"><input type="checkbox" className="mt-1 mr-2" /> I consent to extraction or other procedures as discussed, understanding risks and alternatives.</label>
        <label className="flex items-start"><input type="checkbox" className="mt-1 mr-2" /> I authorize release of records if requested.</label>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Submit Forms</button>
      </form>
    </div>
  );
}