const quote = document.querySelector('.quote p');
const newQuote = document.querySelector('.new-quote');
const author = document.querySelector('.name');
const sound = document.querySelector('.fa-volume-high');
const copy = document.querySelector('.fa-copy');
const share = document.querySelector('.fa-twitter');

newQuote.onclick = () => {
    quote.innerText = 'Loading new quote';
    quote.classList.add('loading');
    author.innerText = 'Loading new author';
    newQuote.innerText = 'Loading...'
    fetch("https://api.quotable.io/random").then(res => res.json()).then(data => {
        quote.innerText = data.content;
        author.innerText = data.author;
        newQuote.innerText = 'New Quote';
        quote.classList.remove('loading');
    })
}

sound.onclick = () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author}`);
    speechSynthesis.speak(utterance);

}
copy.onclick = () => {
    navigator.clipboard.writeText(`${quote.innerText}`);
}
share.onclick = () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, '_blank');

}