# My Expenses
This is a sample project to see how a MEAN application can be configured to work with docker from scratch, using docker-compose.

## Folder structure

```
- /
  -  backend   
    - app (NodeJs app)
    - Dockerfile-develop (container to run the app on dev)
    - Dockerfile (container to run the app on prod)
  - frontend
    - app (Angular app)
    - Dockerfile-develop (container to run the app on dev)
    - Dockerfile (container to run the app on prod)
  - docker-compose-develop.yml (compose configuration for development)
  - docker-compose.yml (compose configuration for production)
```    

## Build and Start all the containers using Docker Compose

If you prefer to start the entire project all together, then run the following command:
```
$ docker-compose -f docker-compose-develop.yml up
```
*For production, use **docker-compose.yml***

This will build all the images and will run all the containers and you'll see the output in your command line.

If you prefer build images first, then start/stop them, you can do the following:
```
$ docker-compose -f docker-compose-develop.yml create
```

**Run all the containers on background:**
```
$ docker-compose start
```

Check that API is working by accessing to http://localhost:3000/api

**Stop all the containers:**
```
$ docker-compose stop
```

Or you can just install one image at a time

## Install backend
In order to start working in the backend, run the following command:
```
$ cd backend
```

**Check out the README.MD inside backend about how to install and work with the REST API** (This depends on mongodb)

## Install frontend
In order to start working in the frontend, run the following command:
```
$ cd frontend
```

**Check out the README.MD inside backend about how to install and work with the REST API**

## Install MongoDB
Install MongoDB from the official repository by doing:
```
$ docker pull mongo
```

You can run this later executing:
```
$ docker run -d --name mongodb -p 27017:27017 mongo
```
