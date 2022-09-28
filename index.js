const cards = document.querySelectorAll(".card");
const cardOne = document.querySelector(".card-first");
const cardSec = document.querySelector(".card-sec");
const title = document.querySelector(".title");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const arrLang = document.querySelectorAll(".lang");

const btnContinue = document.querySelector(".continue");
let lang = navigator.language.slice(0, 2);

const allLang = ["en", "ru", "es", "fr", "ja", "nl", "zh"];

function cardSelection(card) {
  cards.forEach((el) => {
    el.classList.remove("card-active");
  });
  card.classList.add("card-active");
}

btnContinue.addEventListener("touchstart", () => {
  const cardActive = document.querySelector(".card-active");
  if (cardActive.classList.contains("card-first")) {
    btnContinue.href = " https://apple.com/";
  } else {
    btnContinue.href = "  https://google.com/";
  }
});

cardOne.addEventListener("touchstart", () => cardSelection(cardOne));
cardSec.addEventListener("touchstart", () => cardSelection(cardSec));

function changeLang() {
  let langData;
  let search = window.location.search
    ? window.location.search
    : (location.href = location.pathname + `?lang=${lang}`);
  search = search.slice(-2);
  if (!allLang.includes(search)) {
    location.href = location.pathname + `?lang=en`;
  }

  lang = search;
  fetch(`./Localizations/${lang}.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      langData = data;
    })
    .then(() => {
      arrLang.forEach((el) => {
        data = el.dataset.lang;
        el.innerHTML = langData[data];
      });
    })
    .then(() => {
      if (lang === "ru") {
        title.style.fontSize = "24px";
        title.style.lineHeight = "inherit";
        main.style.maxWidth = "290px";
      }
      if (lang === "es" || lang === "fr" || lang === "nl") {
        main.style.marginTop = "100px";
      }
    });
}
changeLang();
