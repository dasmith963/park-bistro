export default function setActiveTab(currentTab) {
  document.querySelector('.active').classList.remove('active');
  currentTab.setAttribute('class', 'active');
}
