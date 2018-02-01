# Github & Heroku Commands
Set up Notes 
setuptools and pip are part of python 2.7.... to run pip commands 
(inside C:\Python27\) ```python -m pip install```

## Prepare the App
Uses github (in the example, git clone to get Heroku's app)
*pip* -python's dependency manager- uses "requirements.txt" 

## Deploy the app
- ``Heroku create`` - "prepares" Heroku para recibir la app, generating a random name 
- ``git push Heroku master`` - deploys code
- ``Heroku ps:scale web=1`` - ensure at least one instance of the app is running (one web dyno)
- ``Heroku open`` - opens app from command prompt

## Logs
``run Heroku logs --tail - y``
 tmbn Control+C para pararlo

## Define a Profile
Este se usa para indicar que command should be executed to start the app. The content de ese file en el ejemplo es este:
``web: gunicorn gettingstarted.wsgi --log-file -web ``

the process type, in this case tells Heroku to run the HTTP routing stack, and receive web traffic when deployed.
Profiles can also contain otros process types (like one that processes items off a queue)

## Scale the App
Heroku apps on free run on a single web "dyno", which is a container that's lightweight and the one that runs the command in the Procfile
To check how many dynos are running
``Heroku ps`` 

On free account - only one can be active (receiving traffic) for 18 hours, otherwise it will go to sleep. The first command it receives if it's sleeping and hasn't been running for 19 hours will take a delay, the ones after will run fine.

## Declare App Dependencias
to be continued...

-----------------

## From "Full React + Node.js Course"
### Deployment Checklist
1. Dynamic Port binding - in index.js
2. Specify Node Environment - use a specific version of node, so we need to tell Heroku which version we want in ``package.json``
3. Specify start script - in package.json
4. Create .gitingnore file - express dependencies would be ignored, as heroku would handle this. file inside of root project directory