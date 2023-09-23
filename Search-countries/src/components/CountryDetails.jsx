import { useKey } from "../hooks/useKey";

function CountryDetails({
  country,
  countries,
  onSelectedCountry,
  formatNumber,
}) {
  const {
    name,
    population,
    region,
    subregion,
    tld: domain,
    capital,
    currencies: currencies,
    languages,
    borders,
    flags: flag,
  } = country;

  const borderCountries = countries.filter((country) => {
    return borders?.find((border) => border === country.cca3);
  });

  useKey("Backspace", () => onSelectedCountry(null));

  return (
    <article className="text-details">
      <nav className="2xl:mx-32">
        <button
          type="button"
          className="px-8 py-2 bg-light-elements dark:bg-dark-elements shadow-lg mb-16"
          onClick={() => onSelectedCountry(null)}
        >
          &larr; Back
        </button>
      </nav>

      <figure className="lg:flex items-center lg:gap-16 2xl:gap-24 2xl:mx-32">
        <img
          src={flag.svg}
          alt={flag.alt}
          className="mb-12 lg:h-96 w-full lg:w-1/2 object-cover"
        />

        <section className="mb-12 lg:mb-0 basis-2/3">
          <h2 className="mb-6 font-extrabold text-2xl">{name.common}</h2>

          <div className="lg:grid grid-cols-2 gap-x-8 lg:gap-x-4 grid-rows-[repeat(5,_2.4rem)] lg:mb-16">
            <p className="mb-3">
              <span className="font-semibold col-start-1">Native Name:</span>{" "}
              <span className="font-light">
                {Object.values(name.nativeName)[0].common}
              </span>
            </p>

            <p className="mb-3 col-start-1">
              <span className="font-semibold">Population:</span>{" "}
              <span>{formatNumber(population)}</span>
            </p>

            <p className="mb-3 col-start-1">
              <span className="font-semibold">Region:</span>{" "}
              <span className="font-light">{region}</span>
            </p>

            <p className="mb-3 col-start-1">
              <span className="font-semibold">Sub Region:</span>{" "}
              <span>{subregion}</span>
            </p>

            <p className="mb-12 col-start-1">
              <span className="font-semibold">Capital:</span>{" "}
              <span>{capital.join(", ")}</span>
            </p>

            <p className="mb-3 col-start-2 row-start-1">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              <span>{domain}</span>
            </p>

            <p className="mb-3 col-start-2 row-start-2">
              <span className="font-semibold">Currencies:</span>{" "}
              <span>{Object.values(currencies)[0].name}</span>
            </p>

            <p className="mb-12 col-start-2 row-start-3">
              <span className="font-semibold">Languages:</span>{" "}
              <span>{Object.values(languages).join(", ")}</span>
            </p>
          </div>

          <div className="lg:flex gap-2">
            <h3 className="font-semibold text-xl lg:text-details mb-4 lg:mb-0">
              Border Countries:
            </h3>

            <ul className="grid grid-cols-3 gap-2 lg:block">
              {borderCountries.length > 0 ? (
                borderCountries.map((country) => (
                  <li
                    className="bg-light-elements dark:bg-dark-elements px-2 py-1 text-center text-sm cursor-pointer lg:inline-block lg:mr-2 shadow-md"
                    key={country.cca3}
                    onClick={() => onSelectedCountry(country)}
                  >
                    {country.name.common}
                  </li>
                ))
              ) : (
                <p className="col-span-3">No bordering neighbours</p>
              )}
            </ul>
          </div>
        </section>
      </figure>
    </article>
  );
}

export default CountryDetails;
