'use client';
import { FormEvent, useState } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      service: form.get('service'),
      date: form.get('date')
    };
    try {
      const res = await fetch('/api/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('Booking failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="sr-only" htmlFor="name">Full name</label>
      <input id="name" name="name" required className="w-full rounded border px-3 py-2" placeholder="Full name" />

      <label className="sr-only" htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required className="w-full rounded border px-3 py-2" placeholder="Email" />

      <label className="sr-only" htmlFor="service">Service</label>
      <select id="service" name="service" required className="w-full rounded border px-3 py-2">
        <option value="Strategy">Strategy</option>
        <option value="Workforce Development">Workforce Development</option>
        <option value="Digital Transformation">Digital Transformation</option>
      </select>

      <label className="sr-only" htmlFor="date">Date & time</label>
      <input id="date" name="date" type="datetime-local" required className="w-full rounded border px-3 py-2" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={status === 'loading'}>
        {status === 'loading' ? 'Booking...' : 'Request booking'}
      </button>

      {status === 'success' && <p className="text-green-600">Booking requested! We will confirm shortly.</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong — please try again.</p>}
    </form>
  );
}
