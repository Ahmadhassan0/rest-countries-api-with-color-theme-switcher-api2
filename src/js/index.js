const countriesGrid = document.querySelector(".main__bottom");
const filterArrow = document.querySelector(".dropDown__chevron");
const dropDownBox = document.querySelector(".dropDown__box");
const dropDownBoxP = document.querySelectorAll(".dropDown__box p");
const countryRegion = document.getElementsByClassName("country__region");
const filterRegionText = document.querySelector(".dropDown__filter__text");
const searchInput = document.querySelector(".search");
const countryName = document.getElementsByClassName("country__name");
const darkMode = document.querySelector(".dark__mode");
const moonIcon = document.querySelector(".dark__mode i");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const searchBox = document.querySelector(".form__control");
const dropDownContainer = document.querySelector(".dropDown-Container");



// async function for getting data from api
async function getCountries() {
    const raw = await fetch("https://restcountries.com/v3.1/all");
    const res = await raw.json();
    res.forEach((element) => {
        countries(element);
    })
}
getCountries();

// function for creating container and inserting data
function countries(data) {
    const country = document.createElement("country");
    country.classList.add("country");
    country.innerHTML = `<div class="country__img">
        <a href="./detail.html"><img src="${data.flags.svg}" alt="Click to view details about the ${data.name.common}"></a>
        </div>
        <div class="country__content">
            <h2 class="country__name">${data.name.common}</h2>
            <p class="country__population">Population: <span>${data.population}</span></p>
            <p class="country__region">Region: <span>${data.region}</span></p>
            <p class="country__capital">Capital: <span>${data.capital}</span></p>
        </div>`;
    countriesGrid.appendChild(country);
}

// function to show/hide drop Down box 
if(filterArrow) {
    filterArrow.addEventListener("click", (e) => {
        dropDownBox.classList.toggle("active");
        e.currentTarget.classList.toggle("active");
    })
}

// Filtering the Countries by region
dropDownBoxP.forEach(element => {
    element.addEventListener("click", () => {
        // console.log(element);
        Array.from(countryRegion).forEach(elem => {
            // console.log(elem.innerText);
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid";
            } else {
                elem.parentElement.parentElement.style.display = "none";
            }
        })
        filterRegionText.innerText = element.innerText;
    })
})


// Find Country through Search
if(searchInput) {
    searchInput.addEventListener("input", () => {
        console.log(searchInput.value)
        Array.from(countryName).forEach((elem) => {
            if (elem.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
                elem.parentElement.parentElement.style.display = "grid";
            } else {
                elem.parentElement.parentElement.style.display = "none";
            }
        })
    })
}

// Theme switching
darkMode.addEventListener("click", () => {
    console.log(darkMode)
    moonIcon.classList.toggle("fa-solid");
    body.classList.toggle("dark");
    nav.classList.toggle("dark");
    searchBox.classList.toggle("dark");
    dropDownContainer.classList.toggle("dark");
    const countryElements = document.querySelectorAll(".country");
    countryElements.forEach((countryElement) => {
        countryElement.classList.toggle("dark");
        // console.log(countryElement);
    });
})


/* ================= Detail JS ======================*/
const countryDetailBox = document.querySelector(".country__detail");

// function countryDetail (data) {
//     countryDetailBox.innerHTML = `<div class="country__img">
//                 <img src="${data.flags.svg}" alt="Click to view details about the country">
//             </div>
//             <div class="country__stats">
//                 <h1 class="country__name">Belgium</h1>
//                 <div class="stats__box">
//                     <div class="stats__box__left">
//                         <p><strong>Native Name</strong> België</p>
//                         <p><strong>Population:</strong> 11,319,511 </p>
//                         <p><strong>Region:</strong> Europe</p>
//                         <p><strong>Sub Region:</strong> Western Europe</p>
//                         <p><strong>Capital:</strong> Brussels</p>
//                     </div>
//                     <div class="stats__box__right">
//                         <p><strong>Top Level Domain</strong> .be</p>
//                         <p><strong>Currencies</strong> Euro</p>
//                         <p><strong>Languages</strong>  Dutch, French, German</p>
//                     </div>
//                 </div>
//                 <div class="border__countries">
//                     <p><strong>Border Countries:</strong></p>
//                     <div class="border__county__box">
//                         <a href="#">France</a>
//                         <a href="#">Germany</a>
//                         <a href="#">Netherlands</a>
//                     </div>
//                 </div>
//             </div>`;

// }