
let quotes = document.querySelector(".quote");
let authors = document.querySelector(".author");
let btn = document.querySelector(".button");


const url = "https://api.quotable.io/random";
function generateQuote() {
    //console.log("diksha");
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            console.log(result.content);
            console.log(result.author);
            quotes.innerHTML = result.content;
            authors.innerHTML = result.author;
        });


}
btn.addEventListener("click",generateQuote);
//window.addEventListener("load",generateQuote);

