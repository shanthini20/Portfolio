export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Razorpay Integration</h3>
            <p className="text-gray-100">
              A Node.js project integrating Razorpay for payment processing,
              with OTP verification using Redis.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-100">
              This website! Built with React and Tailwind CSS to showcase my
              skills with a vibrant design.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Spring Boot CRUD API</h3>
            <p className="text-gray-100">
              A REST API for managing users, built with Spring Boot, JPA, and
              MySQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
