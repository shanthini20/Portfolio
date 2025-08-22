export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-800">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
          Feel free to reach out via email:{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-indigo-600 hover:text-pink-500 transition duration-300"
          >
            your.email@example.com
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-indigo-600 hover:text-pink-500 transition duration-300"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>
    </section>
  );
}
