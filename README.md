# React Photo Browser

### [Live demo](https://janspa.github.io/react-photobrowser/)

This project was partially based on [Create React App](https://github.com/facebook/create-react-app).

## Setup

```
npm install
```

### Configuration
The base API URL is set to the environment variable `API_URL`, and it is by default set to [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) in the [`.env`](.env) file.

You can override the default URL for example by creating a new file called `.env.local` in the root of the project and defining it there.

## Available scripts

### Run a development server
```
npm run serve
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Compile for production
```
npm run build
```
Builds the app for production to the `build` folder.
