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

### Infrastructure :

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

### Docker :

---

Docker Compose is a tool that allows you to define and manage multi-container Docker applications. It simplifies the process of orchestrating multiple containers and their dependencies.

To organize your infrastructure using Docker Compose for your ft_transcendance project, you'll need to create a docker-compose.yml file. This file describes the services (containers) that make up your application, their configuration, and how they interact with each other.

---

### Nginx :

---

Nginx is a popular open-source web server and reverse proxy server that can also function as a load balancer, HTTP cache, and TLS/SSL termination proxy. It is widely used to serve static content, handle HTTP requests, and proxy requests to backend servers.

In the context of our project, here's why we might need Nginx:

Serving static files: Nginx excels at efficiently serving static content such as HTML, CSS, JavaScript, images, and other files. It can handle a large number of concurrent connections, making it suitable for serving static files efficiently.

Reverse proxy: Nginx can act as a reverse proxy, forwarding incoming HTTP requests to backend servers. This allows you to decouple your frontend application from your backend services. With Nginx, you can configure rules to route requests to the appropriate backend based on various criteria, such as URL paths or request headers.

Load balancing: If you have multiple instances of your backend services, Nginx can distribute incoming requests across those instances using load balancing algorithms like round-robin, least connections, or IP hash. Load balancing helps distribute the traffic evenly, improves scalability, and provides high availability.

Caching: Nginx can cache static and dynamic content, reducing the load on backend servers and improving response times. It supports various caching mechanisms, including simple file caching and advanced content caching with features like cache purging and expiration.

SSL termination: Nginx can handle SSL/TLS encryption and decryption, relieving the backend servers from this resource-intensive task. It allows you to configure SSL certificates, manage HTTPS connections, and enforce secure communication with clients.

High performance and efficiency: Nginx is known for its high performance, low memory footprint, and efficient resource utilization. It is designed to handle a large number of concurrent connections with minimal resource usage, making it suitable for high-traffic websites and applications.

Overall, Nginx acts as a robust and versatile web server and reverse proxy that can enhance the performance, scalability, and security of your web application. It provides features like serving static files, reverse proxying, load balancing, caching, and SSL termination, which can be valuable in building a reliable and efficient web infrastructure.

---

### RESSOURCES :

[Frontend Masters](https://frontendmasters.com/learn/)

---