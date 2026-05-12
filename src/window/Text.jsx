import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";
import { useState, useEffect } from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  const [content, setContent] = useState([]);

  useEffect(() => {
    if (data) {
      const key = `txtfile-${data.id}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        setContent(JSON.parse(saved));
      } else {
        setContent(data.description || []);
      }
    }
  }, [data]);

  if (!data) {
    return;
  }

  const { name, image, subtitle } = data;

  return (
    <>
      {" "}
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg0-white">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {Array.isArray(content) ? (
          content.length > 0 ? (
            <div className="space-y-3 leading-relaxed text-base text-gray-800">
              {content.map((paragraph, index) => (
                <p
                  key={index}
                  contentEditable
                  suppressContentEditableWarning={true}
                  onInput={(e) => {
                    const newContent = [...content];
                    newContent[index] = e.target.textContent;
                    setContent(newContent);
                    const key = `txtfile-${data.id}`;
                    localStorage.setItem(key, JSON.stringify(newContent));
                  }}
                  className="outline-none focus:bg-blue-50 p-1 rounded"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
