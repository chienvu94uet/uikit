const removeAll = document.querySelector('.remove-all');
const input = document.querySelector('.input-tag');
const ul = document.querySelector('ul');
const remainTag = document.querySelector('.remain-tag');

let tags = [];
let maxTag = 10;

function removeTag(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    input.focus();
}

function createTag() {
    document.querySelectorAll('li').forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag} <i class="fa-solid fa-xmark delete-tag" onclick="removeTag(this,'${tag}')"></i></li>`;
        ul.insertAdjacentHTML('afterbegin', liTag);
    })
}

input.onkeyup = (e) => {
    if (e.key === 'Enter') {
        let tag = e.target.value.replace(/\s+/g, ' '); // remove space between word
        if (tag.length > 1 && !tags.includes(tag)) {
            tag.split(',').forEach((tag) => {
                !tags.includes(tag) && tags.length < maxTag && tags.push(tag);
                createTag();
            })
            e.target.value = '';
            remainTag.innerText = maxTag - tags.length;
        }
    }
}


removeAll.onclick = () => {
    tags.length = 0;
    remainTag.innerText = maxTag;
    document.querySelectorAll('li').forEach(li => li.remove());
}
