# Shopping_Cart


This is a simple JavaScript-based **Shopping Cart** implementation that supports:

- Adding items
- Removing items
- Checking out (calculating total and clearing cart)

It also includes comprehensive **unit tests** using **Jest**, covering both normal and edge case scenarios.

---

## 📦 Project Structure

shopping-cart/
├── cart.js # Business logic
├── cart.test.js # Jest test cases
├── package.json # Project config
└── README.md # Project overview

Getting Started

### 1. Clone the Repository

```bash
git clone <https://github.com/redietkuku/Shopping_Cart.git>
cd shopping-cart

Then Install Dependencies
 npm install
 npm test

  
  
  Features
✅ add(item, quantity)
Adds a new item to the cart

Increases quantity if item already exists

Ignores invalid quantities (e.g. 0 or negative)

✅ remove(item, quantity)
Removes a quantity of an item

Deletes the item completely if quantity reaches 0

Ignores requests for items not in the cart

✅ checkout()
Calculates total price

Clears the cart after checkout



🧪 Testing
This project uses Jest to ensure all logic is working as expected.

✅ Covered Test Scenarios:
Add item, update quantity

Remove partial/complete item

Checkout behavior




