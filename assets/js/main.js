var app = new Vue({
    el: '#app-container',
    data: {
        items: items,
        cart: [],
        isCart: false,
        sortAscending: true,
        activeSortProperty: "name",
        orderName: '',
        orderNumber: ''
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
            this.isCart = this.isCart ? false : true;
        },
        // Removes the item from the cart
        RemoveItemFromCart: function (itemId) {
            const index = this.cart.indexOf(itemId);
            if (index > -1) {
                this.cart.splice(index, 1);
                
                // Loop through item list and add the item back in space
                for (let i = 0; i < this.items.length; i++) {
                    if(items[i].id == itemId) {
                        items[i].space += 1;
                    }
                }
            }
        },
        // Counts the amount of item in the cart
        CountsCart(id) {
            let count = 0;

            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }

            return count;
        },
        SortDesc(e) {
            items.sort((first, second) => (first[this.activeSortProperty] > second[this.activeSortProperty]) ? -1 : 1);
            this.sortAscending = false;
        },
        SortAsc(e) {
            items.sort((first, second) => (first[this.activeSortProperty] > second[this.activeSortProperty]) ? 1 : -1);
            this.sortAscending = true;
        },
        SortBy(sortProperty) {
            items.sort(this.SortOnProperty(sortProperty));
        },
        SortOnProperty(property) {
            var sortOrder = 1;
            sortOrder = this.sortAscending ? 1 : -1;
            this.activeSortProperty = property;

            return (first,second) => {
                var result = (first[property] < second[property]) ? -1 : (first[property] > second[property]) ? 1 : 0;

                return result * sortOrder;
            }
        },
        Confirmation() {
            alert("We have confirmed your order");
        },
        FieldsAreFilled() {
            if(this.orderName == '' || this.orderNumber == '') {
                return false;
            } else {
                return true;
            }
        },
        OnlyNumber(e) {
            let c = String.fromCharCode(e.keyCode); 
            
            if (/^[0-9]+$/.test(c)) {
                return true;  
            } else {
                e.preventDefault();
            }    
        },
        OnlyLetter(e) {
            let c = String.fromCharCode(e.keyCode);

            if (/^[A-Za-z]+$/.test(c)) {
                return true;   
            } else {
                e.preventDefault(); 
            }
        },
    },
    computed: {
        
    }
});