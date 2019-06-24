// components can be re-usable, and used as an HTML element
Vue.component('click-counter', {
    // template can be defined in many ways, including a string
    // template must be a *single* root element, so if you wanna have more than one
    // element, use a wrapper (div)
    template: '#click-counter-template',
    // component's data must be a function that returns an object
    // so each component instance keeps its own copy of the returned data object
    data (){
        count: 0
    }
});
// may not be best practice for a component name
Vue.component('plan', {
    template: '#plan-template',
    // this makes it possible to access 'name' like a property
    props: ['name']
})
new Vue({
    el: '#app'
});
