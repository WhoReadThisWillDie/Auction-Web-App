## Explanation of choices

This document describes the choices concerning the project architecture and design and the used technologies. 

### Backend

The backend is written in JavaScript using the Express framework. The backend follows the REST API and separation of concerns principles.
In order to achieve this, the backend is divided into several modules, each of which is responsible for a specific part of the application. 
The key modules are:

- controllers: This module handles the logic of the application and interact with the data models.
- data: Files in this directory contain the data models used by the application. Once the data is updated, these models updated by controller files.
- routes: Files from this module define the routes of the application and handle the requests made by the client.
- middleware: This directory stores the middleware functions used by the application. Middleware functions are used
to perform authentication and authorization tasks.

**Please note that the backend is also uses .env variables to store sensitive information such as JWT secret**

You need to specify this secret in your .env file by setting the JWT_SECRET variable. You can also specify the port number
on which the application will run by setting the PORT variable.

### Frontend

The frontend is written in Svelte and is built using the Svelte component-based framework. As well as the backend,
the frontend is also divided into several modules, each of which is responsible for a specific part of the application.
The main modules are:

- components: This module contain the reusable Svelte components.
- pages: This module contain the Svelte pages which are composed of components. These pages are used to represent the
different parts of the application.
- api: The directory contains the API calls used by the frontend. These API calls allow the frontend to fill in the pages
with the data retrieved from the backend. It is also used to send data to the backend when an entity is created or updated.
- stores: This module contain the Svelte stores which are used to store the authorization token.