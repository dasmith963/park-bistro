export default function loadHomePage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createHomeSection());
}

function createHomeSection() {
  const homeSection = document.createElement('section');
  homeSection.classList.add('home');

  homeSection.appendChild(createHeroSection());
  return homeSection;
}

function createHeroSection(){
  const heroSection = document.createElement('div');

  const slogan = document.createElement('p');
  slogan.textContent = 'Indulge in Nature\'s Bounty'

  const welcomeText = document.createElement('p');
  welcomeText.textContent = 'Meals crafted with heart, served with style.'

  const callToAction = document.createElement('p');
  callToAction.textContent = 'We invite you to savor every moment, every flavor, and every memory.'

  heroSection.append(slogan, welcomeText, callToAction);
  return heroSection;
}