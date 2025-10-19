
export default function ContactPage() {
  return (
    <div className="py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Contact</h1>
      <p className="text-gray-600 mb-6">
        For project inquiries, collaborations, or speaking—drop a note.
      </p>
      <form action="https://formspree.io/f/your-id" method="POST" className="grid gap-3">
        <input className="border rounded p-3" name="name" placeholder="Your name" required />
        <input className="border rounded p-3" type="email" name="email" placeholder="Email" required />
        <textarea className="border rounded p-3" name="message" placeholder="Message" rows={5} required />
        <button className="bg-brand-600 text-white rounded p-3 font-medium hover:bg-brand-500 transition">
          Send
        </button>
      </form>
    </div>
  )
}
