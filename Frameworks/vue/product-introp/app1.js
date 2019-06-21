
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
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
})
