################################## BUILD TIME ######################################

# Use an official Node.js runtime as the base image
FROM node:lts-bullseye-slim AS base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./
COPY yarn.lock ./

# prisma engine requires openssl in order to work properly (ex: npx prisma generate)
RUN apt-get update && apt-get -y install openssl && apt-get install -y procps

# Install dependencies for nestjs
RUN yarn install --frozen-lockfile

RUN yarn add -D npm -y

RUN yarn add -D prisma -y

COPY ./prisma ./prisma

RUN yarn add -D npx -y

#RUN yarn prisma generate

# Better run the container with : docker exec -it backend bash 
# Then execute the node_dependencies.sh with bash, in order to setups the machine to test code 

RUN apt-get update 
RUN apt-get upgrade -y
RUN apt-get install vim -y
RUN apt-get install zsh -y
#RUN install curl -y

RUN npm i -g @nestjs/cli 

#RUN curl -L http://install.ohmyz.sh | sh 
#RUN curl https://raw.githubusercontent.com/reversTeam/Sublivim/master/installer.sh | bash
RUN npm install -g npm@10.1.0 

################################# Personal ###############################################

RUN apt-get install git -y
RUN git config --global user.name "ablaamim"
RUN git config --global user.email aku-no-hana@outlook.fr

RUN yarn add -D npx

RUN yarn add prisma

RUN yarn add @prisma/client

#RUN npx prisma studio --port 5555 
# Copy the rest of the application code to the container
COPY . .

# Expose the port your Nest.js application is running on
EXPOSE 3000
EXPOSE 5555

############################################################################################

################################## RUNTIME #################################################

# Start the application
#CMD ["/bin/bash", "node_dependencies.sh"]

# Test backend :

#WORKDIR /usr/src/app/nestjs_api

#RUN yarn run build

#RUN yarn install

RUN yarn run build 

CMD ["yarn", "start:dev"]
#CMD ["node", "/dist/main.js"]
#CMD ["node", "app.js"]

############################################################################################