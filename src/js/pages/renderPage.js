function createHeader(restaurantName){
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = restaurantName;
  
  header.appendChild(logo);
  return header;
}