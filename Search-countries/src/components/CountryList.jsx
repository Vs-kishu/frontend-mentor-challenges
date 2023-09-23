import { AnimatePresence, motion } from "framer-motion";
import Country from "./Country";

function CountryList({
  countries,
  filteredCountries,
  onSelectedCountry,
  formatNumber,
}) {
  return (
    <ul className="px-8 text-homepage md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 xl:gap-24">
      <AnimatePresence>
        {filteredCountries.length > 0
          ? filteredCountries.map((country) => (
              <motion.li key={country.cca2} layout whileHover={{ scale: 1.08 }}>
                <Country
                  country={country}
                  onSelectedCountry={onSelectedCountry}
                  formatNumber={formatNumber}
                />
              </motion.li>
            ))
          : countries.map((country) => (
              <motion.li key={country.cca2} layout whileHover={{ scale: 1.08 }}>
                <Country
                  country={country}
                  onSelectedCountry={onSelectedCountry}
                  formatNumber={formatNumber}
                />
              </motion.li>
            ))}
      </AnimatePresence>
    </ul>
  );
}

export default CountryList;
