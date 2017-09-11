# Create image based on the official Node 6 image from the dockerhub
FROM node:6

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

# run as non-root user inside the docker container
# see https://vimeo.com/171803492 at 17:20 mark
RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs
# now run as new user nodejs from group nodejs
USER nodejs

# Create a directory where our app will be placed
RUN mkdir -p /home/nodejs/app

# Change directory so that our commands run inside this new directory
WORKDIR /home/nodejs/app

# Copy dependency definitions
COPY app/package.json /home/nodejs/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
# Uncomment the following line when deploying to stage/production
# COPY app /home/nodejs/app

# Add VOLUME for development share folder with host #comment line below when deploying to
VOLUME  ["/home/nodejs/app"]

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["dumb-init", "npm", "run-script", "watch"]
