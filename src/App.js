import Nabvar from "./components/Navbar";
import avatarArr from "./components/assets/avatarArray";
import Home from "./components/Home"
import "./app.css"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import 'animate.css'

const App = () => {
    console.log(avatarArr);
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