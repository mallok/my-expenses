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
(backend) $ docker build -t backend:dev .
```

To init this container run
```
$ docker run -d --name my-expenses-be -p 3000:3000 backend:dev
```

Then you can check if the API is working by accessing to `http://localhost:3000/`

**NOTE: Check out the Readme.md inside backend about how to install the application**

## Install frontend
In order to start working in the frontend, run the following command:
```
$ cd frontend
(frontend) $ docker build -t frontend:dev .
```

To init this container run
```
$ docker run -d --name my-expenses-fe -p 8001:8001 27001:27001 frontend:dev
```

Then you can check if the API is working by accessing to `http://localhost:8001/`

**NOTE: Check out the Readme.md inside frontend about how to install the application**

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
