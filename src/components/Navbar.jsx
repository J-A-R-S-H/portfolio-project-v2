import dayjs from "dayjs";
import { useState, useEffect, useRef } from "react";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [showWeather, setShowWeather] = useState(false);
  const [weather, setWeather] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current=temperature_2m,weather_code",
        );
        const data = await res.json();
        setWeather(data.current);
      } catch (err) {
        console.error("Weather fetch failed", err);
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowWeather(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav>
      <div>
        <div
          className="relative"
          ref={dropdownRef}
          style={{ display: "inline-block" }}
        >
          <img
            src="/images/logo.svg"
            alt="apple-logo"
            className="cursor-pointer"
            onClick={() => setShowWeather(!showWeather)}
          />

          {showWeather && (
            <div
              className="absolute top-full left-0 mt-1 w-56 z-50 py-2 px-3 flex justify-center items-center text-center"
              style={{
                backgroundColor: "black(255, 255, 255, 0.3)",
                backdropFilter: "blur(20px)",
                borderRadius: "8px",
                border: "0.5px solid rgba(0, 0, 0, 0.4)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex justify-center items-center mb-1">
                <span className="text-[16px] font-semibold text-white uppercase mt-1">
                  Vancouver
                </span>
              </div>

              {weather ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-medium tracking-tight">
                    {Math.round(weather.temperature_2m)}°C
                  </span>
                </div>
              ) : (
                <p className="text-[12px] text-gray-400">Updating...</p>
              )}
            </div>
          )}
        </div>

        <p className="font-bold">John's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
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
