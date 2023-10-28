import addText from "../helpers/addText";

export default function loadHomePage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createHomeSection());
}

function createHomeSection() {
  const homeSection = document.createElement('section');
  homeSection.classList.add('home');

  homeSection.append(
    createHeroSection(),
    createActionButtons(['Book Now!', 'View Menu'])
  );

  return homeSection;
}

function createHeroSection() {
  const heroContainer = document.createElement('div');

  heroContainer.append(
    addText('Indulge in Nature\'s Bounty'),
    addText('Meals crafted with heart, served with style.'),
    addText('We invite you to savor every moment, every flavor, and every memory.')
  );

  return heroContainer;
}

function createActionButtons(buttons) {
  const btnContainer = document.createElement('div');

  buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button;
    btnContainer.appendChild(btn);
  })

  return btnContainer;
}
