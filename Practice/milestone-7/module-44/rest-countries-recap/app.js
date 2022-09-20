const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
    <div class="card">
            <img class="flag-image" src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
            <h3 class="card-title">${country.name.common}</h3>
              
            </div>
          </div>
    `
}

loadCountries();