const input = document.querySelector('input');
const preview = document.querySelector('.preview');
const download = document.querySelector('button');
const img = document.querySelector('img');

input.onkeyup = (e) => {
    if (e.key == 'Enter' && e.target.value.trim()) {
        let videoURL = e.target.value.trim();
        let videoID = '';
        if (videoURL.includes('https://www.youtube.com/watch?v=') != -1) {
            videoID = videoURL.split('v=')[1].substring(0, 11);
            let thumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
            img.src = thumbnail;
            img.style.display = 'block';
            preview.classList.add('active');
        } else if (videoURL.includes('https://youtu.be/') != -1) {
            videoID = videoURL.split('be/')[1].substring(0, 11);
            let thumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
            img.src = thumbnail;
            img.style.display = 'block';
            preview.classList.add('active');
        }
    }
}