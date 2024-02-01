const bankAccount = {
    accountNumber: 555320071,
    accountHolderName: "Yan Vorobev",
    balance: 1000,
    deposit: function (amount) {
        this.balance = this.balance + amount;
    },
    withdraw: function (amount) {
        this.balance = this.balance - amount;
    },
    checkBalance: function () {
        console.log(this.balance)
    }
}
bankAccount.checkBalance(); // Account balance is 1000
bankAccount.deposit(500);
bankAccount.checkBalance(); // Account balance is 1500
bankAccount.withdraw(700);
bankAccount.checkBalance(); // Account balance is 800
bankAccount.withdraw(1000); // Insufficient funds

const shoppingCart = {
    items: [],
    totalCost: 0,
    addItem(item) {
        this.items.push(item);
        shoppingCart.updateTotalCost();
    },
    removeItem(itemName) {
        const itemIndex = this.items.findIndex((item) => {
            return item.name === itemName
        })
        this.items.splice(itemIndex, 1);
        shoppingCart.updateTotalCost();
    },

    updateTotalCost() {
       this.totalCost = this.items.reduce((accum, el)=>{
            return accum + el.price * el.quantity;
        }, 0)
    },
};

shoppingCart.addItem({name: "Shirt", price: 20, quantity: 2});
shoppingCart.addItem({name: "Pants", price: 30, quantity: 1});
// shoppingCart.addItem({name: "Jeans", price: 35, quantity: 3});
// shoppingCart.addItem({name: "Shoes", price: 40, quantity: 2});
// shoppingCart.addItem({name: "Jacket", price: 50, quantity: 3});
console.log(shoppingCart.items)
console.log(shoppingCart.totalCost); // Output: 70
shoppingCart.removeItem("Shirt");
console.log(shoppingCart.totalCost); // Output: 30

