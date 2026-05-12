import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <h2>Contact</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/wallpaper2.png"
          alt="profile"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>Uhhh I should probably write something here...</p>

        <ul>
          {socials.map(({ id, text, link, icon, bg }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 "
              >
                <img src={icon} alt={name} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
