var app = new Vue({
    el: '#app-container',
    data: {
        items: items,
        cart: [],
        isCart: false,
    },
    methods: { 
        addToCart: function (item) {
            this.removeSpace(item.id);
            this.cart.push(item.id);
        },
        removeSpace(itemId) {
            // iterate through each item in items list and check if the id matches than remove 1 space from it
            for (let i = 0; i < this.items.length; i++) {
                if(items[i].id === itemId) {
                    items[i].space -= 1;
                }
            }
        },
        IsPossibleToAddToCart(item) {
            // Check if there is an item left in the item catalog if not it returns false else it returns true
            if (item.space != 0 ) {
                return true;
            } else {
                return false;
            }
        },
        MoveToCart() {
            this.isShoppingCart = this.isShoppingCart ? false : true;
        },
    },
    computed: {
        
    }
});