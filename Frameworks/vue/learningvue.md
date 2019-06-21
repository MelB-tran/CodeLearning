more efficient and organized way to keep track of js business logic on the front end
formed of various reusable components (ie header and navigation, footer, etc), each with its own html css and js to make it work

*there is a Chrome plugin!!*

###What makes it useful?
Include vue script src file in HTML file
and adding vue inside script tags
vue instance as follows:
```
<div id=“app”>
<ul>
    <li v-for=“product in products”>{{ product.quantity }} {{product.name }} <span v-if =“product.quantity === 0”> - OUT OF STOCK </span>
    </li>
</ul>
<h2>Total inventory: {{ totalproducts }}</h2>
</div>
<script src=“/where/vue/lives.js”></script>
<script>
const app = new Vue({
    el: ‘#app’,
    data: {
     products: []
    },
    created() {
        fetch(‘url/to/fetch-from’)
        .then(response => response.json())
        .then(json => {this.products = json.products})
    },
    computed: {
        totalProducts(){
            return this.products.reduce((sum, product) => {
                return sum + product.quantity
            }, 0)
        }
    }
});
</script>
```
###The Vue Instance
* Reactive
* each component is a new vue instance and share most of basic stuff except for some "root' properties
* An instance's $data with properties - only updates properties present at initialization
* you can access an instance's properties with dollar sign ($) API reference
* like asp, it lets you add methods at diff stages of 'lifecycle', called "Lifecycle Hooks"
only for created, mounted, updated, destroyed - Lifecycle Diagram
Template Syntax