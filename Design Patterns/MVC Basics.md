### Basics of MVC

#### Model 
Represents the data, doesn't depend on the controller or the view

#### View
Displays the data, and sends user actions to the controller. It can 1) be independent of both the model and controller; or 2) actually be the controller, and depend on the model

#### Controller
Provides data to the view, and interprets user actions like button clicks. It depends on the view and the model. 

#### Why?
separating model from controller makes code reusable without modification, and therefore easier de mantener. 