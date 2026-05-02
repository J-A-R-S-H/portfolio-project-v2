import dayjs from "dayjs";

import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="font-bold">John's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => {
                openWindow(type);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
