#
# OneUptime-admin-dashboard Dockerfile
#

# Pull base image nodejs image.
FROM node:16

#Use bash shell by default
SHELL ["/bin/bash", "-c"]

#SET ENV Variables
ENV PRODUCTION=true
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm ci --only=production --legacy-peer-deps

# Copy app source
COPY . /usr/src/app

# Bundle app source
RUN npm run build

# Expose ports.
#   - 2008:  DCX App port
EXPOSE 2008

# Install Static serverr. 
RUN npm install -g serve

#Run the app
CMD [ "serve", "-s", "build" ]