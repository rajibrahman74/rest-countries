const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then (data => displayCountries(data))
}


const displayCountries = countries => {
    console.log(countries[0]);

    const countriesHTML = countries.map (country => getCountriesHTML(country));
    // console.log(countriesHTML[0]);

    const countriesContainer = document.getElementById("countries");
    countriesContainer.innerHTML = countriesHTML.join(" ");
}



// Originul
// const getCountriesHTML = country => {
//     return `
//     <div class="country">
//         <h3>Official Name: ${country.name.official}</h3>
//         <img src="${country.flags.png}">
//     </div>
//     `;
// }

// option one

// const getCountriesHTML = country => {
//     // destructuring system
//     // option: 01
//     const {name, flags} = country;
//     return `
//     <div class="country">
//         <h3>Official Name: ${name.official}</h3>
//         <img src="${flags.png}">
//     </div>
//     `;
// }


// Otption two
const getCountriesHTML = ({name, flags, independent, region}) => {
    return `
    <div class="country">
        <h3>Official Name: ${name.official}</h3>
        <p>Independent: ${independent}</p>
        <p>Region: ${region}</p>
        <img src="${flags.png}">
    </div>
    `;
}


loadCountries();