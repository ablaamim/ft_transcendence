################################## BUILD TIME ######################################

# Use an official Node.js runtime as the base image
FROM node:lts-bullseye-slim AS base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# prisma engine requires openssl in order to work properly (ex: npx prisma generate)
#RUN apt-get update && apt-get -y install openssl && apt-get install -y procps

# Production
#FROM base AS prod

RUN yarn install --frozen-lockfile --production

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


# Copy the rest of the application code to the container
COPY . .

# Expose the port your Nest.js application is running on
EXPOSE 3000

############################################################################################

################################## RUNTIME #################################################

# Start the application
#CMD ["/bin/bash", "node_dependencies.sh"]

# Test backend :

#WORKDIR /usr/src/app/nestjs_api

#CMD ["yarn", "run", "start:dev"]

CMD ["node", "app.js"]


############################################################################################