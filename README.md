# Photoinsp

A web app displaying inspirational photos from [Unsplash API](https://unsplash.com/developers).

Current version on Heroku: https://photoinsp.herokuapp.com/

## Tech

### Front-end

- React (Create React App with typescript template)

The app state is managed with Redux.

Routing is implemented with the [BrowserRouter of React Router](https://reactrouter.com/web/api/BrowserRouter).

### Back-end

- Node.js
- Express

## How to develop and deploy

### Development

Rename ```.env-example``` as ```.env``` and add your [Unsplash API](https://unsplash.com/developers) key there. Start the Express server in development mode:

```
npm run dev
```

The server runs at ```http://localhost:3001```


Start the React front-end in development mode:

```
cd client
npm start
```

The front-end runs at ```http://localhost:3000```

### Deployment

The app can be deployed to Heroku with the script

```
npm run deploy
```

The script
1. Compiles ```server.ts``` to ```server.js``` which can be found from directory ```/build```.
2. Goes to directory ```/client``` where the React front-end is located.
3. Creates an optimized production build of the front-end.
4. Returns to root directory.
5. Stages all changed files to git.
6. Creates a git commit of the latest build.
7. Pushes the latest build to Heroku.
8. Pushes the latest build to GitHub repository.