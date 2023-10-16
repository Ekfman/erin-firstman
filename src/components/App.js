import { Navbar } from "./Navbar";
import "./app.css"
import { Hero } from "./Hero";
import { Projects } from "./Projects";


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
        </div>
    )
}

export default App;