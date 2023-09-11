let allBtnEl = document.getElementById("all");
let breakfastBtnEl = document.getElementById("breakfast");
let lunchBtnEl = document.getElementById("lunch");
let dinnerBtnEl = document.getElementById("dinner");
let coffeeBtnEl = document.getElementById("coffee");
let snacksBtnEl = document.getElementById("snacks");

let menuAllEl = document.getElementById("menuAll");
let menuBreakfastEl = document.getElementById("menuBreakfast");
let menuLunchEl = document.getElementById("menu-lunch");
let menuDinnerEl = document.getElementById("menu-dinner");
let menuCoffeeEl = document.getElementById("menu-coffee");
let menuSnacksEl = document.getElementById("menu-snacks")

allBtnEl.addEventListener("click", function() {
    allBtnEl.classList.add("menu-btn-active");
    allBtnEl.classList.remove("menu-btn-inactive");
    breakfastBtnEl.classList.add("menu-btn-inactive");
    lunchBtnEl.classList.add("menu-btn-inactive");
    dinnerBtnEl.classList.add("menu-btn-inactive");
    coffeeBtnEl.classList.add("menu-btn-inactive");
    snacksBtnEl.classList.add("menu-btn-inactive");
    menuBreakfastEl.classList.add("d-none");
    menuLunchEl.classList.add("d-none");
    menuDinnerEl.classList.add("d-none");
    menuCoffeeEl.classList.add("d-none");
    menuSnacksEl.classList.add("d-none");
    menuAllEl.classList.remove("d-none");
})
breakfastBtnEl.addEventListener("click", function() {
    allBtnEl.classList.add("menu-btn-inactive");
    breakfastBtnEl.classList.add("menu-btn-active");
    breakfastBtnEl.classList.remove("menu-btn-inactive");
    lunchBtnEl.classList.add("menu-btn-inactive");
    dinnerBtnEl.classList.add("menu-btn-inactive");
    coffeeBtnEl.classList.add("menu-btn-inactive");
    snacksBtnEl.classList.add("menu-btn-inactive");
    menuAllEl.classList.add("d-none");
    menuBreakfastEl.classList.remove("d-none");
    menuLunchEl.classList.add("d-none");
    menuDinnerEl.classList.add("d-none");
    menuCoffeeEl.classList.add("d-none");
    menuSnacksEl.classList.add("d-none");
})
lunchBtnEl.addEventListener("click", function() {
    lunchBtnEl.classList.add("menu-btn-active");
    lunchBtnEl.classList.remove("menu-btn-inactive");
    breakfastBtnEl.classList.add("menu-btn-inactive");
    allBtnEl.classList.add("menu-btn-inactive");
    dinnerBtnEl.classList.add("menu-btn-inactive");
    coffeeBtnEl.classList.add("menu-btn-inactive");
    snacksBtnEl.classList.add("menu-btn-inactive");
    menuAllEl.classList.add("d-none");
    menuBreakfastEl.classList.add("d-none");
    menuLunchEl.classList.remove("d-none");
    menuDinnerEl.classList.add("d-none");
    menuCoffeeEl.classList.add("d-none");
    menuSnacksEl.classList.add("d-none");
})
dinnerBtnEl.addEventListener("click", function() {
    dinnerBtnEl.classList.add("menu-btn-active");
    dinnerBtnEl.classList.remove("menu-btn-inactive")
    breakfastBtnEl.classList.add("menu-btn-inactive")
    allBtnEl.classList.add("menu-btn-inactive")
    lunchBtnEl.classList.add("menu-btn-inactive")
    coffeeBtnEl.classList.add("menu-btn-inactive")
    snacksBtnEl.classList.add("menu-btn-inactive")
    menuAllEl.classList.add("d-none");
    menuBreakfastEl.classList.add("d-none");
    menuLunchEl.classList.add("d-none");
    menuDinnerEl.classList.remove("d-none");
    menuCoffeeEl.classList.add("d-none");
    menuSnacksEl.classList.add("d-none");
})
coffeeBtnEl.addEventListener("click", function() {
    coffeeBtnEl.classList.add("menu-btn-active");
    coffeeBtnEl.classList.remove("menu-btn-inactive");
    breakfastBtnEl.classList.add("menu-btn-inactive");
    allBtnEl.classList.add("menu-btn-inactive");
    dinnerBtnEl.classList.add("menu-btn-inactive");
    lunchBtnEl.classList.add("menu-btn-inactive");
    snacksBtnEl.classList.add("menu-btn-inactive");
    menuAllEl.classList.add("d-none");
    menuBreakfastEl.classList.add("d-none");
    menuLunchEl.classList.add("d-none");
    menuDinnerEl.classList.add("d-none");
    menuCoffeeEl.classList.remove("d-none");
    menuSnacksEl.classList.add("d-none");
});
snacksBtnEl.addEventListener("click", function() {
    snacksBtnEl.classList.add("menu-btn-active");
    snacksBtnEl.classList.remove("menu-btn-inactive")
    breakfastBtnEl.classList.add("menu-btn-inactive");
    allBtnEl.classList.add("menu-btn-inactive");
    dinnerBtnEl.classList.add("menu-btn-inactive");
    coffeeBtnEl.classList.add("menu-btn-inactive");
    lunchBtnEl.classList.add("menu-btn-inactive");
    menuAllEl.classList.add("d-none");
    menuBreakfastEl.classList.add("d-none");
    menuLunchEl.classList.add("d-none");
    menuDinnerEl.classList.add("d-none");
    menuCoffeeEl.classList.add("d-none");
    menuSnacksEl.classList.remove("d-none");
})