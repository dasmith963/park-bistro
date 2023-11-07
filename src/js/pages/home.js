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
    createActionButtons(['Book Now!', 'View Menu']),
    createFooter()
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

function createFooter() {
  const footer = document.createElement('footer');

  const photographerName = document.createElement('a');
  photographerName.textContent = 'Nick Night';
  photographerName.setAttribute('href', 'https://unsplash.com/@nicknight?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');

  const unsplashLink = document.createElement('a');
  unsplashLink.textContent = 'Unsplash';
  unsplashLink.setAttribute('href', 'https://unsplash.com/photos/brown-wooden-house-near-green-trees-and-river-during-daytime--7ApLF3vbEg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');

  footer.append(
    addText('Photo by'),
    photographerName,
    addText('on'),
    unsplashLink
  );

  return footer;
}