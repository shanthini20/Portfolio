export default function Home({ setActiveSection }) {
  return (
    <section className="relative min-h-[calc(100vh-128px)] flex items-center justify-center bg-gradient-to-b from-indigo-100 to-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')`,
        }}
      ></div>
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
          Shanthini P | Full-Stack Developer | Java & React Enthusiast
        </p>
        <button
          onClick={() => setActiveSection("projects")}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          View My Work
        </button>
      </div>
    </section>
  );
}
