import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

function ThemeSwitch({ theme, onTheme }) {
  function handleClick() {
    onTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  return (
    <button
      type="button"
      className="flex items-center gap-2"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? fasMoon : farMoon}
        style={
          theme === "dark" ? { color: "#fff" } : { color: "hsl(200, 15%, 8%)" }
        }
      />
      <span className="font-semibold text-lg">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}

export default ThemeSwitch;
