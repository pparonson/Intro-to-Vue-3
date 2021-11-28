app.component("review-list", {
    props: {
        reviews: {
            type: Array,
            required: true,
        },
    },
    template: `<div class="review-container">
	           <ul>
	               <li v-for="review in reviews">
		           <p>{{ review.name }} gives this item {{ review.rating }} stars.</p>
			   <br/>
			   <p>{{ review.review }}</p>
		       </li>
	           </ul>
	       </div>`,
});
