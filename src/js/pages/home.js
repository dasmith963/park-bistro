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
  heroContainer.classList.add('hero-container');

  heroContainer.append(
    addText('Indulge in Nature\'s Bounty'),
    addText('Neighborhood Bar & Grill'),
    addText('Want to book a table? No problem!')
  );

  return heroContainer;
}

function createActionButtons(buttons) {
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button;
    btnContainer.appendChild(btn);
  })

  return btnContainer;
}
