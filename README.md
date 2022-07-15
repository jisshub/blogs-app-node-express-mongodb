# blogs-app-node-express-mongodb

## Functionalities of App

- Perform CRUD operations for blogs and comments api's.
- Admin API to protect the blogs create, update and delete operations.
- Authentication using json web token.
- Unauthorized access to the blogs create, edit and update is blocked.

## Install Dependencies

```sh
npm install
```

## Run node server in development mode

```sh
npm run dev
```

## Run node server in production mode

```sh
npm start
```

## API Requests
### Blogs

```API
Get all Blogs - GET http://localhost:3000/api/v1/blogs/ 
Get Single Blog - GET http://localhost:3000/api/v1/blogs/:id
Create Blog - POST http://localhost:3000/api/v1/blogs
Update Blog - PUT http://localhost:3000/api/v1/blogs/:id
Delete Blog - DELETE http://localhost:3000/api/v1/blogs/:id
```

[Blogs Sample Data](https://github.com/jisshub/blogs-app-node-express-mongodb/blob/main/_data/blogs.json)
### Comments

```API
Get All Comments - GET http://localhost:3000/api/v1/comments/
Get Comments of a Blog - GET http://localhost:3000/api/v1/blogs/:blogId/comments/
Create Comment - POST http://localhost:3000/api/v1/blogs/:blogId/comments/
```

[Comments Sample Data](https://github.com/jisshub/blogs-app-node-express-mongodb/blob/main/_data/comments.json)

### Admin

```API
Register Admin - POST http://localhost:3000/api/v1/auth/register
Login Admin - POST http://localhost:3000/api/v1/auth/login
```

## Admin Register Sample

```json
{
    "name": "name",
    "email": "email",
    "password": "admin@#777"
}
```

**Note:**

- Password minimum 6 characters.

    [Admin Sample Data](https://github.com/jisshub/blogs-app-node-express-mongodb/blob/main/_data/admin.json)


## Admin Login Sample

```json
{
    "email": "email",
    "password": "password"
}
```

## Postman Collection

Postman Collection is located in root folder.

[Postman Collection](https://github.com/jisshub/blogs-app-node-express-mongodb/blob/main/Blogs%20API.postman_collection.json)

**[⬆ Back to Top](#blogs-app-node-express-mongodb)**
