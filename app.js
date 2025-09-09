import { apiKey } from "./config.js";

("use strict");
const modal = document.querySelector("#modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const inputQuote = document.querySelector(".input-quote");
const loveText = document.querySelector(".love-text");

async function getQuote() {
  const url = "https://love-quote.p.rapidapi.com/lovequote";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "love-quote.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    loveText.textContent = result.quote;
    loveText.innerHTML = result.quote
      .replace(/, /g, ",<br>") // break after commas
      .replace(/love/gi, "<span>love</span>"); // highlight 'love'

    console.log(result);
  } catch (error) {
    console.error("Error fetching quote:", error);
    loveText.textContent = "An error occurred while fetching the quote.";
  }
}

getQuote();
openBtn.addEventListener("click", function () {
  modal.showModal();
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputQuote.value === "") {
    alert("Don't you love me 😥😤🥹");
  } else {
    modal.close();

    alert(
      `Aww... that's so sweet, my dentist just scheduled an appointment 🍭`
    );
  }
  inputQuote.value = "";
  getQuote();
});
