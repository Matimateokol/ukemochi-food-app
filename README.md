# ukemochi-food-app
MERN stack web application for creating and reading culinary recipes.
![Ukemochi-app-demo](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/demo1.gif)
![Ukemochi-food-goddess](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/ukemochi2.png)
<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

# Features:
* loging in and signing up in JWT based user session
* creating and viewing all recipes in the system
* creating and viewing of personal recipes
* highly efficient fuzzy search (MongoDB dynamic indexes)
* uploading recipe image to Cloudinary
* logging out and secured routes

## clone or download
```terminal
$ git clone https://github.com/Matimateokol/ukemochi-food-app.git
$ yarn # or npm i
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^18.15.0
- [Cloudinary](https://cloudinary.com)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Frontend-side usage(PORT: 5173)
```terminal
$ cd ukemochi-frontend          // go to frontend folder
$ yarn # or npm i    // npm install packages
$ yarn dev        // run it locally

// deployment for client app
$ yarn build // this will compile the react code using webpack and generate a folder called build in the root level
$ yarn start // this will run the files in build, this behavior is exactly the same how gh-pages will run your static site
```

## Backend-side usage(PORT: 4000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET and other variables in .env to connect to MongoDB)


### Start

```terminal
$ cd ukemochi-backend   // go to server folder
$ yarn # or npm i       // yarn / npm install packages
$ yarn dev // run it locally
$ yarn build 
```

# Dependencies(tech-stacks)
Frontend-side | Backend-side
--- | ---
axios: ^1.3.4 | bcryptjs: ^2.4.3
cogo-toast: ^4.2.3 | buffer-to-stream: ^1.0.0
react: ^18.2.0 | cloudinary: ^1.35.0
react-dom: ^18.2.0 | cors: ^2.8.5
react-dropzone: ^14.2.3 | express: ^4.18.2
react-icons: ^4.8.0 | express-fileupload: ^1.4.0
react-router-dom: ^6.8.2 | helmet: ^6.0.1
swr: ^2.1.0 | jsonwebtoken: ^9.0.0
. | mongoose: ^7.0.0
. | passport: ^0.6.0
. | passport-jwt: ^4.0.1 
. | rimraf: 4.3.0
. | sharp: 0.31.3
. | yup: 1.0.2

# Screenshots of this project

User can log in and view Home page:
![User can log in and view Home page 1](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/LogIn.png)
![User can log in and view Home page 2](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/LogIn2.png)
![User can log in and view Home page 3](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/landingPage.png)

Mobile view adaptation:
![](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/mobile_createRecipe.png)
![](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/mobile_hamburger.png)
![](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/mobile_landingPage.png)
![](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/mobile_logIn.png)
![](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/mobile_showMore.png)
![](https://github.com/Matimateokol/ukemochi-food-app/blob/main/ukemochi-screenshots/mobile_userRecipes.png)

## Author
[Matimateokol](https://github.com/Matimateokol/)

### License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)
