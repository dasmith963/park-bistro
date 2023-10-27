export default function renderPage(){
  const siteContainer = document.getElementById('site-container');

  siteContainer.appendChild(createHeader('Park Bistro'))
}


function createHeader(restaurantName){
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = restaurantName;

  header.appendChild(logo);
  return header;
}