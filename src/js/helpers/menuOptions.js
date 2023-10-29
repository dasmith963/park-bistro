class Meal {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }
}

export function getAppetizers() {
  const appetizer1 = new Meal(
    'Crispy Calamari',
    '$9.99',
    'Tender calamari rings served with marinara sauce.'
  )

  const appetizer2 = new Meal(
    'Stuffed Mushrooms',
    '$9.99',
    'Mushrooms filled with herbed cream cheese and baked to perfection.'
  )

  const appetizer3 = new Meal(
    'Garlic Parmesan Fries',
    '$9.99',
    'Crispy shoestring fries tossed in garlic and Parmesan cheese.'
  )

  return [appetizer1, appetizer2, appetizer3];
}

export function getMainCourses() {
  const mainCourse1 = new Meal(
    'Grilled Snapper',
    '9.99',
    'Fresh Gulf snapper grilled and drizzled with a lemon beurre blanc sauce, accompanied by jambalaya.'
  )

  const mainCourse2 = new Meal(
    'Penne Primavera',
    '9.99',
    'Penne pasta with a medley of sautéed vegetables in a garlic and olive oil sauce.'
  )

  const mainCourse3 = new Meal(
    'Lemon Herb Roasted Chicken',
    '9.99',
    'Half chicken roasted with lemon, garlic, and fresh herbs, accompanied by roasted vegetables.'
  )

  return [mainCourse1, mainCourse2, mainCourse3];
}