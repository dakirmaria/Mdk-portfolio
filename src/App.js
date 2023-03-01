import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Repositories } from "./components/Repositories";
function App() {
  console.log("this is from app " + process.env.REACT_APP_BASE_URL            )

  return (
    <main  className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About />
      <Projects/>
      <Skills/>
      <Repositories/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default App;
