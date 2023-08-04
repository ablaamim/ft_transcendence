### :fire: ft_transcendence :fire:

---

This project is about creating a website for the mighty [Pong](https://en.wikipedia.org/wiki/Pong) contest!

---

### What is ft_transcendence :question:

---

ft_transcendence is an individual project at 1337 which requires that we build an online platform to play [Pong.](https://en.wikipedia.org/wiki/Pong)

The backend must be built using [NestJS](https://nestjs.com/), the [frontend](https://en.wikipedia.org/wiki/Frontend_and_backend) in any [TypeScript](https://www.typescriptlang.org/) framework of your choice and the database must be [PostgreSQL.](https://www.postgresql.org/) For the [frontend](https://en.wikipedia.org/wiki/Frontend_and_backend).

There are no restraints in regards to external libraries and the website but it needs to be a [single-page application.](https://en.wikipedia.org/wiki/Single-page_application) It should be compatible with [Google Chrome](https://www.google.com/intl/en-US/chrome/) and the other optional browser.

The user must log in using the OAuth system of [42 intranet](https://intra.42.fr/) and be able to enable a [two-factor authentication](https://authy.com/what-is-2fa/) method, for which we chose the [Google Authenticator App.](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US)

Overall, the platform should have a ranking system, chat channels, private messages, profile editing, view users status and add other members as friends.

The platform should have a ranking system, chat channels, direct messaging and allow, user status changes, friend features and some profile customization options.

The main purpose is to play an implementation of [Pong](https://en.wikipedia.org/wiki/Pong), as if it was [1972.](https://www.youtube.com/watch?v=fiShX2pTz9A) all over again There should be a few customization options such as custom maps or power-ups but the user should still be able to play the original version.
A spectator system must be implemented, spectators are able to watch the match without interfering with it.

Finally, the server structure must be containerized using [docker](https://www.docker.com/) and available with a single call of :
> docker-compose up --build

---

#### Badge :
<img src="./ft_transcendencee.png" width="150" height="150"/>

---

#### Skills :
- Rigor
- Group & interpersonal
- Web

---

#### RESSOURCES :

[Frontend Masters](https://frontendmasters.com/learn/)


---

#### criterias :

Backend: Use NestJS as the backend framework. NestJS is a popular framework for building scalable and efficient server-side applications with Node.js. It provides a modular architecture and supports TypeScript.

Frontend: Choose a TypeScript framework for the frontend. There are several options available, such as Angular, React with TypeScript, or Vue.js with TypeScript. You can choose the one that you are most comfortable with or based on your project's requirements.

Libraries and frameworks: You are free to choose any libraries or frameworks for your project. Ensure that you use the latest stable versions of all the libraries and frameworks you decide to include.

Database: Use PostgreSQL as the database for your project. PostgreSQL is a robust and feature-rich open-source relational database management system that integrates well with NestJS.

Single-page application: Design your website as a single-page application (SPA). SPAs provide a smooth and responsive user experience, allowing users to navigate within the application without page reloads. You can use frameworks like Angular, React, or Vue.js to build the SPA.

Browser compatibility: Make sure your website is compatible with the latest stable version of Google Chrome, as well as one additional web browser of your choice. Test and optimize your application for these browsers to ensure a consistent experience across platforms.

Error handling: Implement proper error handling to ensure that users encounter no unhandled errors or warnings while browsing the website. Handle exceptions gracefully and provide informative error messages to users when necessary.

Docker: Use Docker for containerization and deployment of your application. If you're running Linux, use Docker in rootless mode for security reasons. Place your Docker runtime files in the designated directories (/goinfre or /sgoinfre). Avoid using "bind-mount volumes" if you're using non-root UIDs in the container.

Launch command: Set up a Docker Compose file that allows you to launch your entire application with a single command: docker-compose up --build. This command will build the necessary images and start the containers for your backend, frontend, and database.

---

### Basic Infrastructure :construction: :construction:

---

#### Docker && Docker-compose :

---

> Docker Compose is a tool that allows you to define and manage multi-container Docker applications. It simplifies the process of orchestrating multiple containers and their dependencies.

> To organize your infrastructure using Docker Compose for our ft_transcendance project, we create a docker-compose.yml file. 

> This docker file describes the services (containers) that make up our application, their configuration, and how they interact with each other.

---

#### Docker-compose :

---

#### First microservice -> PostgreSQL :

---


```
version: "3.8"

services:
  postgres :
    image: postgres:13
    restart: always
    container_name: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - 5432:5432
    volumes:
      - data:/var/lib/postgresql/data
```

version: "3.8" : Specifies the version of the Docker Compose file format being used. In this case, version 3.8 is used, which provides a wide range of features and compatibility.

services:: This section defines the services you want to run using Docker Compose. In this case, you're defining the PostgreSQL service.

postgres:: This is the name of the service, which will be used as an identifier for this particular service within the Docker Compose configuration.

image: postgres:13: Specifies the Docker image to use for the PostgreSQL service. It uses the official PostgreSQL image from Docker Hub with the tag "13," which corresponds to PostgreSQL version 13.

restart: always: This sets the restart policy for the container. always indicates that the container should be automatically restarted if it stops, except when manually stopped by the user.

container_name: postgres: This sets the name of the container that will be created for the PostgreSQL service. It will be named "postgres."

environment:: This section allows you to define environment variables for the PostgreSQL container.

POSTGRES_USER: postgres: Sets the environment variable POSTGRES_USER to "postgres," which will be the username for the PostgreSQL database.

POSTGRES_PASSWORD: postgres: Sets the environment variable POSTGRES_PASSWORD to "postgres," which will be the password for the PostgreSQL database.

POSTGRES_DB: postgres: Sets the environment variable POSTGRES_DB to "postgres," which will be the default database name to be created in PostgreSQL.

ports:: This section defines port mappings between the host and the container.

- 5432:5432: Maps port 5432 from the host to port 5432 in the container. This is the default port used by PostgreSQL for communication.

volumes:: This section defines Docker volumes that will be used to persist data between container restarts.

- data:/var/lib/postgresql/data: Creates a volume named "data" and mounts it to the path /var/lib/postgresql/data inside the PostgreSQL container. This allows data to be persisted even if the container is stopped and started again.

volumes:: This section is outside the services block and defines the volume(s) used in the project.

- data:: Defines the volume named "data." This is referenced in the PostgreSQL service section to specify where the data will be stored.

In summary, this docker-compose.yml file sets up a PostgreSQL service using the official PostgreSQL Docker image. It configures the necessary environment variables for the database, maps the PostgreSQL default port to the host, and creates a Docker volume to persist the database data. When you run docker-compose up, it will start the PostgreSQL container and make it accessible on port 5432 on the host machine.

---

#### TEST :

---

to test only the PostgreSQL container separately, you can follow these steps:

Start the PostgreSQL Container:
If you haven't started the PostgreSQL container yet, you can start it using the following command:

```
docker-compose up -d postgres
```

This will start only the PostgreSQL container in the background.

Test the PostgreSQL Container:
After the container is up and running, you can perform some basic tests to check if it is working correctly.

a. Connect to the PostgreSQL Container:
You can connect to the running PostgreSQL container using a PostgreSQL client like psql or tools like DBeaver.

Using psql:
If you have psql installed on your local machine, you can connect to the PostgreSQL container with the following command:

```
psql -h localhost -p 5432 -U postgres
```

Once connected to the PostgreSQL server, you can create a test database and perform some basic queries to verify that the container is working correctly.

Create a Test Database:
In psql, you can create a test database by running the following command:

```
CREATE DATABASE test_db;
```

Query the Test Database:
After creating the test database, switch to it using \c test_db in psql, and then you can run some SQL queries to test its functionality.

Stop the PostgreSQL Container:
Once you have finished testing, you can stop the PostgreSQL container using the following command:

```
docker-compose stop postgres
```

---

#### Second Microsevice -> pgadmin :

---

Using pgAdmin is a great way to manage our PostgreSQL database visually. To use pgAdmin along with your Dockerized PostgreSQL container, let's follow these steps:

Add pgAdmin to the Docker Compose File:

service. Here's an example of how to add pgAdmin:

```

version: "3.8"

services:
  postgres :
    image: postgres:13
    restart: always
    container_name: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - 5432:5432
    volumes:
      - data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    ports:
      - "8080:80"
    environment:
      PGADMIN_DEFAULT_EMAIL: pgadmin@pgadmin.com
      PGADMIN_DEFAULT_PASSWORD: pgadmin
    restart: always
```

---

#### Configuration for pgAdmin :

---

In the pgadmin section of the docker-compose.yml, we're using the official pgAdmin Docker image (dpage/pgadmin4). The container will be named "pgadmin," and we're mapping port 8080 on the host to port 80 in the container, so pgAdmin can be accessed at http://localhost:8080 on our local machine.

We also set environment variables PGADMIN_DEFAULT_EMAIL and PGADMIN_DEFAULT_PASSWORD to configure the default login credentials for pgAdmin. In this example, the default login email is "pgadmin@pgadmin.com," and the password is "pgadmin." You can change these values as needed.

Start the pgAdmin Container:
To start the pgAdmin container along with the PostgreSQL container, run the following command:

```
 docker-compose up -d pgadmin
```

---

#### Access pgAdmin:

---

After the container is up and running, you can access pgAdmin by opening your web browser and navigating to http://localhost:8080.

Login with the email and password specified in the docker-compose.yml file (default: pgadmin@pgadmin.com / pgadmin).

On the pgAdmin dashboard, click "Add New Server" to create a connection to our PostgreSQL container.


Configure pgAdmin Connection:
In pgAdmin, you'll need to add a new server connection to interact with your Dockerized PostgreSQL container.

Name: Provide a name for your connection (e.g., "Docker PostgreSQL").
Host name/address: Use the name of the PostgreSQL service from your docker-compose.yml file (in this case, "postgres") since both services are on the same Docker network.
Port: 5432 (default PostgreSQL port).
Maintenance database: The default database (e.g., "postgres").
Username: postgres (or the username specified in your docker-compose.yml file).
Password: postgres (or the password specified in your docker-compose.yml file).
Click "Save" to add the server.

Manage PostgreSQL with pgAdmin:
After adding the server, you can now use pgAdmin to manage your PostgreSQL database visually. You can create databases, tables, run queries, and perform other database-related tasks through the pgAdmin interface.

Stop the pgAdmin Container:
When you're done using pgAdmin, you can stop the container by running:

```
docker-compose stop pgadmin
```

Using pgAdmin with your Dockerized PostgreSQL container simplifies the process of visually managing your database. Remember to ensure that the PostgreSQL service is up and running (docker-compose up -d postgres) before starting pgAdmin (docker-compose up -d pgadmin). This way, you can access and manage your PostgreSQL database through the pgAdmin web interface.

---