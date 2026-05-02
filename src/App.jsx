import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#components";
import { Draggable } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
};
export default App;
