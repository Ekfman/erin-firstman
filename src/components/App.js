import { Navbar } from "./Navbar";
import "./app.css"
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Footer } from "./Footer";


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
            <Footer />
        </div>
    )
}

export default App;