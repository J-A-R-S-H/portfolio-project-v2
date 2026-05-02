import {Navbar, Welcome, Dock} from "#components";
import {Terminal} from "#components";
import {Draggable} from "gsap/all";
import gsap from "gsap";
import Safari from "#window/Safari.jsx";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
            <Terminal/>
            <Safari/>
        </main>
    );
};
export default App;
