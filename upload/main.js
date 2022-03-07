const fileInput = document.querySelector('.upload-area input'),
    progressArea = document.querySelector('.upload-progress'),
    listFiles = document.querySelector('.list-files'),
    uploadArea = document.querySelector('.upload-area');

function uploadFile(name) {

}

uploadArea.onclick = () => {
    fileInput.click();
}

fileInput.onchange = ({ target }) => {
    let file = target.files[0];
    if (file) {
        let { name } = file;
        uploadFile(name);
    }
}