import addText from "../helpers/addText";
import { getAppetizers, getMainCourses, getDesserts, getDrinks } from "../helpers/menuOptions";

export default function loadMenuPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createMenuSection());
}

function createMenuSection() {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');

  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = 'Our Menu';

  menuSection.append(
    sectionHeader,
    createMealItem('Appetizers', getAppetizers()),
    createMealItem('Main Courses', getMainCourses()),
    createMealItem('Desserts', getDesserts()),
    createMealItem('Drinks', getDrinks())
  )

  return menuSection;
}

function createMealItem(category, meals) {
  const mealContainer = document.createElement('div');
  mealContainer.classList.add('meal-group');

  const mealCategory = document.createElement('h3');
  mealCategory.classList.add('meal-category');
  mealCategory.textContent = category;

  const mealItem = document.createElement('div');
  mealItem.classList.add('meal-item');

  meals.forEach(meal => {
    const mealItemHeading = document.createElement('div');
    mealItemHeading.classList.add('meal-item-heading');

    const mealTitle = addText(`${meal.title}`);
    const mealPrice = addText(`${meal.price}`);
    const mealDescription = addText(`${meal.description}`);

    mealItemHeading.append(mealTitle, mealPrice);
    mealItem.append(mealItemHeading, mealDescription);
  })

  mealContainer.append(mealCategory, mealItem);
  return mealContainer;
}