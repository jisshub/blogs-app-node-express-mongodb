# blogs-app-node-express-mongodb

### Install Dependencies

```sh
npm install
```

### Run node server in development mode

```sh
npm run dev
```

### Run node server in production mode

```sh
npm start
```

## API Requests
### Blogs
```sh
Get all Blogs - GET http://localhost:3000/api/v1/blogs/ 
Get Single Blog - GET http://localhost:3000/api/v1/blogs/:id
Create Blog - POST http://localhost:3000/api/v1/blogs
Update Blog - PUT http://localhost:3000/api/v1/blogs/:id
Delete Blog - DELETE http://localhost:3000/api/v1/blogs/:id
```
### Comments

```sh
Get All Comments - GET http://localhost:3000/api/v1/comments/
Get Comments of a Blog - GET http://localhost:3000/api/v1/blogs/:blogId/comments/
Create Comment - POST http://localhost:3000/api/v1/blogs/:blogId/comments/
```

### Admin

```sh
Register Admin - POST http://localhost:3000/api/v1/auth/register
Login Admin - POST http://localhost:3000/api/v1/auth/login
```

### Admin Register Sample

```json
{
    "name": "name",
    "email": "email",
    "password": "admin@#777"
}
```

**Note:**

- Password minimum 6 characters.
- Sample admin credential given in file `_data/admin.json` file.

    admin.json[_data/admin.json]


### Admin Login Sample

```json
{
    "email": "email",
    "password": "password"
}
```