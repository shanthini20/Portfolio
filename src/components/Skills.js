export default function Skills() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-800">
          Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition duration-300">
            Java
          </li>
          <li className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition duration-300">
            Spring Boot
          </li>
          <li className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition duration-300">
            Node.js
          </li>
          <li className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 transition duration-300">
            React
          </li>
          <li className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-600 transition duration-300">
            Tailwind CSS
          </li>
          <li className="bg-gradient-to-r from-green-600 to-lime-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-lime-600 hover:to-green-600 transition duration-300">
            Redis
          </li>
          <li className="bg-gradient-to-r from-lime-600 to-yellow-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-yellow-600 hover:to-lime-600 transition duration-300">
            MySQL
          </li>
        </ul>
      </div>
    </section>
  );
}
