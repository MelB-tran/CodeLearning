more efficient and organized way to keep track of js business logic on the front end
formed of various reusable components (ie header and navigation, footer, etc), each with its own html css and js to make it work

*there is a Chrome plugin!!*

### What makes it useful?
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
### The Vue Instance
* Reactive
* each component is a new vue instance and share most of basic stuff except for some "root' properties
* An instance's $data with properties - only updates properties present at initialization
* you can access an instance's properties with dollar sign ($) API reference
* like asp, it lets you add methods at diff stages of 'lifecycle', called "Lifecycle Hooks"
only for created, mounted, updated, destroyed - Lifecycle Diagram
Template Syntax
* to pass data inside a component, use props (in this example, an array)
```
Vue.component('product', {
  props: [message],
  template: '<div>...</div>',
  data() {...}
  })
```
and HTML
```
<product message="hello!"></product>
```
Props can also be passed as an object
```
Vue.component('product', {
  props: {
    message: {
      type: String,
      required:true,
      default: "hi"
    }
  },
  template: '<div>...</div>',
  data() {...}
  })
```
### Methods and events
may be written as ``v-on:click``
or also as ``@mouseover`` for DOM element, setting method which can also take parameters from object in that context, such as  
```
<div v-for="variant in variants" :key="variant.variantId">
  <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }} </p>
</div>
```
when writing to js and Vue instance, you can write methods as
* anonymous functions - supported by most browsers ``addToCart: function(){..}``
* esx shorthand - not supported all browsers `` updateProduct(parameter){...} ``
other events Include
* ``@click="..."``
* on a form ``@submit="..."`` - using ``@submit.prevennt`` also prevents default behavior on submit (refresh page)!
* on an input ``@keyup.enter="..."``
Documentation: [Event handling](https://vuejs.org/v2/guide/events.html)
**Style banding**  
``:style="{backgroundColor: variant.variantColor}"`` used to dynamically bind styles based on data.  
you can also be bound to a 'styleObject' inside *data* that
is a set of CSS properties instead of a single one
AND also an array of styleObjects if needed!

**Class binding**  
Can dynamically add a class based on whether values on the right are true
```:class="{ active: activeClass, 'text-danger': errorClass }"
  [inside Javascript file]
  data: {
    activeClass: true,
    errorClass: false
  }
```
And like style, can bind an object to class as ``classObject`` with multiple class options  
Can also add an array of classes too, which will pass text value
Html - ``<div :class="[activeClass, errorClass]">..</div>``
JS - ``` data: {
  activeClass:'active',
  errorClass: 'text-danger'
}
```
Conditional logic with classes too  
``<div :class="[isActive ? activeClass : '']">..</div>``
Javascript
```
 data:{
   isActive:true,
   activeClass: 'active'
 }
```
### computed fields
needs to be added as separate group ``computed:{}`` where each field is syntax like ``nameofcomputedfield(){ calculation }``

## Communicating events
a component can tell its parent (root instance) that an event has occurred and send data along with the notification!  
This can be done by adding ``$emit('event-name', someData)`` for the calling method ( `` addToCart `` ), where vue will ``emit`` an event by the name in parameter and the corresponing ``someData`` along with it.
```
addToCart(){
  this.$emit('add-to-cart', someData)
}
```
then the ``app`` using this component will call this element like so
`` <product @event-name="method-in-app-name"></product>`` where the ``method-in-app-name`` is defined within the calling app, using ``someData`` to perform needed operations to data within the ``app``

### Two-way data binding
two-way data binding is useful with forms when you'd like data to be transferred from template to data.
`` v-model="name" `` inside the html element inside your Template

### Custom form validation
can be added ``onSubmit`` function because it's already calling that method on that specific event :). Just checking for length of input, and generating/displaying errors as needed

### event bus
a new vue instance, can use an "event bus" to pass information across descendent components

### lifecycle Hooks
an example, goes like an element to component like ``data``, ``methods``, etc  
``mounted`` is a lifestyle hook, that is fired when the component is "mounted" on the DOM. under goes code you want to run at this moment

### state management pattern
as application grows, you may want to implement a state management solution. Vuex is one, that is a library
