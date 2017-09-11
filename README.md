# My Expenses
This is a sample project to see how a MEAN application can be configured to work with docker from scratch, using docker-compose.

## Folder structure

```
- /
  -  backend   
    - app (NodeJs app)
    - Dockerfile (container to run the app)
  - frontend
    - app (Angular app)
    - Dockerfile (container to run the app)
  - compose.yml (commands to link all the containers, see how to run this below)
```    

## Install backend
In order to start working in the backend, run the following command:
```
$ cd backend
```

**Check out the README.MD inside backend about how to install and work with the REST API**

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
Or it can be configured in the compose.yml file to be linked to the backend container.

## Start all the containers using Docker compose
