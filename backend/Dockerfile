# Use the official Node.js image as a base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the host to the container
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port the NestJS application is running on
EXPOSE 3333

# Start the NestJS application
CMD [ "npm", "run", "start:prod" ]