class ShoppingCart {
    constructor() {
      this.items = [];
    }

    add(item, quantity) {
        if (quantity <= 0) return;
        const existing = this.items.find(i => i.item.id === item.id);
        if (existing) {
          existing.quantity += quantity;
        } else {
          this.items.push({ item, quantity });
        }
      }

    
      remove(item, quantity) {
        const index = this.items.findIndex(i => i.item.id === item.id);
        if (index === -1) return;
    
        this.items[index].quantity -= quantity;
        if (this.items[index].quantity <= 0) {
          this.items.splice(index, 1);
        }
      }
}  