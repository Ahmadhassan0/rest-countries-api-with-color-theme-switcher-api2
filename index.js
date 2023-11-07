const countriesGrid = document.querySelector(".main__bottom");

// async function for getting data from api
async function getCountries() {
    const raw = await fetch("https://restcountries.com/v3.1/all");
    const res = await raw.json();
    res.forEach((element) => {
        countries(element)
        // filterRegion(element);
    })
}
getCountries();

// function for creating container and inserting data
function countries(data) {
    const country = document.createElement("country");
    country.classList.add("country");
    country.innerHTML = `<div class="country__img">
            <img src="${data.flags.png}" alt="${data.name.common} country flag">
        </div>
        <div class="country__content">
            <h2 class="country__name">${data.name.common}</h2>
            <p class="country__population">Population: <span>${data.population}</span></p>
            <p class="country__region">Region: <span>${data.region}</span></p>
            <p class="country__capital">Capital: <span>${data.capital}</span></p>
        </div>`;
    countriesGrid.appendChild(country);
}

const filterRegionText = document.querySelector(".dropDown__filter__text");
const filterArrow = document.querySelector(".dropDown__chevron");
const dropDownBox = document.querySelector(".dropDown__box");
const dropDownBoxP = document.querySelectorAll(".dropDown__box p");

// function to show/hide drop Down box 
filterArrow.addEventListener("click", (e) => {
    dropDownBox.classList.toggle("active");
    e.currentTarget.classList.toggle("active");
})

// function to add drop down text into Filter box
// dropDownBoxP.forEach((e) => {
//     e.addEventListener("click", (e) => {

//         filterRegionText.innerText = e.target.innerText;
//         console.log(filterRegionText)

//     })
// })
// function filterRegion (data) {
//     const region = dropDownBox.children;
//     // dropDownBox.innerText = data.region;
//     if(region === data.region) {
//         region.innerText = "";
//     } else {
//         region.innerText = data.region;
//     }
//     console.log(region)
//     }
const countryRegion = document.getElementsByClassName("country__region");
// const countryRegion = document.querySelectorAll(".country__region p");
const main__bottom = document.querySelector(".main__bottom");
// console.log(countryRegion)
dropDownBoxP.forEach(element => {
    element.addEventListener("click", () => {
        // console.log(element);
        Array.from(countryRegion).forEach(elem => {
            console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid";
            } else {
                elem.parentElement.parentElement.style.display = "none";
            }
        })

        // console.log(countryRegion)
        
        // filterRegionText.innerText = e.target.innerText;
        // console.log(filterRegionText)

    })
})


const searchInput = document.querySelector(".search");
const countryName = document.getElementsByClassName("country__name");
searchInput.addEventListener("input", () => {
    console.log(searchInput.value)
    Array.from(countryName).forEach((elem) => {
        if(elem.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";
        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    })
})



