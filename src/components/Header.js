export default function Header({ setActiveSection, activeSection }) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 sticky top-0 shadow-lg fade-in">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h6 className="text-2xl  tracking-wide mr-[200px] text-white-500">
          Everything begins with an Idea
        </h6>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => setActiveSection("home")}
                className={`text-lg nav-link transition duration-300 ${
                  activeSection === "home"
                    ? "text-pink-300"
                    : "hover:text-pink-300"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className={`text-lg nav-link transition duration-300 ${
                  activeSection === "about"
                    ? "text-pink-300"
                    : "hover:text-pink-300"
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className={`text-lg nav-link transition duration-300 ${
                  activeSection === "projects"
                    ? "text-pink-300"
                    : "hover:text-pink-300"
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("skills")}
                className={`text-lg nav-link transition duration-300 ${
                  activeSection === "skills"
                    ? "text-pink-300"
                    : "hover:text-pink-300"
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contact")}
                className={`text-lg nav-link transition duration-300 ${
                  activeSection === "contact"
                    ? "text-pink-300"
                    : "hover:text-pink-300"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
