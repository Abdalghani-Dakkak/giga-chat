import BottomBar from "../../Components/BottomBar";

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const thems = {
  light: {
    main: "#438bf6",
    secondary: "#ffff00",
    message: "#fff",
    text: "#000",
  },
  dark: {
    main: "#131417",
    secondary: "#2124F7",
    message: "#242527",
    text: "#fff",
  },
};

const switchThem = () => {
  if (dark) {
    document.documentElement.style.setProperty(
      "--main-color",
      thems.light.main
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      thems.light.secondary
    );
    document.documentElement.style.setProperty(
      "--message-color",
      thems.light.message
    );
    document.documentElement.style.setProperty(
      "--text-color",
      thems.light.text
    );
  } else {
    document.documentElement.style.setProperty("--main-color", thems.dark.main);
    document.documentElement.style.setProperty(
      "--secondary-color",
      thems.dark.secondary
    );
    document.documentElement.style.setProperty(
      "--message-color",
      thems.dark.message
    );
    document.documentElement.style.setProperty("--text-color", thems.dark.text);
  }
  dark = !dark;
};

export default function settings() {
  return (
    <>
      <h1>Settings</h1>
      <button onClick={switchThem}>Switch Them</button>
      <BottomBar />
    </>
  );
}
