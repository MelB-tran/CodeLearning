# Ionic Framework to build HTML5-based apps with AngularJS

Info on the Ionic Framework 

- [Where does the Ionic Framework fit in](http://blog.ionic.io/where-does-the-ionic-framework-fit-in/)

- [A Better Way to Learn Angular JS](https://thinkster.io/a-better-way-to-learn-angularjs)

## Los guts
ionic automatically creates a handful of files to be used as la base de la hybrid app para mas detalle - [aqui](https://thinkster.io/ionic-app-structure/)

*www folder* - toda la JS, HTML, css - app/index.html pues ahi todo

### Serve
navigate to ionic-course/code y run this in terminal 
``ionic serve``

### Routing
ionic uses Angular UI Router - to populate the html element <ion-nav-view> with proper templates & controllers, instructions for that under js/app.js

You can set a tab for its own “history"
more complex set up of tab ‘directions’ under app.js que previamente check *Dropbox/code/ionic-course/www/js/app.js*

Tambien hay reusable UI components to extend Ionic features - 
[CSS](http://ionicframework.com/docs/components/) - como lo que ofrece [bootstrap
Angular JS](http://ionicframework.com/docs/api/)

### Providers/Factory
You can use factories/providers in angular js for stuff like users , pero que son? factory 
