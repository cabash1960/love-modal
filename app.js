"use strict";

const modal = document.querySelector("#modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const inputQuote = document.querySelector(".input-quote");

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
});
