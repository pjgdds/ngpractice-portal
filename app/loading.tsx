export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      <p className="ml-4 text-gray-600">Loading your portal...</p>
    </div>
  )
}