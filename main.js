const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        };
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            let filteredCart = this.cart.filter((item) => {
                return item !== id;
            });

            this.cart = filteredCart;
        },
    },
});
