function Country({ country, onSelectedCountry, formatNumber }) {
  const {
    name: { common: name },
    population,
    region,
    capital,
    flags: flag,
  } = country;

  return (
    <div
      className="bg-light-elements dark:bg-dark-elements rounded-md mb-8 md:mb-0 cursor-pointer shadow-md h-full"
      onClick={() => onSelectedCountry(country)}
    >
      <figure className="h-1/2">
        <img
          src={flag.svg}
          alt={flag.alt || "Flag of a country"}
          className="rounded-t-md h-full w-full object-cover"
        />
      </figure>

      <section className="px-6 pt-8 pb-6">
        <h2 className="mb-4 font-extrabold text-2xl">{name}</h2>
        <p className="mb-2">
          <span className="font-semibold">Population:</span>{" "}
          {formatNumber(population)}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Capital:</span>{" "}
          {Array.isArray(capital) ? capital.join(", ") : capital}
        </p>
      </section>
    </div>
  );
}

export default Country;
