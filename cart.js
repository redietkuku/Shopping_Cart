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
}  