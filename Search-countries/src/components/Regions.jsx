function Regions({ region, onRegion }) {
  return (
    <>
      <select
        aria-label="regions"
        className="bg-light-elements dark:bg-dark-elements px-6 py-3 lg:py-4 rounded-md lg:w-56 shadow hover:opacity-75 transition-all cursor-pointer"
        value={region}
        onChange={(e) => onRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}

export default Regions;
