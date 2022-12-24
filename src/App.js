import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import Contact from "./Components/Contact/Contact";
import Toggle from "./Components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "#f8f8e5",
          color: darkMode ? "#FFFFF0" : "#222",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Toggle />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
