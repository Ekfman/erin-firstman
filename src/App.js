import Nabvar from "./components/Navbar";
import avatarArr from "./components/assets/avatarArray";
import Home from "./components/Home"
import "./app.css"

const App = () => {
    console.log(avatarArr);
    return (
        <div>
            <Nabvar/>
            <Home/>
        </div>
    )
}

export default App;