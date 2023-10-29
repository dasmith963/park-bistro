import addText from "../helpers/addText";

export default function loadMenuPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createMenuSection());
}

function createMenuSection() {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  return menuSection;
}

function createMealItem(category, meals) {
  const mealContainer = document.createElement('div');
  const mealItem = document.createElement('div');
  const mealCategory = document.createElement('h3');
  mealCategory.textContent = category;

  meals.forEach(meal => {
    const mealTitle = addText(`${meal.title}`);
    const mealPrice = addText(`${meal.price}`);
    const mealDescription = addText(`${meal.description}`);
    mealItem.append(mealTitle, mealPrice, mealDescription);
  })

  mealContainer.append(mealCategory, mealItem);
  return mealContainer;
}