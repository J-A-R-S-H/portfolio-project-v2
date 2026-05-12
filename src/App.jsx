import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#components";
import { Draggable } from "gsap/all";
import gsap from "gsap";
import Safari from "#window/Safari.jsx";
import { Contact, Resume } from "#window";
import Finder from "#window/Finder.jsx";
import Text from "#window/Text.jsx";
import Image from "#window/Image.jsx";
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
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};
export default App;
