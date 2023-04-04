import Nabvar from "./components/Navbar";
import Home from "./components/Home"
import "./app.css"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
    return (
        <div>
            <Nabvar/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App;