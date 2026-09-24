// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// Refactored calculation function with quality and security fixes
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// API keys are accessed via process.env.API_KEY, never hardcoded