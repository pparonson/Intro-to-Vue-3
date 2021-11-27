app.component("product-details", {
    template: `<ul>
                   <li v-for="detail in details">{{ detail }}</li>
               </ul>`,
    props: {
        details: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            // details: ["50% cotton", "30% wool", "20% polyester"],
        };
    },
    methods: {
        // addToCart() {
        //     this.cart += 1;
        // },
        // updateVariant(index) {
        //     this.selectedVariant = index;
        // },
    },
    computed: {
        // title() {
        //     return this.brand + " " + this.product;
        // },
        // image() {
        //     return this.variants[this.selectedVariant].image;
        // },
        // inStock() {
        //     return this.variants[this.selectedVariant].image;
        // },
        // shipping() {
        //     if (this.premium === true) {
        //         return "Free";
        //     } else {
        //         return "$2.99";
        //     }
        // },
    },
});
