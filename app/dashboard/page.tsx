// Admin dashboard (server-protected page should check session in production)
export default function Dashboard() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <p className="mt-2 text-gray-600">Protected area: statistics and booking management.</p>
        <div className="mt-6">
          {/* Stats cards and bookings table will be added here */}
        </div>
      </div>
    </section>
  );
}
