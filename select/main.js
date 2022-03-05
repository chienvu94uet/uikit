const wrapper = document.querySelector('.wrapper');
const selectBtn = wrapper.querySelector('.select-btn');
const selectedCountryEle = wrapper.querySelector('.select-btn span');
const options = wrapper.querySelector('.options');
const search = wrapper.querySelector('.search input');

let listCountries = ["Viet Nam", "USA", "UAE", "Germany", "Korean",
    "Japan", "Rusia", "Austrlia", "Indo", "Thai Lo"];

function selectCountry(selectedCountry) {
    wrapper.classList.remove("active");
    selectedCountryEle.innerText = selectedCountry.innerText;

}

function showListCountries(filter = '') {
    let result = '';
    let listCountriesFilter = [...listCountries];

    if (filter) {
        listCountriesFilter = listCountriesFilter.filter(country => country.includes(filter));
    }
    listCountriesFilter.forEach(country => {
        result += `<li onclick="selectCountry(this)">${country}</li>`;
    })
    options.innerHTML = result || 'No countries';
}

showListCountries();

selectBtn.onclick = () => {
    wrapper.classList.toggle("active");
}

search.onkeyup = (e) => {
    if (e.key == 'Enter') {
        let searchKey = search.value;
        showListCountries(searchKey)
    }
}