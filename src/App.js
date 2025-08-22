import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "about":
        return <About setActiveSection={setActiveSection} />;
      case "projects":
        return <Projects setActiveSection={setActiveSection} />;
      case "skills":
        return <Skills setActiveSection={setActiveSection} />;
      case "contact":
        return <Contact setActiveSection={setActiveSection} />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main className="flex-grow">
        <div key={activeSection} className="section-fade-in">
          {renderSection()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
