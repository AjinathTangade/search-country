   const countryInput = document.getElementById('countryInput'),
   demo = document.getElementById('search'),
   search_result = document.getElementById('search_result'),
   flag = document.getElementById('flag'),
   flaglter = document.getElementById('flaglter');
   name1 = document.getElementById('name'),
   capital = document.getElementById('capital'),
   contienent = document.getElementById('contienent'),
   population = document.getElementById('Population'),
   currency = document.getElementById('currency'),
   CurencyShort = document.getElementById('CurencyShort'),
   languagee = document.getElementById('language');
   car = document.getElementById('car');
   border = document.getElementById('border');
   altSpellings = document.getElementById('altSpellings');

demo.addEventListener("click", () => {
   let countryname = countryInput.value;
   let finalURL = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
   console.log(finalURL)
   fetch(finalURL)
      .then((Response) => Response.json())
      .then((data) => {
         console.log(data)
         search_result.style.display = 'block';
         countryData = data[0]
         console.log(countryData)
         flag.src = countryData.flags.png;
         flaglter.innerHTML = countryData.flags.alt;
         name1.innerHTML = countryData.name.common;
         capital.innerHTML = countryData.capital;
         contienent.innerHTML = countryData.continents;
         population.innerHTML = countryData.population  + 20;
         currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].symbol;
         CurencyShort.innerHTML = Object.keys(countryData.currencies)[0];
         languagee.innerHTML = Object.values(countryData.languages);
         // languagee.innerHTML = Object.values(countryData.languages).toString().split(',').join(',');
         car.innerHTML = Object.values(countryData.car).toString().split(',').join(',');
         // border.innerHTML = Object.values(countryData.borders);
         border.innerHTML = countryData.borders[0];
         altSpellings.innerHTML = Object.values(countryData.altSpellings);
      })

})
