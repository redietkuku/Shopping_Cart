const ShoppingCart = require('./cart'); // or import { ShoppingCart } from './cart';

describe('ShoppingCart', () => {
  let cart;
  const apple = { id: 1, name: 'Apple', price: 2.5 };
  const banana = { id: 2, name: 'Banana', price: 1.0 };

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  // === ADD ===
  test('should add a single item to the cart', () => {
    // Arrange
    const quantity = 3;

    // Act
    cart.add(apple, quantity);

    // Assert
    expect(cart.items).toEqual([{ item: apple, quantity: 3 }]);
  });

  test('should increase quantity when adding the same item again', () => {
    // Arrange
    cart.add(apple, 2);

    // Act
    cart.add(apple, 1);

    // Assert
    expect(cart.items[0].quantity).toBe(3);
  });

  test('should not add item with quantity 0 or negative', () => {
    // Act
    cart.add(apple, 0);
    cart.add(banana, -1);

    // Assert
    expect(cart.items.length).toBe(0);
  });
});