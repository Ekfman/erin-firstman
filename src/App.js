import Nabvar from "./components/Navbar";
import avatarArr from "./components/assets/avatarArray";
import Home from "./components/Home"
import "./app.css"
import Projects from "./components/Projects";

const App = () => {
    console.log(avatarArr);
    return (
        <div>
            <Nabvar/>
            <Home/>
            <Projects/>
        </div>
    )
}

export default App;