
const ShoppingCart = require('./cart');

describe('ShoppingCart', () => {
  let cart;
  const apple = { id: 1, name: 'Apple', price: 2.5 };
  const banana = { id: 2, name: 'Banana', price: 1.0 };

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  // Tests for ADD function
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


  // Tests for REMOVE function
  test('should remove a quantity of an item from the cart', () => {
    // Arrange
    cart.add(apple, 5);

    // Act
    cart.remove(apple, 2);

    // Assert
    expect(cart.items[0].quantity).toBe(3);
  });

  test('should remove item completely if quantity reaches 0', () => {
    // Arrange
    cart.add(banana, 2);

    // Act
    cart.remove(banana, 2);

    // Assert
    expect(cart.items.length).toBe(0);
  });

  test('should not allow removing item not in cart', () => {
    // Act
    cart.remove(banana, 1);

    // Assert
    expect(cart.items.length).toBe(0); // no error, no effect
  });

  test('should not allow removing more than in cart', () => {
    // Arrange
    cart.add(apple, 1);

    // Act
    cart.remove(apple, 5);

    // Assert
    expect(cart.items.length).toBe(0);
  });



   // Tests for CHECKOUT function
   test('should calculate total price correctly and clear the cart', () => {
    // Arrange
    cart.add(apple, 2);
    cart.add(banana, 3);

    // Act
    const total = cart.checkout();

    // Assert
    expect(total).toBe(8.0);
    expect(cart.items.length).toBe(0);
  });

  test('should return 0 for empty cart on checkout', () => {
    // Act
    const total = cart.checkout();

    // Assert
    expect(total).toBe(0);
  });

  test('should not double-charge after checkout', () => {
    // Arrange
    cart.add(apple, 2);
    cart.checkout();

    // Act
    const total = cart.checkout();

    // Assert
    expect(total).toBe(0);
  });
});