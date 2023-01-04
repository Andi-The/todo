# Run the App with npm
Change Line 5 in src/network/apiClient to:
```json
    baseURL: backendURL:port/todos
```
```bash
    # Run
    npm start
```
# Run with docker
### With docker file

```bash
    docker run -d -p $YourPort:80 -e API_URL=$BackendURl andithe/todo-frontend:latest

    #example
    docker run -d -p 8090:80 -e API_URL=http://localhost:8080/todos/ andithe/todo-frontend:latest
```
### With docker-compose

```bash
    docker-compose up -d
```