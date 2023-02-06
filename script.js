

const quoteContainer = document.getElementById('q_container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const whatsappBtn = document.getElementById('whatsapp');
const newQuoetBtn = document.getElementById('new_quote');

let apiQuotes = [];

//show new quotes

function newQuotes(){
    // Pick a random quote from api quoted array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    

    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }

    if(quote.text.length > 80){
        quoteText.classList.add('long_quote');
    }
    else{
        quoteText.classList.remove('long_quote');  
    }

    quoteText.textContent = quote.text;
}

// Get quotes from api

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    }
    catch (error){
        alert();
    }
}

//Tweet Quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
function whatsappQuote(){
    const whatsappUrl = `https://web.whatsapp.com/send?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(whatsappUrl, '_blank');
}
//Event listners
newQuoetBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click', tweetQuote);
whatsappBtn.addEventListener('click', whatsappQuote);


getQuotes();