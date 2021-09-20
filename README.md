# gruita.ro

my website, built w/ react & django as a django project

## running the project
1. I use a virtual env for this project - ```pipenv shell```
2. install django & its dependencies from Pipfile.lock with ```pipenv install```
3. run ```python3 manage.py migrate``` to create the database
4. go to /frontend and install node's dependencies ```npm i```
5. in / run ```python3 manage.py runserver```


## how it works

the backend and the frontend are separated in different django apps

it works like this:
1. webpack compiles all the dependencies and files in a bundled javascript file with style-loader and babel
2. django routes '/' to a templated index.html
3. react executes from the bundle js file and injects it's stuff into the document
4. react router handles all the other frontend routing

### API endpoints
* the backend is at /api and is managed completely by django

```
GET <ip>/api/projects
GET <ip>/api/projects/id
POST <ip>/api/projects/
PUT, PATCH, DELETE <ip>/api/projects/id/
```

### Component hierarchy

```
App
 |- Home
 |   |- Title
 |   |- Projects
 |       |- Project
 |           |- Badges
 <!-- |- Technologies 
      |- Resume -->
```
