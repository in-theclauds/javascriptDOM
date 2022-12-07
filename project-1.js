// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote: `"Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world."`,
    person: `Desmond Tutu`
}, {
    quote: `"Differences are not intended to separate, to alienate. We are different precisely in order to realize our need of one another."`,
    person: `Marilyn Manson`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
}, {
    quote: `"The way to get started is to quit talking and begin doing"`,
    person: `Walt Disney`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor. "`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
}, {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person: `James Cameron`
}, {
    quote: `"Life is what happens when you're busy making other plans."`,
    person: `John Lennon`
}, {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier. "`,
    person: `Mother Teresa`
}, {

    quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
    person: `Franklin D. Roosevelt`
},];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})