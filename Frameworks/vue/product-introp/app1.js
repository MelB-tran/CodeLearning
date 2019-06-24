
Vue.component('product-details', {
  props: {
    details: {
      type: [],
      required: true
    }
  },
  template: `
  <ul>
    <li v-for="detail in details"> {{ detail }}</li>
  </ul>
  `
}
)
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
      <product-details :details="details"></product-details>
      <!-- add :key so vue keeps up with identifier for each item
             -->
      <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)">
      </div>
      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >Add to cart</button>
  </div>
  `,
  // returns fresh data object with its own copy
  data(){
    return{
    brand: 'Nube',
    product: 'Socks',
    selectedVariant: 0,
    onSale: false,
    details: ["80% cotton", "20% polyester", "gender-neutral"],
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
    ]
  }},
  methods: {
    // anonymous function
    addToCart: function(){
      this.$emit('add-to-cart')
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
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: 0
  }
})
