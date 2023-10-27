export default function loadHomePage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createHomeSection());
}

function createHomeSection() {
  const homeSection = document.createElement('section');
  homeSection.classList.add('home');
  return homeSection;
}