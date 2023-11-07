/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers/addText.js":
/*!***********************************!*\
  !*** ./src/js/helpers/addText.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addText)
/* harmony export */ });
function addText(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}

/***/ }),

/***/ "./src/js/helpers/menuOptions.js":
/*!***************************************!*\
  !*** ./src/js/helpers/menuOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppetizers: () => (/* binding */ getAppetizers),
/* harmony export */   getDesserts: () => (/* binding */ getDesserts),
/* harmony export */   getDrinks: () => (/* binding */ getDrinks),
/* harmony export */   getMainCourses: () => (/* binding */ getMainCourses)
/* harmony export */ });
class Meal {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }
}
function getAppetizers() {
  const appetizer1 = new Meal('Crispy Calamari', '$9', 'Tender calamari rings served with marinara sauce.');
  const appetizer2 = new Meal('Stuffed Mushrooms', '$9', 'Mushrooms filled with herbed cream cheese and baked to perfection.');
  const appetizer3 = new Meal('Garlic Parmesan Fries', '$9', 'Crispy shoestring fries tossed in garlic and Parmesan cheese.');
  return [appetizer1, appetizer2, appetizer3];
}
function getMainCourses() {
  const mainCourse1 = new Meal('Grilled Snapper', '$9', 'Fresh Gulf snapper grilled and drizzled with a lemon beurre blanc sauce.');
  const mainCourse2 = new Meal('Penne Primavera', '$9', 'Penne pasta with a medley of sautéed vegetables in a garlic and olive oil sauce.');
  const mainCourse3 = new Meal('Roasted Chicken', '$9', 'Half chicken roasted with lemon, garlic, and fresh herbs, served with roasted vegetables.');
  return [mainCourse1, mainCourse2, mainCourse3];
}
function getDesserts() {
  const dessert1 = new Meal('Tiramisu', '$9', 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.');
  const dessert2 = new Meal('Chocolate Lava Cake', '$9', 'Warm, gooey chocolate cake with a molten center, topped with vanilla ice cream.');
  const dessert3 = new Meal('The Parc Cheesecake', '$9', 'Creamy cheesecake with a graham cracker crust, served with berry compote.');
  return [dessert1, dessert2, dessert3];
}
function getDrinks() {
  const drink1 = new Meal('Ambrosia Bliss', '$9', 'A champagne cocktail with gin, champagne, lemon juice, and sugar.');
  const drink2 = new Meal('Sazerac', '$9', 'A classic cocktail featuring rye whiskey, absinthe, and bitters.');
  const drink3 = new Meal('Mint Julep Elegance', '$9', 'A refined mint julep made with top-shelf bourbon and fresh mint.');
  return [drink1, drink2, drink3];
}

/***/ }),

/***/ "./src/js/helpers/setActiveTab.js":
/*!****************************************!*\
  !*** ./src/js/helpers/setActiveTab.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setActiveTab)
/* harmony export */ });
function setActiveTab(currentTab) {
  document.querySelector('.active').classList.remove('active');
  currentTab.setAttribute('class', 'active');
}

/***/ }),

/***/ "./src/js/pages/contact.js":
/*!*********************************!*\
  !*** ./src/js/pages/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactPage)
/* harmony export */ });
/* harmony import */ var _helpers_addText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addText */ "./src/js/helpers/addText.js");

function loadContactPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createContactSection());
}
function createContactSection() {
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact');
  contactSection.append(createContactInfo(), createForm());
  return contactSection;
}
function createContactInfo() {
  const container = document.createElement('div');
  container.classList.add('contact-info');
  const sectionHeader = document.createElement('h2');
  sectionHeader.classList.add('section-header');
  sectionHeader.textContent = 'Contact Us';
  container.append(sectionHeader, (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('We\'d love to hear from you!'), (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('Please call us @ (555) 555-5555'), (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('or email us using the contact form'));
  return container;
}
function createForm() {
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  form.setAttribute('action', '#');
  const userNameInputs = document.createElement('div');
  userNameInputs.classList.add('name-inputs');
  userNameInputs.append(createInput('text', 'First Name: ', 'first-name'), createInput('text', 'Last Name: ', 'last-name'));
  form.append(userNameInputs, createInput('email', 'Email: ', 'user-email'), createInput('text', 'Subject: ', 'subject'), createTextArea(), createFormButton());
  formContainer.appendChild(form);
  return formContainer;
}
function createInput(type, labelName, id) {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = labelName;
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', id);
  input.setAttribute('id', id);
  formGroup.append(label, input);
  return formGroup;
}
function createTextArea() {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  label.setAttribute('for', 'message');
  label.textContent = 'Message:';
  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'message');
  textArea.setAttribute('name', 'message');
  textArea.setAttribute('maxlength', '1000');
  textArea.setAttribute('cols', '30');
  textArea.setAttribute('rows', '10');
  formGroup.append(label, textArea);
  return formGroup;
}
function createFormButton() {
  const btnContainer = document.createElement('div');
  const formBtn = document.createElement('button');
  formBtn.classList.add('form-btn');
  formBtn.textContent = 'Submit';
  formBtn.disabled = true;
  btnContainer.appendChild(formBtn);
  return btnContainer;
}

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _helpers_addText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addText */ "./src/js/helpers/addText.js");

function loadHomePage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createHomeSection());
}
function createHomeSection() {
  const homeSection = document.createElement('section');
  homeSection.classList.add('home');
  homeSection.append(createHeroSection(), createActionButtons(['Book Now!', 'View Menu']), createFooter());
  return homeSection;
}
function createHeroSection() {
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-container');
  heroContainer.append((0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('Indulge in Nature\'s Bounty'), (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('Neighborhood Bar & Grill'), (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('Want to book a table? No problem!'));
  return heroContainer;
}
function createActionButtons(buttons) {
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button;
    btnContainer.appendChild(btn);
  });
  return btnContainer;
}
function createFooter() {
  const footer = document.createElement('footer');
  const photographerName = document.createElement('a');
  photographerName.textContent = 'Nick Night';
  photographerName.setAttribute('href', 'https://unsplash.com/@nicknight?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
  const unsplashLink = document.createElement('a');
  unsplashLink.textContent = 'Unsplash';
  unsplashLink.setAttribute('href', 'https://unsplash.com/photos/brown-wooden-house-near-green-trees-and-river-during-daytime--7ApLF3vbEg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
  footer.append((0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('Photo by'), photographerName, (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])('on'), unsplashLink);
  return footer;
}

/***/ }),

/***/ "./src/js/pages/menu.js":
/*!******************************!*\
  !*** ./src/js/pages/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _helpers_addText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addText */ "./src/js/helpers/addText.js");
/* harmony import */ var _helpers_menuOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/menuOptions */ "./src/js/helpers/menuOptions.js");


function loadMenuPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createMenuSection());
}
function createMenuSection() {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  const sectionHeader = document.createElement('h2');
  sectionHeader.classList.add('section-header');
  sectionHeader.textContent = 'Our Menu';
  menuSection.append(sectionHeader, createMealItem('Appetizers', (0,_helpers_menuOptions__WEBPACK_IMPORTED_MODULE_1__.getAppetizers)()), createMealItem('Main Courses', (0,_helpers_menuOptions__WEBPACK_IMPORTED_MODULE_1__.getMainCourses)()), createMealItem('Desserts', (0,_helpers_menuOptions__WEBPACK_IMPORTED_MODULE_1__.getDesserts)()), createMealItem('Drinks', (0,_helpers_menuOptions__WEBPACK_IMPORTED_MODULE_1__.getDrinks)()));
  return menuSection;
}
function createMealItem(category, meals) {
  const mealContainer = document.createElement('div');
  mealContainer.classList.add('meal-group');
  const mealCategory = document.createElement('h3');
  mealCategory.classList.add('meal-category');
  mealCategory.textContent = category;
  const mealItem = document.createElement('div');
  mealItem.classList.add('meal-item');
  meals.forEach(meal => {
    const mealItemHeading = document.createElement('div');
    mealItemHeading.classList.add('meal-item-heading');
    const mealTitle = (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])(`${meal.title}`);
    const mealPrice = (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])(`${meal.price}`);
    const mealDescription = (0,_helpers_addText__WEBPACK_IMPORTED_MODULE_0__["default"])(`${meal.description}`);
    mealItemHeading.append(mealTitle, mealPrice);
    mealItem.append(mealItemHeading, mealDescription);
  });
  mealContainer.append(mealCategory, mealItem);
  return mealContainer;
}

/***/ }),

/***/ "./src/js/pages/renderPage.js":
/*!************************************!*\
  !*** ./src/js/pages/renderPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPage)
/* harmony export */ });
function renderPage() {
  const siteContainer = document.getElementById('site-container');
  siteContainer.append(createHeader('Park Bistro'), createMain());
}
function createHeader(restaurantName) {
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  const nav = createNav(['Home', 'Menu', 'Contact']);
  logo.textContent = restaurantName;
  header.append(logo, nav);
  return header;
}
function createNav(links) {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  links.forEach((link, index) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', link.toLowerCase());
    if (index === 0) li.classList.add('active');
    const anchor = document.createElement('a');
    anchor.textContent = link;
    anchor.setAttribute('href', '#');
    li.appendChild(anchor);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  return nav;
}
function createMain() {
  const main = document.createElement('main');
  main.classList.add('content');
  return main;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Noto_Serif_JP/NotoSerifJP-Regular.otf */ "./src/fonts/Noto_Serif_JP/NotoSerifJP-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/parkBistro.jpg */ "./src/images/parkBistro.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Noto Serif JP', serif;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
  --primary-bg-color: #fafafa;
  --secondary-bg-color: #333333;
  --text-color: #1f2937;
  --light-text-color: #f7f8f8;
  --home-btn-color: #9c4040;
  --active-home-btn: #cb5b5b;
  --logo-font: 'Noto Serif JP, serif';
  --system-ui: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: var(--system-ui);
  background: var(--primary-bg-color);
  color: var(--text-color);
}

button {
  cursor: pointer;
  padding: 13px 23px;
  border: 2px solid #cacdd3;
  border-radius: .25rem;
  margin-right: 16px;
  line-height: 1.25;
  font-weight: 600;
  font-size: 1.15rem;
  transition: 250ms;
}

header {
  background: var(--secondary-bg-color);
  color: var(--light-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  flex-wrap: wrap;
  box-shadow: 2px 5px 5px -3px rgba(0, 0, 0, 0.52);
  position: sticky;
  top: 0;
}

header>h1 {
  font-size: 2.5rem;
  font-style: italic;
  font-family: var(--logo-font);
  padding-bottom: 10px;
}

ul {
  list-style: none;
  display: flex;
}

a {
  color: inherit;
}

li>a {
  text-decoration: none;
  font-size: 1.2rem;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  opacity: .5;
  transition: 250ms;
}

li.active>a {
  cursor: default;
  opacity: 1;
  border-bottom: 2px solid #f7f8f8;
}

main>section.home {
  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: calc(100vh - 114.5px);
  color: var(--light-text-color);
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}

.hero-container {
  align-self: end;
  text-align: center;
  line-height: 1.7;
  font-size: 1.3rem;
  padding: 20px;
}

.hero-container>:nth-child(2) {
  font-size: 1.75rem;
  font-weight: 600;
}

.btn-container>button {
  background: transparent;
  color: var(--light-text-color);
}

.btn-container>button:hover,
.btn-container>button:focus-visible {
  background: var(--home-btn-color);
  border: 2px solid var(--home-btn-color);
  transform: translateY(1px);
}

.btn-container>button:active {
  background: var(--active-home-btn);
  transform: translateY(0);
}

footer {
  background: var(--secondary-bg-color);
  color: var(--light-text-color);
  width: 100%;
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.section-header,
.meal-category,
.meal-item-heading {
  text-align: center;
  padding: 20px 0 8px;
  font-family: var(--logo-font);
  font-weight: 600;
  font-style: italic;
}

.section-header {
  font-size: 2.5rem;
}

.meal-category {
  font-size: 2rem;
}

.meal-item-heading {
  font-size: 1.65rem;
}

.meal-category::after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 85%;
  padding-top: 8px;
  border-bottom: 2px solid #cacdd3;
  border-radius: .25rem;
}

.meal-item {
  padding: 0 20px 16px;
}

.meal-item-heading {
  display: flex;
  justify-content: space-between;
}

.meal-item>p {
  width: 18.75em;
}

.contact-info>p {
  text-align: center;
  line-height: 1.7;
  font-size: 1.25rem;
}

.contact-info>p:first-of-type {
  font-weight: 600;
}

form {
  padding: 24px;
}

form>div:last-of-type {
  padding: 32px 0 64px;
}

label {
  font-size: 1.2rem;
}

input,
textarea {
  display: block;
  font-size: 1.3rem;
  outline: 0;
  border: 2.5px solid #75797d;
  border-radius: .25rem;
  width: 100%;
  margin: 10px 0;
}

input:focus,
textarea:focus {
  border: 2.5px solid #7597f7;
}

input {
  padding: 5px 10px;
}

form>div:last-of-type {
  display: flex;
  justify-content: end;
}

.form-btn {
  margin: 0;
}

.form-btn:disabled:hover,
.form-btn:disabled:focus-visible {
  background: var(--home-btn-color);
  border: 2px solid var(--home-btn-color);
  transform: translateY(1px);
}

.form-btn:disabled:active {
  background: var(--active-home-btn);
  transform: translateY(0);
}

.form-btn:disabled {
  background: var(--secondary-bg-color);
  color: var(--light-text-color);
  border: 2px solid transparent;
}

@media only screen and (min-width: 801px) {
  button {
    cursor: pointer;
    padding: 15px 32px;
    font-size: 1.45rem;
    margin-right: 25px;
  }

  header {
    justify-content: space-between;
  }

  li:not(.active)>a:hover {
    background: #00000037;
    opacity: 1;
  }

  main>section.home {
    height: calc(100vh - 92px);
  }

  .hero-container {
    font-size: 2rem;
  }

  .hero-container>:nth-child(2) {
    font-size: 2.5rem;
  }

  .section-header {
    font-size: 2.6rem;
  }

  .meal-category {
    font-size: 2.3rem;
  }

  .meal-item-heading {
    font-size: 2rem;
  }

  .meal-item {
    padding: 0 7.5em 16px;
  }

  .meal-item>p {
    font-size: 1.4rem;
  }

  .contact-info>p {
    font-size: 1.4rem;
  }

  form {
    width: 540px;
    margin-left: auto;
    margin-right: auto;
  }

  label {
    font-size: 1.4rem;
  }

  .name-inputs {
    display: flex;
    gap: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Noto Serif JP', serif;\n  src: url('../fonts/Noto_Serif_JP/NotoSerifJP-Regular.otf');\n}\n\n:root {\n  --primary-bg-color: #fafafa;\n  --secondary-bg-color: #333333;\n  --text-color: #1f2937;\n  --light-text-color: #f7f8f8;\n  --home-btn-color: #9c4040;\n  --active-home-btn: #cb5b5b;\n  --logo-font: 'Noto Serif JP, serif';\n  --system-ui: -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n    \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  font-family: var(--system-ui);\n  background: var(--primary-bg-color);\n  color: var(--text-color);\n}\n\nbutton {\n  cursor: pointer;\n  padding: 13px 23px;\n  border: 2px solid #cacdd3;\n  border-radius: .25rem;\n  margin-right: 16px;\n  line-height: 1.25;\n  font-weight: 600;\n  font-size: 1.15rem;\n  transition: 250ms;\n}\n\nheader {\n  background: var(--secondary-bg-color);\n  color: var(--light-text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 18px 32px;\n  flex-wrap: wrap;\n  box-shadow: 2px 5px 5px -3px rgba(0, 0, 0, 0.52);\n  position: sticky;\n  top: 0;\n}\n\nheader>h1 {\n  font-size: 2.5rem;\n  font-style: italic;\n  font-family: var(--logo-font);\n  padding-bottom: 10px;\n}\n\nul {\n  list-style: none;\n  display: flex;\n}\n\na {\n  color: inherit;\n}\n\nli>a {\n  text-decoration: none;\n  font-size: 1.2rem;\n  padding: 8px 16px;\n  letter-spacing: 1.5px;\n  opacity: .5;\n  transition: 250ms;\n}\n\nli.active>a {\n  cursor: default;\n  opacity: 1;\n  border-bottom: 2px solid #f7f8f8;\n}\n\nmain>section.home {\n  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('../images/parkBistro.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: calc(100vh - 114.5px);\n  color: var(--light-text-color);\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  justify-items: center;\n}\n\n.hero-container {\n  align-self: end;\n  text-align: center;\n  line-height: 1.7;\n  font-size: 1.3rem;\n  padding: 20px;\n}\n\n.hero-container>:nth-child(2) {\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n\n.btn-container>button {\n  background: transparent;\n  color: var(--light-text-color);\n}\n\n.btn-container>button:hover,\n.btn-container>button:focus-visible {\n  background: var(--home-btn-color);\n  border: 2px solid var(--home-btn-color);\n  transform: translateY(1px);\n}\n\n.btn-container>button:active {\n  background: var(--active-home-btn);\n  transform: translateY(0);\n}\n\nfooter {\n  background: var(--secondary-bg-color);\n  color: var(--light-text-color);\n  width: 100%;\n  padding: 16px 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n\n.section-header,\n.meal-category,\n.meal-item-heading {\n  text-align: center;\n  padding: 20px 0 8px;\n  font-family: var(--logo-font);\n  font-weight: 600;\n  font-style: italic;\n}\n\n.section-header {\n  font-size: 2.5rem;\n}\n\n.meal-category {\n  font-size: 2rem;\n}\n\n.meal-item-heading {\n  font-size: 1.65rem;\n}\n\n.meal-category::after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 85%;\n  padding-top: 8px;\n  border-bottom: 2px solid #cacdd3;\n  border-radius: .25rem;\n}\n\n.meal-item {\n  padding: 0 20px 16px;\n}\n\n.meal-item-heading {\n  display: flex;\n  justify-content: space-between;\n}\n\n.meal-item>p {\n  width: 18.75em;\n}\n\n.contact-info>p {\n  text-align: center;\n  line-height: 1.7;\n  font-size: 1.25rem;\n}\n\n.contact-info>p:first-of-type {\n  font-weight: 600;\n}\n\nform {\n  padding: 24px;\n}\n\nform>div:last-of-type {\n  padding: 32px 0 64px;\n}\n\nlabel {\n  font-size: 1.2rem;\n}\n\ninput,\ntextarea {\n  display: block;\n  font-size: 1.3rem;\n  outline: 0;\n  border: 2.5px solid #75797d;\n  border-radius: .25rem;\n  width: 100%;\n  margin: 10px 0;\n}\n\ninput:focus,\ntextarea:focus {\n  border: 2.5px solid #7597f7;\n}\n\ninput {\n  padding: 5px 10px;\n}\n\nform>div:last-of-type {\n  display: flex;\n  justify-content: end;\n}\n\n.form-btn {\n  margin: 0;\n}\n\n.form-btn:disabled:hover,\n.form-btn:disabled:focus-visible {\n  background: var(--home-btn-color);\n  border: 2px solid var(--home-btn-color);\n  transform: translateY(1px);\n}\n\n.form-btn:disabled:active {\n  background: var(--active-home-btn);\n  transform: translateY(0);\n}\n\n.form-btn:disabled {\n  background: var(--secondary-bg-color);\n  color: var(--light-text-color);\n  border: 2px solid transparent;\n}\n\n@media only screen and (min-width: 801px) {\n  button {\n    cursor: pointer;\n    padding: 15px 32px;\n    font-size: 1.45rem;\n    margin-right: 25px;\n  }\n\n  header {\n    justify-content: space-between;\n  }\n\n  li:not(.active)>a:hover {\n    background: #00000037;\n    opacity: 1;\n  }\n\n  main>section.home {\n    height: calc(100vh - 92px);\n  }\n\n  .hero-container {\n    font-size: 2rem;\n  }\n\n  .hero-container>:nth-child(2) {\n    font-size: 2.5rem;\n  }\n\n  .section-header {\n    font-size: 2.6rem;\n  }\n\n  .meal-category {\n    font-size: 2.3rem;\n  }\n\n  .meal-item-heading {\n    font-size: 2rem;\n  }\n\n  .meal-item {\n    padding: 0 7.5em 16px;\n  }\n\n  .meal-item>p {\n    font-size: 1.4rem;\n  }\n\n  .contact-info>p {\n    font-size: 1.4rem;\n  }\n\n  form {\n    width: 540px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  label {\n    font-size: 1.4rem;\n  }\n\n  .name-inputs {\n    display: flex;\n    gap: 10px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Noto_Serif_JP/NotoSerifJP-Regular.otf":
/*!*********************************************************!*\
  !*** ./src/fonts/Noto_Serif_JP/NotoSerifJP-Regular.otf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "285413897b112b5d379e.otf";

/***/ }),

/***/ "./src/images/parkBistro.jpg":
/*!***********************************!*\
  !*** ./src/images/parkBistro.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de1cd35aab401bd1b8a0.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_pages_renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/pages/renderPage */ "./src/js/pages/renderPage.js");
/* harmony import */ var _js_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _js_pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pages/menu */ "./src/js/pages/menu.js");
/* harmony import */ var _js_pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/pages/contact */ "./src/js/pages/contact.js");
/* harmony import */ var _js_helpers_setActiveTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/helpers/setActiveTab */ "./src/js/helpers/setActiveTab.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");






document.addEventListener('click', e => {
  updateMainContent(e);
  handleHomeBtnClick(e);
});
function updateMainContent(e) {
  const currentTab = e.target.closest('[data-id]');
  if (!currentTab) return;
  if (currentTab.dataset.id === 'home') {
    (0,_js_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  if (currentTab.dataset.id === 'menu') {
    (0,_js_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
  if (currentTab.dataset.id === 'contact') {
    (0,_js_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  (0,_js_helpers_setActiveTab__WEBPACK_IMPORTED_MODULE_4__["default"])(currentTab);
}
function handleHomeBtnClick(e) {
  if (e.target.textContent === 'Book Now!') {
    (0,_js_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_js_helpers_setActiveTab__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('[data-id="contact"]'));
  }
  if (e.target.textContent === 'View Menu') {
    (0,_js_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_js_helpers_setActiveTab__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('[data-id="menu"]'));
  }
}
(0,_js_pages_renderPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_js_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxtQ0FBbUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlB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c3JjL2pzL2hlbHBlcnMvYWRkVGV4dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvaGVscGVycy9tZW51T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvaGVscGVycy9zZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VzL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUZXh0KHRleHQpIHtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwYXJhO1xufSIsImNsYXNzIE1lYWwge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGV0aXplcnMoKSB7XG4gIGNvbnN0IGFwcGV0aXplcjEgPSBuZXcgTWVhbChcbiAgICAnQ3Jpc3B5IENhbGFtYXJpJyxcbiAgICAnJDknLFxuICAgICdUZW5kZXIgY2FsYW1hcmkgcmluZ3Mgc2VydmVkIHdpdGggbWFyaW5hcmEgc2F1Y2UuJ1xuICApXG5cbiAgY29uc3QgYXBwZXRpemVyMiA9IG5ldyBNZWFsKFxuICAgICdTdHVmZmVkIE11c2hyb29tcycsXG4gICAgJyQ5JyxcbiAgICAnTXVzaHJvb21zIGZpbGxlZCB3aXRoIGhlcmJlZCBjcmVhbSBjaGVlc2UgYW5kIGJha2VkIHRvIHBlcmZlY3Rpb24uJ1xuICApXG5cbiAgY29uc3QgYXBwZXRpemVyMyA9IG5ldyBNZWFsKFxuICAgICdHYXJsaWMgUGFybWVzYW4gRnJpZXMnLFxuICAgICckOScsXG4gICAgJ0NyaXNweSBzaG9lc3RyaW5nIGZyaWVzIHRvc3NlZCBpbiBnYXJsaWMgYW5kIFBhcm1lc2FuIGNoZWVzZS4nXG4gIClcblxuICByZXR1cm4gW2FwcGV0aXplcjEsIGFwcGV0aXplcjIsIGFwcGV0aXplcjNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbkNvdXJzZXMoKSB7XG4gIGNvbnN0IG1haW5Db3Vyc2UxID0gbmV3IE1lYWwoXG4gICAgJ0dyaWxsZWQgU25hcHBlcicsXG4gICAgJyQ5JyxcbiAgICAnRnJlc2ggR3VsZiBzbmFwcGVyIGdyaWxsZWQgYW5kIGRyaXp6bGVkIHdpdGggYSBsZW1vbiBiZXVycmUgYmxhbmMgc2F1Y2UuJ1xuICApXG5cbiAgY29uc3QgbWFpbkNvdXJzZTIgPSBuZXcgTWVhbChcbiAgICAnUGVubmUgUHJpbWF2ZXJhJyxcbiAgICAnJDknLFxuICAgICdQZW5uZSBwYXN0YSB3aXRoIGEgbWVkbGV5IG9mIHNhdXTDqWVkIHZlZ2V0YWJsZXMgaW4gYSBnYXJsaWMgYW5kIG9saXZlIG9pbCBzYXVjZS4nXG4gIClcblxuICBjb25zdCBtYWluQ291cnNlMyA9IG5ldyBNZWFsKFxuICAgICdSb2FzdGVkIENoaWNrZW4nLFxuICAgICckOScsXG4gICAgJ0hhbGYgY2hpY2tlbiByb2FzdGVkIHdpdGggbGVtb24sIGdhcmxpYywgYW5kIGZyZXNoIGhlcmJzLCBzZXJ2ZWQgd2l0aCByb2FzdGVkIHZlZ2V0YWJsZXMuJ1xuICApXG5cbiAgcmV0dXJuIFttYWluQ291cnNlMSwgbWFpbkNvdXJzZTIsIG1haW5Db3Vyc2UzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlc3NlcnRzKCkge1xuICBjb25zdCBkZXNzZXJ0MSA9IG5ldyBNZWFsKFxuICAgICdUaXJhbWlzdScsXG4gICAgJyQ5JyxcbiAgICAnQ2xhc3NpYyBJdGFsaWFuIGRlc3NlcnQgbWFkZSB3aXRoIGxheWVycyBvZiBjb2ZmZWUtc29ha2VkIGxhZHlmaW5nZXJzIGFuZCBtYXNjYXJwb25lIGNoZWVzZS4nXG4gIClcblxuICBjb25zdCBkZXNzZXJ0MiA9IG5ldyBNZWFsKFxuICAgICdDaG9jb2xhdGUgTGF2YSBDYWtlJyxcbiAgICAnJDknLFxuICAgICdXYXJtLCBnb29leSBjaG9jb2xhdGUgY2FrZSB3aXRoIGEgbW9sdGVuIGNlbnRlciwgdG9wcGVkIHdpdGggdmFuaWxsYSBpY2UgY3JlYW0uJ1xuICApXG5cbiAgY29uc3QgZGVzc2VydDMgPSBuZXcgTWVhbChcbiAgICAnVGhlIFBhcmMgQ2hlZXNlY2FrZScsXG4gICAgJyQ5JyxcbiAgICAnQ3JlYW15IGNoZWVzZWNha2Ugd2l0aCBhIGdyYWhhbSBjcmFja2VyIGNydXN0LCBzZXJ2ZWQgd2l0aCBiZXJyeSBjb21wb3RlLidcbiAgKVxuXG4gIHJldHVybiBbZGVzc2VydDEsIGRlc3NlcnQyLCBkZXNzZXJ0M107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcmlua3MoKSB7XG4gIGNvbnN0IGRyaW5rMSA9IG5ldyBNZWFsKFxuICAgICdBbWJyb3NpYSBCbGlzcycsXG4gICAgJyQ5JyxcbiAgICAnQSBjaGFtcGFnbmUgY29ja3RhaWwgd2l0aCBnaW4sIGNoYW1wYWduZSwgbGVtb24ganVpY2UsIGFuZCBzdWdhci4nXG4gIClcblxuICBjb25zdCBkcmluazIgPSBuZXcgTWVhbChcbiAgICAnU2F6ZXJhYycsXG4gICAgJyQ5JyxcbiAgICAnQSBjbGFzc2ljIGNvY2t0YWlsIGZlYXR1cmluZyByeWUgd2hpc2tleSwgYWJzaW50aGUsIGFuZCBiaXR0ZXJzLidcbiAgKVxuXG4gIGNvbnN0IGRyaW5rMyA9IG5ldyBNZWFsKFxuICAgICdNaW50IEp1bGVwIEVsZWdhbmNlJyxcbiAgICAnJDknLFxuICAgICdBIHJlZmluZWQgbWludCBqdWxlcCBtYWRlIHdpdGggdG9wLXNoZWxmIGJvdXJib24gYW5kIGZyZXNoIG1pbnQuJ1xuICApXG5cbiAgcmV0dXJuIFtkcmluazEsIGRyaW5rMiwgZHJpbmszXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBY3RpdmVUYWIoY3VycmVudFRhYikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGN1cnJlbnRUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcbn1cbiIsImltcG9ydCBhZGRUZXh0IGZyb20gXCIuLi9oZWxwZXJzL2FkZFRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZChcbiAgICBjcmVhdGVDb250YWN0SW5mbygpLFxuICAgIGNyZWF0ZUZvcm0oKVxuICApO1xuXG4gIHJldHVybiBjb250YWN0U2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEluZm8oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG5cbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICBjb250YWluZXIuYXBwZW5kKFxuICAgIHNlY3Rpb25IZWFkZXIsXG4gICAgYWRkVGV4dCgnV2VcXCdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdSEnKSxcbiAgICBhZGRUZXh0KCdQbGVhc2UgY2FsbCB1cyBAICg1NTUpIDU1NS01NTU1JyksXG4gICAgYWRkVGV4dCgnb3IgZW1haWwgdXMgdXNpbmcgdGhlIGNvbnRhY3QgZm9ybScpXG4gICk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuXG4gIGNvbnN0IHVzZXJOYW1lSW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVzZXJOYW1lSW5wdXRzLmNsYXNzTGlzdC5hZGQoJ25hbWUtaW5wdXRzJyk7XG4gIHVzZXJOYW1lSW5wdXRzLmFwcGVuZChcbiAgICBjcmVhdGVJbnB1dCgndGV4dCcsICdGaXJzdCBOYW1lOiAnLCAnZmlyc3QtbmFtZScpLFxuICAgIGNyZWF0ZUlucHV0KCd0ZXh0JywgJ0xhc3QgTmFtZTogJywgJ2xhc3QtbmFtZScpLFxuICApO1xuXG4gIGZvcm0uYXBwZW5kKFxuICAgIHVzZXJOYW1lSW5wdXRzLFxuICAgIGNyZWF0ZUlucHV0KCdlbWFpbCcsICdFbWFpbDogJywgJ3VzZXItZW1haWwnKSxcbiAgICBjcmVhdGVJbnB1dCgndGV4dCcsICdTdWJqZWN0OiAnLCAnc3ViamVjdCcpLFxuICAgIGNyZWF0ZVRleHRBcmVhKCksXG4gICAgY3JlYXRlRm9ybUJ1dHRvbigpXG4gICk7XG5cbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcmV0dXJuIGZvcm1Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIGxhYmVsTmFtZSwgaWQpIHtcbiAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWU7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaWQpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXG4gIGZvcm1Hcm91cC5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgcmV0dXJuIGZvcm1Hcm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEoKSB7XG4gIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlOic7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTAwMCcpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJyk7XG5cbiAgZm9ybUdyb3VwLmFwcGVuZChsYWJlbCwgdGV4dEFyZWEpO1xuICByZXR1cm4gZm9ybUdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtQnV0dG9uKCkge1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZvcm1CdG4uY2xhc3NMaXN0LmFkZCgnZm9ybS1idG4nKTtcbiAgZm9ybUJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBmb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJ0bik7XG4gIHJldHVybiBidG5Db250YWluZXI7XG59IiwiaW1wb3J0IGFkZFRleHQgZnJvbSBcIi4uL2hlbHBlcnMvYWRkVGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBtYWluLnJlcGxhY2VDaGlsZHJlbihjcmVhdGVIb21lU2VjdGlvbigpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgaG9tZVNlY3Rpb24uYXBwZW5kKFxuICAgIGNyZWF0ZUhlcm9TZWN0aW9uKCksXG4gICAgY3JlYXRlQWN0aW9uQnV0dG9ucyhbJ0Jvb2sgTm93IScsICdWaWV3IE1lbnUnXSksXG4gICAgY3JlYXRlRm9vdGVyKClcbiAgKTtcblxuICByZXR1cm4gaG9tZVNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm9TZWN0aW9uKCkge1xuICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVyby1jb250YWluZXInKTtcblxuICBoZXJvQ29udGFpbmVyLmFwcGVuZChcbiAgICBhZGRUZXh0KCdJbmR1bGdlIGluIE5hdHVyZVxcJ3MgQm91bnR5JyksXG4gICAgYWRkVGV4dCgnTmVpZ2hib3Job29kIEJhciAmIEdyaWxsJyksXG4gICAgYWRkVGV4dCgnV2FudCB0byBib29rIGEgdGFibGU/IE5vIHByb2JsZW0hJylcbiAgKTtcblxuICByZXR1cm4gaGVyb0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ1dHRvbjtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfSlcblxuICByZXR1cm4gYnRuQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IHBob3RvZ3JhcGhlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHBob3RvZ3JhcGhlck5hbWUudGV4dENvbnRlbnQgPSAnTmljayBOaWdodCc7XG4gIHBob3RvZ3JhcGhlck5hbWUuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BuaWNrbmlnaHQ/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoJyk7XG5cbiAgY29uc3QgdW5zcGxhc2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB1bnNwbGFzaExpbmsudGV4dENvbnRlbnQgPSAnVW5zcGxhc2gnO1xuICB1bnNwbGFzaExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9icm93bi13b29kZW4taG91c2UtbmVhci1ncmVlbi10cmVlcy1hbmQtcml2ZXItZHVyaW5nLWRheXRpbWUtLTdBcExGM3ZiRWc/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoJyk7XG5cbiAgZm9vdGVyLmFwcGVuZChcbiAgICBhZGRUZXh0KCdQaG90byBieScpLFxuICAgIHBob3RvZ3JhcGhlck5hbWUsXG4gICAgYWRkVGV4dCgnb24nKSxcbiAgICB1bnNwbGFzaExpbmtcbiAgKTtcblxuICByZXR1cm4gZm9vdGVyO1xufSIsImltcG9ydCBhZGRUZXh0IGZyb20gXCIuLi9oZWxwZXJzL2FkZFRleHRcIjtcbmltcG9ydCB7IGdldEFwcGV0aXplcnMsIGdldE1haW5Db3Vyc2VzLCBnZXREZXNzZXJ0cywgZ2V0RHJpbmtzIH0gZnJvbSBcIi4uL2hlbHBlcnMvbWVudU9wdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlTWVudVNlY3Rpb24oKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uKCkge1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnO1xuXG4gIG1lbnVTZWN0aW9uLmFwcGVuZChcbiAgICBzZWN0aW9uSGVhZGVyLFxuICAgIGNyZWF0ZU1lYWxJdGVtKCdBcHBldGl6ZXJzJywgZ2V0QXBwZXRpemVycygpKSxcbiAgICBjcmVhdGVNZWFsSXRlbSgnTWFpbiBDb3Vyc2VzJywgZ2V0TWFpbkNvdXJzZXMoKSksXG4gICAgY3JlYXRlTWVhbEl0ZW0oJ0Rlc3NlcnRzJywgZ2V0RGVzc2VydHMoKSksXG4gICAgY3JlYXRlTWVhbEl0ZW0oJ0RyaW5rcycsIGdldERyaW5rcygpKVxuICApXG5cbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZWFsSXRlbShjYXRlZ29yeSwgbWVhbHMpIHtcbiAgY29uc3QgbWVhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYWwtZ3JvdXAnKTtcblxuICBjb25zdCBtZWFsQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtZWFsQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnbWVhbC1jYXRlZ29yeScpO1xuICBtZWFsQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcblxuICBjb25zdCBtZWFsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsSXRlbS5jbGFzc0xpc3QuYWRkKCdtZWFsLWl0ZW0nKTtcblxuICBtZWFscy5mb3JFYWNoKG1lYWwgPT4ge1xuICAgIGNvbnN0IG1lYWxJdGVtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYWxJdGVtSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZWFsLWl0ZW0taGVhZGluZycpO1xuXG4gICAgY29uc3QgbWVhbFRpdGxlID0gYWRkVGV4dChgJHttZWFsLnRpdGxlfWApO1xuICAgIGNvbnN0IG1lYWxQcmljZSA9IGFkZFRleHQoYCR7bWVhbC5wcmljZX1gKTtcbiAgICBjb25zdCBtZWFsRGVzY3JpcHRpb24gPSBhZGRUZXh0KGAke21lYWwuZGVzY3JpcHRpb259YCk7XG5cbiAgICBtZWFsSXRlbUhlYWRpbmcuYXBwZW5kKG1lYWxUaXRsZSwgbWVhbFByaWNlKTtcbiAgICBtZWFsSXRlbS5hcHBlbmQobWVhbEl0ZW1IZWFkaW5nLCBtZWFsRGVzY3JpcHRpb24pO1xuICB9KVxuXG4gIG1lYWxDb250YWluZXIuYXBwZW5kKG1lYWxDYXRlZ29yeSwgbWVhbEl0ZW0pO1xuICByZXR1cm4gbWVhbENvbnRhaW5lcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBjb25zdCBzaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtY29udGFpbmVyJyk7XG5cbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmQoXG4gICAgY3JlYXRlSGVhZGVyKCdQYXJrIEJpc3RybycpLFxuICAgIGNyZWF0ZU1haW4oKVxuICApXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihyZXN0YXVyYW50TmFtZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdihbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10pO1xuXG4gIGxvZ28udGV4dENvbnRlbnQgPSByZXN0YXVyYW50TmFtZTtcbiAgaGVhZGVyLmFwcGVuZChsb2dvLCBuYXYpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYobGlua3MpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBsaW5rLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChpbmRleCA9PT0gMCkgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLnRleHRDb250ZW50ID0gbGluaztcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcblxuICAgIGxpLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KVxuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICByZXR1cm4gbWFpbjtcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTm90b19TZXJpZl9KUC9Ob3RvU2VyaWZKUC1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wYXJrQmlzdHJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ05vdG8gU2VyaWYgSlAnLCBzZXJpZjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5LWJnLWNvbG9yOiAjZmFmYWZhO1xuICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzMzMzMzMztcbiAgLS10ZXh0LWNvbG9yOiAjMWYyOTM3O1xuICAtLWxpZ2h0LXRleHQtY29sb3I6ICNmN2Y4Zjg7XG4gIC0taG9tZS1idG4tY29sb3I6ICM5YzQwNDA7XG4gIC0tYWN0aXZlLWhvbWUtYnRuOiAjY2I1YjViO1xuICAtLWxvZ28tZm9udDogJ05vdG8gU2VyaWYgSlAsIHNlcmlmJztcbiAgLS1zeXN0ZW0tdWk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsXG4gICAgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIixcbiAgICBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBmb250LWZhbWlseTogdmFyKC0tc3lzdGVtLXVpKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxM3B4IDIzcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYWNkZDM7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICB0cmFuc2l0aW9uOiAyNTBtcztcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMThweCAzMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjUyKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG5oZWFkZXI+aDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5saT5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgb3BhY2l0eTogLjU7XG4gIHRyYW5zaXRpb246IDI1MG1zO1xufVxuXG5saS5hY3RpdmU+YSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmN2Y4Zjg7XG59XG5cbm1haW4+c2VjdGlvbi5ob21lIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgLjUpLCByZ2JhKDAsIDAsIDAsIC41KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTQuNXB4KTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8tY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGVyby1jb250YWluZXI+Om50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1jb250YWluZXI+YnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcbn1cblxuLmJ0bi1jb250YWluZXI+YnV0dG9uOmhvdmVyLFxuLmJ0bi1jb250YWluZXI+YnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ob21lLWJ0bi1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvbWUtYnRuLWNvbG9yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5idG4tY29udGFpbmVyPmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtaG9tZS1idG4pO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4uc2VjdGlvbi1oZWFkZXIsXG4ubWVhbC1jYXRlZ29yeSxcbi5tZWFsLWl0ZW0taGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwIDhweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5tZWFsLWNhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubWVhbC1pdGVtLWhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNjVyZW07XG59XG5cbi5tZWFsLWNhdGVnb3J5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjYWNkZDM7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuLm1lYWwtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMjBweCAxNnB4O1xufVxuXG4ubWVhbC1pdGVtLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tZWFsLWl0ZW0+cCB7XG4gIHdpZHRoOiAxOC43NWVtO1xufVxuXG4uY29udGFjdC1pbmZvPnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mbz5wOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5mb3JtIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuZm9ybT5kaXY6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZzogMzJweCAwIDY0cHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMi41cHggc29saWQgIzc1Nzk3ZDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICM3NTk3Zjc7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbmZvcm0+ZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4uZm9ybS1idG4ge1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3JtLWJ0bjpkaXNhYmxlZDpob3Zlcixcbi5mb3JtLWJ0bjpkaXNhYmxlZDpmb2N1cy12aXNpYmxlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taG9tZS1idG4tY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob21lLWJ0bi1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uZm9ybS1idG46ZGlzYWJsZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWhvbWUtYnRuKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4uZm9ybS1idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICBmb250LXNpemU6IDEuNDVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICBsaTpub3QoLmFjdGl2ZSk+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDM3O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICBtYWluPnNlY3Rpb24uaG9tZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTJweCk7XG4gIH1cblxuICAuaGVyby1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5oZXJvLWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cblxuICAubWVhbC1jYXRlZ29yeSB7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gIH1cblxuICAubWVhbC1pdGVtLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5tZWFsLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgNy41ZW0gMTZweDtcbiAgfVxuXG4gIC5tZWFsLWl0ZW0+cCB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAuY29udGFjdC1pbmZvPnAge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDU0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5uYW1lLWlucHV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VB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Y0FBYztBQUNoQjs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZiBKUCcsIHNlcmlmO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL05vdG9fU2VyaWZfSlAvTm90b1NlcmlmSlAtUmVndWxhci5vdGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWJnLWNvbG9yOiAjZmFmYWZhO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMzMzMzMzM7XFxuICAtLXRleHQtY29sb3I6ICMxZjI5Mzc7XFxuICAtLWxpZ2h0LXRleHQtY29sb3I6ICNmN2Y4Zjg7XFxuICAtLWhvbWUtYnRuLWNvbG9yOiAjOWM0MDQwO1xcbiAgLS1hY3RpdmUtaG9tZS1idG46ICNjYjViNWI7XFxuICAtLWxvZ28tZm9udDogJ05vdG8gU2VyaWYgSlAsIHNlcmlmJztcXG4gIC0tc3lzdGVtLXVpOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXG4gICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIixcXG4gICAgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tc3lzdGVtLXVpKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTNweCAyM3B4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NhY2RkMztcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIHRyYW5zaXRpb246IDI1MG1zO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxOHB4IDMycHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3gtc2hhZG93OiAycHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41Mik7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG5oZWFkZXI+aDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxubGk+YSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgb3BhY2l0eTogLjU7XFxuICB0cmFuc2l0aW9uOiAyNTBtcztcXG59XFxuXFxubGkuYWN0aXZlPmEge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjdmOGY4O1xcbn1cXG5cXG5tYWluPnNlY3Rpb24uaG9tZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgLjUpKSwgdXJsKCcuLi9pbWFnZXMvcGFya0Jpc3Ryby5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE0LjVweCk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhlcm8tY29udGFpbmVyPjpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXI+YnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcj5idXR0b246aG92ZXIsXFxuLmJ0bi1jb250YWluZXI+YnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG9tZS1idG4tY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taG9tZS1idG4tY29sb3IpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbi5idG4tY29udGFpbmVyPmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWhvbWUtYnRuKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyLFxcbi5tZWFsLWNhdGVnb3J5LFxcbi5tZWFsLWl0ZW0taGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDAgOHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5tZWFsLWNhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lYWwtaXRlbS1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS42NXJlbTtcXG59XFxuXFxuLm1lYWwtY2F0ZWdvcnk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjYWNkZDM7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxufVxcblxcbi5tZWFsLWl0ZW0ge1xcbiAgcGFkZGluZzogMCAyMHB4IDE2cHg7XFxufVxcblxcbi5tZWFsLWl0ZW0taGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVhbC1pdGVtPnAge1xcbiAgd2lkdGg6IDE4Ljc1ZW07XFxufVxcblxcbi5jb250YWN0LWluZm8+cCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvPnA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbmZvcm0+ZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICBwYWRkaW5nOiAzMnB4IDAgNjRweDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjNzU3OTdkO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjNzU5N2Y3O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuZm9ybT5kaXY6bGFzdC1vZi10eXBlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmZvcm0tYnRuIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZvcm0tYnRuOmRpc2FibGVkOmhvdmVyLFxcbi5mb3JtLWJ0bjpkaXNhYmxlZDpmb2N1cy12aXNpYmxlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvbWUtYnRuLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvbWUtYnRuLWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4uZm9ybS1idG46ZGlzYWJsZWQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1ob21lLWJ0bik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5mb3JtLWJ0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcXG4gIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xcbiAgICBmb250LXNpemU6IDEuNDVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIGxpOm5vdCguYWN0aXZlKT5hOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDM3O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgbWFpbj5zZWN0aW9uLmhvbWUge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MnB4KTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gIH1cXG5cXG4gIC5tZWFsLWNhdGVnb3J5IHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICB9XFxuXFxuICAubWVhbC1pdGVtLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAubWVhbC1pdGVtIHtcXG4gICAgcGFkZGluZzogMCA3LjVlbSAxNnB4O1xcbiAgfVxcblxcbiAgLm1lYWwtaXRlbT5wIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvPnAge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICB3aWR0aDogNTQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgLm5hbWUtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJlbmRlclBhZ2UgZnJvbSBcIi4vanMvcGFnZXMvcmVuZGVyUGFnZVwiO1xuaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9qcy9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL2pzL3BhZ2VzL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vanMvcGFnZXMvY29udGFjdFwiO1xuaW1wb3J0IHNldEFjdGl2ZVRhYiBmcm9tIFwiLi9qcy9oZWxwZXJzL3NldEFjdGl2ZVRhYlwiO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHVwZGF0ZU1haW5Db250ZW50KGUpO1xuICBoYW5kbGVIb21lQnRuQ2xpY2soZSk7XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlTWFpbkNvbnRlbnQoZSkge1xuICBjb25zdCBjdXJyZW50VGFiID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRdJyk7XG4gIGlmICghY3VycmVudFRhYikgcmV0dXJuO1xuXG4gIGlmIChjdXJyZW50VGFiLmRhdGFzZXQuaWQgPT09ICdob21lJykge1xuICAgIGxvYWRIb21lUGFnZSgpO1xuICB9XG4gIGlmIChjdXJyZW50VGFiLmRhdGFzZXQuaWQgPT09ICdtZW51Jykge1xuICAgIGxvYWRNZW51UGFnZSgpO1xuICB9XG4gIGlmIChjdXJyZW50VGFiLmRhdGFzZXQuaWQgPT09ICdjb250YWN0Jykge1xuICAgIGxvYWRDb250YWN0UGFnZSgpO1xuICB9XG4gIHNldEFjdGl2ZVRhYihjdXJyZW50VGFiKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSG9tZUJ0bkNsaWNrKGUpIHtcbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnQm9vayBOb3chJykge1xuICAgIGxvYWRDb250YWN0UGFnZSgpXG4gICAgc2V0QWN0aXZlVGFiKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiY29udGFjdFwiXScpKTtcbiAgfVxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdWaWV3IE1lbnUnKSB7XG4gICAgbG9hZE1lbnVQYWdlKClcbiAgICBzZXRBY3RpdmVUYWIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCJtZW51XCJdJykpO1xuICB9XG59XG5cbnJlbmRlclBhZ2UoKTtcbmxvYWRIb21lUGFnZSgpOyJdLCJuYW1lcyI6WyJhZGRUZXh0IiwidGV4dCIsInBhcmEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIk1lYWwiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImdldEFwcGV0aXplcnMiLCJhcHBldGl6ZXIxIiwiYXBwZXRpemVyMiIsImFwcGV0aXplcjMiLCJnZXRNYWluQ291cnNlcyIsIm1haW5Db3Vyc2UxIiwibWFpbkNvdXJzZTIiLCJtYWluQ291cnNlMyIsImdldERlc3NlcnRzIiwiZGVzc2VydDEiLCJkZXNzZXJ0MiIsImRlc3NlcnQzIiwiZ2V0RHJpbmtzIiwiZHJpbmsxIiwiZHJpbmsyIiwiZHJpbmszIiwic2V0QWN0aXZlVGFiIiwiY3VycmVudFRhYiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJsb2FkQ29udGFjdFBhZ2UiLCJtYWluIiwicmVwbGFjZUNoaWxkcmVuIiwiY3JlYXRlQ29udGFjdFNlY3Rpb24iLCJjb250YWN0U2VjdGlvbiIsImFkZCIsImFwcGVuZCIsImNyZWF0ZUNvbnRhY3RJbmZvIiwiY3JlYXRlRm9ybSIsImNvbnRhaW5lciIsInNlY3Rpb25IZWFkZXIiLCJmb3JtQ29udGFpbmVyIiwiZm9ybSIsInVzZXJOYW1lSW5wdXRzIiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVUZXh0QXJlYSIsImNyZWF0ZUZvcm1CdXR0b24iLCJhcHBlbmRDaGlsZCIsInR5cGUiLCJsYWJlbE5hbWUiLCJpZCIsImZvcm1Hcm91cCIsImxhYmVsIiwiaW5wdXQiLCJ0ZXh0QXJlYSIsImJ0bkNvbnRhaW5lciIsImZvcm1CdG4iLCJkaXNhYmxlZCIsImxvYWRIb21lUGFnZSIsImNyZWF0ZUhvbWVTZWN0aW9uIiwiaG9tZVNlY3Rpb24iLCJjcmVhdGVIZXJvU2VjdGlvbiIsImNyZWF0ZUFjdGlvbkJ1dHRvbnMiLCJjcmVhdGVGb290ZXIiLCJoZXJvQ29udGFpbmVyIiwiYnV0dG9ucyIsImZvckVhY2giLCJidXR0b24iLCJidG4iLCJmb290ZXIiLCJwaG90b2dyYXBoZXJOYW1lIiwidW5zcGxhc2hMaW5rIiwibG9hZE1lbnVQYWdlIiwiY3JlYXRlTWVudVNlY3Rpb24iLCJtZW51U2VjdGlvbiIsImNyZWF0ZU1lYWxJdGVtIiwiY2F0ZWdvcnkiLCJtZWFscyIsIm1lYWxDb250YWluZXIiLCJtZWFsQ2F0ZWdvcnkiLCJtZWFsSXRlbSIsIm1lYWwiLCJtZWFsSXRlbUhlYWRpbmciLCJtZWFsVGl0bGUiLCJtZWFsUHJpY2UiLCJtZWFsRGVzY3JpcHRpb24iLCJyZW5kZXJQYWdlIiwic2l0ZUNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlTWFpbiIsInJlc3RhdXJhbnROYW1lIiwiaGVhZGVyIiwibG9nbyIsIm5hdiIsImNyZWF0ZU5hdiIsImxpbmtzIiwidWwiLCJsaW5rIiwiaW5kZXgiLCJsaSIsInRvTG93ZXJDYXNlIiwiYW5jaG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ1cGRhdGVNYWluQ29udGVudCIsImhhbmRsZUhvbWVCdG5DbGljayIsInRhcmdldCIsImNsb3Nlc3QiLCJkYXRhc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==