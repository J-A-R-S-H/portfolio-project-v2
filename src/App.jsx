import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#components";
import { Draggable } from "gsap/all";
import gsap from "gsap";
import Safari from "#window/Safari.jsx";
import { Resume } from "#window";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};
export default App;
