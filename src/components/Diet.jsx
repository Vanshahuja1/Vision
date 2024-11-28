import React from "react";

const meals = [
  {
    category: "Vegetarian",
    items: [
      {
        name: "Quaker Oats with Almond Milk & Berries",
        protein: "12g",
        carbs: "35g",
        fats: "7g",
        calories: "220 kcal",
        ingredients: [
          { name: "Quaker Oats", quantity: "50g" },
          { name: "Almond Milk", quantity: "200ml" },
          { name: "Blueberries", quantity: "30g" },
          { name: "Strawberries", quantity: "30g" },
        ],
      },
      {
        name: "Quaker Masala Oats with Vegetables",
        protein: "10g",
        carbs: "40g",
        fats: "8g",
        calories: "230 kcal",
        ingredients: [
          { name: "Quaker Masala Oats", quantity: "50g" },
          { name: "Carrots", quantity: "20g" },
          { name: "Peas", quantity: "20g" },
          { name: "Capsicum", quantity: "15g" },
        ],
      },
      {
        name: "Quaker Oats Pancakes",
        protein: "15g",
        carbs: "45g",
        fats: "10g",
        calories: "300 kcal",
        ingredients: [
          { name: "Quaker Oats (blended into flour)", quantity: "50g" },
          { name: "Banana", quantity: "50g" },
          { name: "Egg", quantity: "1 large" },
          { name: "Honey", quantity: "10g" },
        ],
      },
      {
        name: "Quaker Multigrain Porridge with Fruits",
        protein: "10g",
        carbs: "50g",
        fats: "5g",
        calories: "280 kcal",
        ingredients: [
          { name: "Quaker Multigrain Porridge", quantity: "50g" },
          { name: "Apple", quantity: "40g" },
          { name: "Cinnamon Powder", quantity: "2g" },
          { name: "Walnuts", quantity: "10g" },
        ],
      },
      {
        name: "Quaker Oatmeal Energy Balls",
        protein: "8g",
        carbs: "25g",
        fats: "7g",
        calories: "180 kcal",
        ingredients: [
          { name: "Quaker Oats", quantity: "40g" },
          { name: "Peanut Butter", quantity: "20g" },
          { name: "Chia Seeds", quantity: "5g" },
          { name: "Honey", quantity: "10g" },
        ],
      },
    ],
  },
  {
    category: "Non-Vegetarian",
    items: [
      {
        name: "Quaker Oats Crusted Chicken",
        protein: "35g",
        carbs: "25g",
        fats: "12g",
        calories: "350 kcal",
        ingredients: [
          { name: "Chicken Breast", quantity: "150g" },
          { name: "Quaker Oats (blended into crumbs)", quantity: "50g" },
          { name: "Egg", quantity: "1 large" },
          { name: "Olive Oil", quantity: "5ml" },
        ],
      },
      {
        name: "Quaker Oats & Tuna Salad",
        protein: "30g",
        carbs: "20g",
        fats: "10g",
        calories: "280 kcal",
        ingredients: [
          { name: "Tuna", quantity: "100g" },
          { name: "Quaker Oats (soaked)", quantity: "30g" },
          { name: "Lettuce", quantity: "20g" },
          { name: "Cherry Tomatoes", quantity: "20g" },
        ],
      },
      {
        name: "Quaker Oats & Egg Muffins",
        protein: "25g",
        carbs: "15g",
        fats: "10g",
        calories: "250 kcal",
        ingredients: [
          { name: "Eggs", quantity: "2 large" },
          { name: "Quaker Oats", quantity: "30g" },
          { name: "Spinach", quantity: "20g" },
          { name: "Cheddar Cheese", quantity: "10g" },
        ],
      },
      {
        name: "Quaker Masala Oats with Prawns",
        protein: "28g",
        carbs: "35g",
        fats: "9g",
        calories: "300 kcal",
        ingredients: [
          { name: "Quaker Masala Oats", quantity: "50g" },
          { name: "Prawns", quantity: "80g" },
          { name: "Capsicum", quantity: "20g" },
          { name: "Onion", quantity: "15g" },
        ],
      },
      {
        name: "Quaker Oats Breakfast Wrap",
        protein: "20g",
        carbs: "30g",
        fats: "8g",
        calories: "280 kcal",
        ingredients: [
          { name: "Quaker Oats (blended into flour)", quantity: "50g" },
          { name: "Egg", quantity: "1 large" },
          { name: "Chicken Strips", quantity: "50g" },
          { name: "Avocado", quantity: "30g" },
        ],
      },
    ],
  },
];

const Diet = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Quaker Meal Plan Suggestions
      </h1>
      <div className="max-w-6xl mx-auto">
        {meals.map((mealCategory) => (
          <div key={mealCategory.category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              {mealCategory.category} Meals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mealCategory.items.map((meal) => (
                <div
                  key={meal.name}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-medium mb-2 text-gray-700">
                    {meal.name}
                  </h3>
                  <ul className="text-gray-600 mb-2">
                    <li>
                      <strong>Protein:</strong> {meal.protein}
                    </li>
                    <li>
                      <strong>Carbs:</strong> {meal.carbs}
                    </li>
                    <li>
                      <strong>Fats:</strong> {meal.fats}
                    </li>
                    <li>
                      <strong>Calories:</strong> {meal.calories}
                    </li>
                  </ul>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">
                    Ingredients:
                  </h4>
                  <ul className="text-gray-600 list-disc ml-6">
                    {meal.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.name}: {ingredient.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
