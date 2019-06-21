
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/3890792.jpg',
    link: '/product/bleep',
    inventory: 0,
    details:["80% cotton", "20% polyester", "gender-neutral"],
    variants: [
      {
        variantId:2234,
        variantColor: 'green',
        variantImage: './assets/3890792.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'pink',
        variantImage: './assets/3890792-pink.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    // anonymous function
    addToCart: function(){
      this.cart += 1
    },
    // function can also be written esx shorthand, but not all browsers may support
    updateProduct(variantImage){
      this.image = variantImage
    }
  }
})
