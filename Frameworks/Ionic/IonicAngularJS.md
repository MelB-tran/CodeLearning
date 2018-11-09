# Ionic & Angular Js App (Lynda - Villalobos)

Visit the Ionic docs: [here](http://ionicframework.com/docs)
## What is Ionic?
Un SDK that builds native applications, frameworks add pre-built funcitonality - " it will output applications that will run as if they were specifically written for different mobile devices." (from Lynda tutorial)
 
You can use HTML, CSS, & JS to build these applications - done by integrating several frameworks & libraries together !
 
### Como funciona

-  Pre-built Style components (como bootstrap, tmbn using Sass)
- Custom Directives/components (using angular.js) own html tags , assign control to html

## Starting a New Ionic Project
(in desired path) ``ionic start NameofApp`` Your Ionic project is ready to go! Some quick tips:

* cd into your project: `` $ cd someApp``
* Setup this project to use Sass: ``ionic setup sass``
* Develop in the browser with live reload: ``ionic serve``
* Add a platform (ios or Android): ``ionic platform add ios [android]``
   
Note: iOS development requires OS X currently  
See the Android Platform Guide for full Android installation instructions: [here](https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html)

### Other Ionic Commands

*  Build your app: ``ionic build <PLATFORM>``
*  Simulate your app: ``ionic emulate <PLATFORM>``
*  Run your app on a device: ``ionic run <PLATFORM>``
*  Package an app using Ionic package service: ``ionic package <MODE> <PLATFORM>``

For more help in the terminal/command line use ``ionic --help`` or ``ionic docs``
 
## Understanding the Ionic Installation
* hooks folder - cordova commands, to extend
* plugins - ionic extensions, installations will go here si si lo haces use “git install"
* www files -
    * bowerrc - probably not touch
    * gitignore - aqui van files que quieres que no se transfieran on github
    * gulpfile.js - reloading browser, este file takes care of. you can customize how it’s compressed y que usa
    * package.json - files gulp may need to perform sus necesidaes
* scss - ionic.app.scss run “ionic sass” to set up sass in project
* www folders
    * css - update all styles here
    * js - all javascript app.js, controllers, and services
    * lib - libraries, default ionic libraries
 
* ionic/js ionic has its own angular.js library and has several modules loaded with it 
* tambien its own routing
* templates - all html templates, viene con sus defaults
* index.html - main page
 
* ``<body ng-app=“starter”>`` ?
* ``<ion nav-bar class=“…”>`` not required but bar at the top
* ``<ion nav-view></ion nav-view>`` where all las views van

 
## Working with the Ionic CLI and templates
“Scaffold and application” Run it in different ways

[Terminal]

```
cd ~/Desktop
ionic start defaultApp tabs     
// creates “defaultApp” project with the tabs templates
// tabs based on defaultApp project 
cd defaultApp 

ionic serve preview
// restart client app from the root
restart or r
// to enable/disable console log output
consolelogs or c 
```
 
start from scratch - use blank template

``ionic start blankApp blank``

 
any [github repo](https://github.com/driftyco/ionic-cli) to check other templates
 
 
additional Ionic Code samples, [aqui](http://ionicframework.com/examples) Codepen Demos 😀
To create an app from this 
copy URL y luego en la terminal: 
ionic start flickrApp (copied URL)

 
ionic serve has many options tambien para ver detalles

`` ionic serve -l (ele)``

shows you como se veria en diferentes platforms 😃

[Understanding basic Ionic CSS components]
(http://ionicframework.com/docs/components/)

 