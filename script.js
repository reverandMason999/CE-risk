// api pulls
const flag = document.getElementById('flag')
const main = document.getElementById('main')


async function getCountry() {
    const apiKey = '4ChDdepKg5KT1TO9HEW5SLnfXwfQWBV9q5te1VCR';
    const country = document.getElementById('country').value.toLowerCase();
    const Url = `https://countryapi.io/api/name/${country}?apikey=${apiKey}`;
    

    fetch(Url)
  .then(response => response.json())
  .then(data => {
    console.log(data.ar.currencies.ARS.name)
    console.log(data.ar.currencies.ARS.symbol)
    
    console.log(data.ar.flag.large)
    flag.setAttribute('src', data.ar.flag.large)
    let currency_symbol = document.createElement('h4')
    currency_symbol.innerText = data.ar.currencies.ARS.symbol
    main.appendChild(currency_symbol)
    })

//   .then(data => console.log(data.))
  
  .catch(error => console.error('Error:', error));
}



