import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
function App() {
  return (
    <main  className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About />
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default App;
