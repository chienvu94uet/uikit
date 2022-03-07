const input = document.querySelector('input');
const inputWrapper = document.querySelector('.input-wrapper');
const suggestWrapper = document.querySelector('.suggest-wrapper');
const suggestLists = document.querySelector('.suggest-lists');

let suggestKeyData = [
    "chienvu",
    "chienvu1911",
    "chienvu94"
];


let suggestKey = [];

function chooseKey(selectedKey) {
    input.value = selectedKey.innerText;
    suggestWrapper.classList.remove('active');
    inputWrapper.classList.remove('has-search');
}

function renderSuggestLists() {
    let result = '';
    if (suggestKey && suggestKey.length > 0) {
        suggestKey.forEach(key => {
            result += `<li onclick='chooseKey(this)'>${key}</li>`
        });
        suggestLists.innerHTML = result;
    } else {
        suggestWrapper.classList.remove('active');
        inputWrapper.classList.remove('has-search');
    }
}


input.onkeyup = (e) => {
    let keySearch = e.target.value.trim();
    if (keySearch) {
        suggestWrapper.classList.add('active');
        inputWrapper.classList.add('has-search');
    }
    if (keySearch) {
        suggestKey = suggestKeyData.filter(key => key.includes(keySearch.toLowerCase()));
        renderSuggestLists();
    } else {
        suggestKey = [];
        renderSuggestLists();
        suggestWrapper.classList.remove('active');
        inputWrapper.classList.remove('has-search');
    }
}