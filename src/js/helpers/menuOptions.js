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