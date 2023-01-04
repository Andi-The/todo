# Front end for a simple todo app.
Was created for a lab assignment at the Esslingen University of Applied Sciences.

## Run the App with npm
Change Line 5 in src/network/apiClient to:
```
    baseURL: backendURL:port/todos
```
```bash
    # Run
    npm start
```
## Run with docker
Environment Variable:
* API_URL: Base Url via which the backend can be reached. Port must be specified.

### With docker file

```bash
    docker run -d -p $YourPort:80 -e API_URL=$BackendUrl andithe/todo-frontend:latest

    #example
    docker run -d -p 8090:80 -e API_URL=http://localhost:8080/todos/ andithe/todo-frontend:latest
```
### With docker-compose

```bash
    docker-compose up -d
```
