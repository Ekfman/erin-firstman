import Nabvar from "./components/Navbar";
import avatarArr from "./components/assets/avatarArray";
import Home from "./components/Home"
import "./app.css"
import Projects from "./components/Projects";
// import Hero from "./components/Hero";
import Contact from "./components/Contact";

// console.log('Contact :>> ', Contact);
// console.log('Hero :>> ', Hero);

const App = () => {
    console.log(avatarArr);
    return (
        <div>
            <Nabvar/>
            {/* <Hero/> */}
            <Home/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App;