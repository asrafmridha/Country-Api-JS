const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(Response => Response.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    // console.log(countries);

    const allCountries = countries.map(country => showCountrisHTML(country));  
    const container = document.getElementById("countries");
    container.innerHTML = allCountries.join(' ');
    
}

const showCountrisHTML = country => {
    return `
            <div class = "country">
                <h2>${country.name.common}</h2>
                <img src = "${country.flags.png}" />
            </div>
    
    `;
}
loadCountries();




// use =>
// function declaration
// arrow function
// array.map();
// document.getElementById();
// .innerHTML
// join();
//template string
// rest api
// callback function
// promise


    
