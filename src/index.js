import renderPage from "./js/pages/renderPage";
import loadHomePage from "./js/pages/home";
import loadMenuPage from "./js/pages/menu";
import loadContactPage from "./js/pages/contact";
import setActiveTab from "./js/helpers/setActiveTab";
import './css/style.css';

document.addEventListener('click', updateMainContent);

function updateMainContent(e) {
  const currentTab = e.target.closest('[data-id]');
  if (!currentTab) return;

  if (currentTab.dataset.id === 'home') {
    loadHomePage();
  }
  if (currentTab.dataset.id === 'menu') {
    loadMenuPage();
  }
  if (currentTab.dataset.id === 'contact') {
    loadContactPage();
  }
  setActiveTab(currentTab);
}

renderPage();
loadHomePage();