const countriesGrid = document.querySelector(".main__bottom");

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
const filterArrow = document.querySelector(".dropDown__chevron");
const dropDownBox = document.querySelector(".dropDown__box");
console.log(dropDownBox);
() => {
    
} 
filterArrow.addEventListener("click", (e) => {
    dropDownBox.classList.toggle("active");
    e.currentTarget.classList.toggle("active");
})


// Filtering the Countries by region
const dropDownBoxP = document.querySelectorAll(".dropDown__box p");
const countryRegion = document.getElementsByClassName("country__region");
const filterRegionText = document.querySelector(".dropDown__filter__text");
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
const searchInput = document.querySelector(".search");
const countryName = document.getElementsByClassName("country__name");
() => {
    
}
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


// Theme switching
const darkMode = document.querySelector(".dark__mode");
const moonIcon = document.querySelector(".dark__mode i");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const searchBox = document.querySelector(".form__control");
const dropDownContainer = document.querySelector(".dropDown-Container");
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
        console.log(countryElement);
    });
})


/* =================================================
                    Detail JS
====================================================*/