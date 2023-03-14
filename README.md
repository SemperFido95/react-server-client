# Full Stack React

## Setup

You will need postgres running.

You will need a database called full-stack-react.
Use Postico!

You will need to setup a table per the database.sql.

`npm install`

## Starting Localhost

```
npm run server
npm run client
```

> NOTE: If you change the PORT in `server.js` you **must** update the proxy port in your `package.json`!


### Public Folder

You should rarely have to make any changes here. If you want to use a Google Font or add static images to your project, they would go here. This is the folder that everything is deployed to when you push to Heroku. In React, Axios is available via `npm install`, you should **not** source any JavaScript files in the `index.html`.

### Server Folder

This is the same structure as before with one exeption, we will no longer be putting our `public` folder here! All other server code will work as it did before.

### Src Folder

This is the folder we will use for building out our client side code. It contains components that will make up our application. We will start with a small number of components but that folder will grow as we build larger applications.
