const cards = document.querySelectorAll(".card");
const cardOne = document.querySelector(".card-first");
const cardSec = document.querySelector(".card-sec");
const title = document.querySelector(".title");
const main = document.querySelector(".main");
const body = document.querySelector("body");

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
      document.querySelector(".title").innerHTML =
        langData["Unlimited Access<br>to All Features"];
      document.querySelector(".list-item_first").innerHTML =
        langData["Unlimited documents"];
      document.querySelector(".list-item_sec").innerHTML =
        langData["Export to clouds"];
      document.querySelector(".list-item_third").innerHTML =
        langData["Text recognition (OCR)"];
      document.querySelector(".card-title").innerHTML = langData["Monthly"];
      document.querySelector(".card-title_sec").innerHTML =
        langData["Annually"];
      document.querySelector(".card-price").innerHTML =
        langData["<strong>{{price}}</strong><br>per month"];
      document.querySelector(".card-line").innerHTML = langData["3 DAYS FREE"];
      document.querySelector(".card-price-bot").innerHTML =
        langData["{{price}}/month"];
      document.querySelector(".interest").innerHTML = langData["-83%"];
      document.querySelector(".card-price_sec").innerHTML =
        langData["<strong>{{price}}</strong><br>per year"];
      document.querySelector(".card-line_sec").innerHTML =
        langData["MOST POPULAR"];
      document.querySelector(".continue").innerHTML = langData["Continue"];
      document.querySelector(".auto-rewable").innerHTML =
        langData["Auto-renewable. Cancel anytime."];
      document.querySelector(".link-Teams").innerHTML =
        langData["Terms of Use"];
      document.querySelector(".header-restore_link").innerHTML =
        langData["Restore"];
      document.querySelector(".link-priacy").innerHTML =
        langData["Privacy Policy"];
      document.querySelector(".card-price-bot_sec").innerHTML =
        langData["{{priceSec}}/month"];
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

// document.querySelector('').innerHTML = langData[]
