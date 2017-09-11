## Installing backend
In order to start working in the backend, run the following command:
```
$ cd backend
(backend) $ docker build -f Dockerfile-develop -t backend:dev .
```
For production use `Dockerfile` instead or just remove the option `-f Dockerfile-develop`

To init this container and be able to modify the code and see changes in the container, run this
```
$ docker run -d --name myexpenses_api -v $PWD/app:/home/nodejs/app -u nodejs -p 3000:3000 backend:dev
```

**NOTE: Make sure to run the above command within backend folder.**

Then you can check if the API is working by accessing to `http://localhost:3000/`


When you deploy this to the cloud, modify the **Dockerfile** to copy the app, remove the exposure of Volume (/usr/src/app) and change the command from watch to start like this:

```
# Uncomment the following line
COPY app /home/nodejs/app

# VOLUME  ["/home/nodejs/app"] remove or comment this line

# Change "run-script", "watch". Use start instead
CMD ["dumb-init", "npm", "start"]
```
