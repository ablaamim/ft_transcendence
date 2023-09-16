################################## BUILD TIME ######################################

# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Better run the container with : docker exec -it backend bash 
# Then execute the node_dependencies.sh with bash, in order to setups the machine to test code 

#RUN apt-get update 
#RUN apt-get upgrade -y
#RUN apt-get install vim 
#RUN apt-get install zsh 
#RUN npm i -g @nestjs/cli 
#RUN curl -L http://install.ohmyz.sh | sh 
#RUN curl https://raw.githubusercontent.com/reversTeam/Sublivim/master/installer.sh | bash

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Nest.js application is running on
EXPOSE 3000

############################################################################################

################################## RUNTIME #################################################

# Start the application
#CMD ["/bin/bash", "node_dependencies.sh"]

# Test backend :
CMD ["node", "app.js"]

############################################################################################