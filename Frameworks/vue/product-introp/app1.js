
var eventBus = new Vue();

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required:true
    }
  },
  template: `
  <div class="product">
    <div class="product-image">
      <img :src="image"/>
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <!-- this is also v-bind, you only need the colon!-->
      <p v-if="inStock">In Stock</p>
      <p :class="{ outDecoration: !inStock }"
          v-else>Out of Stock</p>
      <p> Shipping: {{ shipping }}</p>
      <!-- add :key so vue keeps up with identifier for each item
             -->
      <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)">
      </div>
      <div>
      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >Add to cart</button></div>
      <div><button v-on:click="removeFromCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >Remove from cart</button>
      </div>
        <product-tabs :reviews="reviews"></product-tabs>
  </div>
  </div>

  `,
  // returns fresh data object with its own copy
  data(){
    return{
    brand: 'Nube',
    product: 'Socks',
    selectedVariant: 0,
    onSale: false,
    detailsForProduct: ["80% cotton", "20% polyester", "gender-neutral"],
    variants: [
      {
        variantId:2234,
        variantColor: 'green',
        variantImage: './assets/3890792.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'pink',
        variantImage: './assets/3890792-pink.jpg',
        variantQuantity: 0
      }
    ],
    reviews: []
  }},
  methods: {
    // anonymous function
    addToCart: function(){
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart: function(){
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    // function can also be written esx shorthand, but not all browsers may support
    updateProduct(index){
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if(this.premium){
        return "Free"
      }
      return 2.99;
    }
  },
  mounted() {
    eventBus.$on('review-submitted', productReview =>{
      this.reviews.push(productReview)
    })
  }
});

Vue.component('product-review', {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">
  <p v-if="errors.length">
    <b>please correct these errors</b>
    <ul>
      <li v-for="error in errors">{{error}}</li>
    </ul>
  </p>
  <p>
    <label for="name">Name:</label>
    <input v-model="name">
  </p>
  <p>
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>
  </p>

<p>
  <label for="review">Review:</label>
  <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
  </select>
</p>
  <p><input type="submit" value="Submit"></p>
  </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if(this.name && this.review && this.rating){
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        // changed here to new vue instance
        eventBus.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
      }
    else{
      if(!this.name) this.errors.push("Name required")
      if(!this.review) this.errors.push("Review required")
      if(!this.rating) this.errors.push("Rating required")
    }
  }
}})
Vue.component('product-tabs', {
  props: {
    reviews:{
      type: Array,
      required: true
    }
  },
  template: `<div>
    <div>
      <span class="tab"
        :class="{ activeTab: selectedTab === tab}"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        >{{ tab }}</span>
    </div>
    <div>
      <div v-show="selectedTab === 'Reviews'">
      <p v-if="!reviews.length">There are no reviews yet</p>
      <ul>
        <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>
    <product-review v-show="selectedTab === 'Make a Review'"></product-review>
    </div></div>
  `,
  data(){
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: []
  },
  methods: {
    updateCart(id){
      this.cart.push(id);
    },
    removeCart(id){
      this.cart.pop(id);
    }
  }
})
