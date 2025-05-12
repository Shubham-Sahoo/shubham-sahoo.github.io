export default function Contact() {
    return (
      <section className="py-12">
        <h1 className="text-3xl font-semibold">Contact Me</h1>
        <p className="text-gray-300 mt-4">
          Feel free to reach out to discuss projects, collaborations, or any
          opportunities.
        </p>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full max-w-md p-2 border border-gray-500 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full max-w-md p-2 border border-gray-500 rounded-md mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full max-w-md p-2 border border-gray-500 rounded-md mb-4"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  