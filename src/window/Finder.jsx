import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { useState } from "react";
import { locations } from "#constants";
import WindowStore from "#store/window";
import clsx from "clsx";

const Finder = () => {
  const { openWindow } = WindowStore();
  const [activeLocation, setActiveLocation] = useState(null);

  const openItem = (item) => {
    console.log("Opening PDF file...");

    if (item.fileType?.toLowerCase() === "pdf") {
      openWindow("resume");
    }

    if (item.fileType?.toLowerCase() === "txt") {
      openWindow("txtfile", item);
    }

    if (item.fileType?.toLowerCase() === "img") {
      openWindow("imgfile", item);
    }

    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType?.toLowerCase()) && item.href)
      return window.open(item.href, "_blank");
  };

  const renderList = (items) =>
    items.map((item) => (
      <li
        key={item.id}
        className={clsx(
          item.id === activeLocation?.id ? "active" : "not-active",
        )}
        onClick={() => {
          setActiveLocation(item);
        }}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium">{item.name}</p>
      </li>
    ));
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>

          <div>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>
        <ul className="content">
          {(activeLocation?.children || []).map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => {
                console.log("test", item);
                openItem(item);
              }}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
