export default function renderPage() {
  const siteContainer = document.getElementById('site-container');

  siteContainer.append(
    createHeader('Park Bistro'),
    createMain()
  )
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
    anchor.setAttribute('href', '#' + link.toLowerCase());

    li.appendChild(anchor);
    ul.appendChild(li);
  })

  nav.appendChild(ul);
  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('content');
  return main;
}