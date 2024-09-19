const quotes = [
    {
        quote: "일찍 일어나는 새가 피곤한 법이다.",
        author: "Kim YoungWan"
    },
    {
        quote: "늦었다고 생각할 때가 진짜 늦은거다.",
        author: "Kim YoungWan"
    },
    {
        quote: "가난함은 죄가 아니다.",
        author: "Kim YoungWan"
    },
    {
        quote: "모르는 것은 있을 수 있지만 알려고 하지 않는 것은 멍청하다.",
        author: "Kim YoungWan"
    },
    {
        quote: "일상은 원래 재미없다. 특별한 순간이 찾아와 즐거움을 주는 것이다.",
        author: "Kim YoungWan"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
