import { Navbar } from "./Navbar";
import "./app.css"
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { About } from "./About";


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Footer />

        </div>
    )
}

export default App;