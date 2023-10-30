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
    'Fresh Gulf snapper grilled and drizzled with a lemon beurre blanc sauce.'
  )

  const mainCourse2 = new Meal(
    'Penne Primavera',
    '9.99',
    'Penne pasta with a medley of sautéed vegetables in a garlic and olive oil sauce.'
  )

  const mainCourse3 = new Meal(
    'Lemon Herb Roasted Chicken',
    '9.99',
    'Half chicken roasted with lemon, garlic, and fresh herbs, served with roasted vegetables.'
  )

  return [mainCourse1, mainCourse2, mainCourse3];
}

export function getDesserts() {
  const dessert1 = new Meal(
    'Tiramisu',
    '9.99',
    'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.'
  )

  const dessert2 = new Meal(
    'Chocolate Lava Cake',
    '9.99',
    'Warm, gooey chocolate cake with a molten center, topped with vanilla ice cream.'
  )

  const dessert3 = new Meal(
    'The Parc Cheesecake',
    '9.99',
    'Creamy cheesecake with a graham cracker crust, served with berry compote.'
  )

  return [dessert1, dessert2, dessert3];
}

export function getDrinks() {
  const drink1 = new Meal(
    'Ambrosia Bliss',
    '9.99',
    'A champagne cocktail with gin, champagne, lemon juice, and sugar.'
  )

  const drink2 = new Meal(
    'Sazerac',
    '9.99',
    'A classic cocktail featuring rye whiskey, absinthe, and bitters.'
  )

  const drink3 = new Meal(
    'Mint Julep Elegance',
    '9.99',
    'A refined mint julep made with top-shelf bourbon and fresh mint.'
  )

  return [drink1, drink2, drink3];
}