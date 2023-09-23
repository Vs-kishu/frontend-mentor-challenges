import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useKey } from "./hooks/useKey";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Main from "./components/Main";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Regions from "./components/Regions";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useLocalStorageState("light", "theme");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = countries.filter((country) => {
    if (region && !query) {
      return country.region === region;
    }

    if (query && !region) {
      return country.name.common.toLowerCase().includes(query.toLowerCase());
    }

    if (region && query) {
      return (
        country.region === region &&
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
    }
  });

  function formatNumber(number) {
    const locale = navigator.language;
    return new Intl.NumberFormat(locale).format(number);
  }

  useEffect(function () {
    async function loadCountries() {
      try {
        setIsLoading(true);

        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error(
            "There was a problem fetching the data. Try again later."
          );
        }

        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  useEffect(
    function () {
      if (region && !selectedCountry) {
        document.title = `REST Countries | ${region}`;
      }
      if (selectedCountry) {
        document.title = `REST Countries | ${selectedCountry.name.common}`;
      }

      return function () {
        document.title = "REST Countries | World";
      };
    },
    [region, selectedCountry]
  );

  useKey("Escape", () => setQuery(""));

  return (
    <Layout theme={theme}>
      <Header>
        <Logo />
        <ThemeSwitch theme={theme} onTheme={setTheme} />
      </Header>

      <Main>
        <AnimatePresence>
          {selectedCountry ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <CountryDetails
                country={selectedCountry}
                countries={countries}
                onSelectedCountry={setSelectedCountry}
                formatNumber={formatNumber}
              />
            </motion.div>
          ) : (
            <>
              <Filters>
                <Search query={query} onQuery={setQuery} theme={theme} />
                <Regions region={region} onRegion={setRegion} />
              </Filters>

              {isLoading && <Loader />}
              {error && <p className="text-center">{error}</p>}
              {!isLoading && !error && (
                <CountryList
                  countries={countries}
                  filteredCountries={filteredCountries}
                  onSelectedCountry={setSelectedCountry}
                  formatNumber={formatNumber}
                />
              )}
            </>
          )}
        </AnimatePresence>
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
