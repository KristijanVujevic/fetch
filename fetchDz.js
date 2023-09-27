var input = prompt(
  "Please enter a country you wish to know everything about: "
);

const apiURL = "https://restcountries.com/v3.1/name/" + input.toLowerCase();

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      var country = document.getElementById("country");
      //adding a name to display
      var name = document.createElement("h1");
      name.classList.add("name");
      var ime = element.name.common;
      name.textContent = ime;
      country.appendChild(name);
      //adding flag to display with a tag that leads to wiki
      var bgFlag = document.createElement("img");
      var flagHref = document.createElement("a");
      flagHref.href = `https://en.wikipedia.org/wiki/${ime}`;
      flagHref.target = "_blank";
      flagHref.appendChild(bgFlag);
      bgFlag.classList.add("flag");
      bgFlag.src = element.flags.png;
      country.appendChild(flagHref);

      //capital city
      var capitalCity = document.createElement("h1");
      capitalCity.classList.add("capital");
      capitalCity.textContent = `Capital city: ${element.capital}`;
      country.appendChild(capitalCity);

      //currency
      var currency = document.createElement("h1");
      currency.classList.add("currency");
      if (element.currencies) {
        var primaryCurrency =
          element.currencies[Object.keys(element.currencies)[0]];
        currency.textContent = `${primaryCurrency.name} (${primaryCurrency.symbol})`;
      } else {
        currency.textContent = "No currency information available";
      }
      country.appendChild(currency);

      //region
      var region = document.createElement("h1");
      region.classList.add("region");
      region.textContent = `Subregion: ${element.subregion}`;
      country.appendChild(region);

      //list of bordering countries
      var borders = document.createElement("ul");
      borders.classList.add("drzave");
      var drzave = element.borders;
      for (let i = 0; i < drzave.length; i++) {
        var drzava = drzave[i];
        var drzaveLi = document.createElement("li");
        var borderCountry = document.createElement("h2");
        borderCountry.textContent = "Bordering countries: ";
        drzaveLi.textContent = drzava;
        borders.appendChild(drzaveLi);
      }
      country.appendChild(borderCountry);
      country.appendChild(borders);

      //population
      var population = document.createElement("h1");
      population.classList.add("population");
      population.textContent = `Population: ${element.population} people`;
      country.appendChild(population);
    });
  })
  .catch((error) => console.error(error));
