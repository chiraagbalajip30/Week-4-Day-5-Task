const Contact = () => {
  return (
    <div className="px-6 py-16 bg-gray-100 min-h-screen">
      {/* Page Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-wide mb-3">Contact Us</h1>
        <p className="text-gray-600">
          We’d love to hear from you. Reach out anytime.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
