const loadQuotes =() => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data))
};

// loadQuotes();

const displayQoute = quote => {
    const blockQoute = document.getElementById('qoute');
    blockQoute.innerText = quote.quote;
}