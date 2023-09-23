import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ query, onQuery, theme }) {
  return (
    <div className="relative mb-8 w-full lg:w-1/3">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={
          theme === "dark" ? { color: "#fff" } : { color: "hsl(200, 15%, 8%)" }
        }
        className="absolute top-1/2 left-6 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className="shadow bg-light-elements dark:bg-dark-elements px-16 py-4 w-full rounded-md placeholder:text-light-text dark:placeholder:text-dark-text focus:outline-none focus:placeholder:opacity-50 focus:placeholder:transition-opacity focus:w-[110%] transition-[width] "
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
