export default function loadMenuPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createMenuSection());
}

function createMenuSection(){
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  return menuSection;
}