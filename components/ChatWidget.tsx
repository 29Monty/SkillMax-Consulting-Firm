'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: string; role: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), role: 'user', text: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: userMsg.text }) });
      const json = await res.json();
      const reply = json?.choices?.[0]?.message?.content ?? json?.result ?? 'Sorry, no response';
      setMessages((m) => [...m, { id: Date.now().toString(), role: 'assistant', text: reply }] as any);
    } catch (err) {
      setMessages((m) => [...m, { id: Date.now().toString(), role: 'assistant', text: 'Error contacting assistant.' }] as any);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button aria-label="Open chat" className="fixed right-6 bottom-6 z-50 bg-blue-600 text-white rounded-full p-4 shadow-lg" onClick={() => setOpen(true)}>
        Chat
      </button>

      {open && (
        <div className="fixed right-6 bottom-20 w-80 h-96 z-50 bg-white border rounded shadow-lg flex flex-col">
          <div className="p-3 border-b flex items-center justify-between">
            <h3 className="font-semibold">AI Assistant</h3>
            <button aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 p-3 overflow-auto">
            {messages.map((m) => (
              <div key={m.id} className={`my-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block rounded px-3 py-2 ${m.role === 'user' ? 'bg-blue-50' : 'bg-gray-100'}`}>{m.text}</div>
              </div>
            ))}
            {loading && <div className="text-sm text-gray-500">Thinking…</div>}
          </div>

          <div className="p-3 border-t">
            <label className="sr-only" htmlFor="chat-input">Message</label>
            <div className="flex gap-2">
              <input id="chat-input" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded border px-3 py-2" placeholder="Ask about our services" />
              <button className="bg-blue-600 text-white px-3 rounded" onClick={send} disabled={loading}>{loading ? '…' : 'Send'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
