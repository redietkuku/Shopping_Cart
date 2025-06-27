class ShoppingCart {
    constructor() {
      this.items = [];
    }

    add(item, quantity) {
        if (quantity <= 0 || !item || typeof quantity !== 'number') return; //Prevents invalid inputs like 0, negative numbers, non-numeric, or null item
        const existing = this.items.find(i => i.item.id === item.id);
        if (existing) {
          existing.quantity += quantity; // increases quantity
        } else {
          this.items.push({ item, quantity }); // if item not found, it adds it as a new entry
        }
      }

    
      remove(item, quantity) {
        const index = this.items.findIndex(i => i.item.id === item.id);
        if (index === -1 || typeof quantity !== 'number' || quantity <= 0) return; //does nothing if item isn't found
    
        this.items[index].quantity -= quantity;
        if (this.items[index].quantity <= 0) {
          this.items.splice(index, 1); //If quantity becomes 0 or less, remove the item from the cart
        }
      }


      checkout() {
        const total = this.items.reduce(
          (sum, { item, quantity }) => sum + item.price * quantity, //calculates the total price
          0
        );
        this.items = []; //empties cart after checkout
        return total;
      }
}


module.exports = ShoppingCart;