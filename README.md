# eCommerceApp-RestApi

Building an e-commerce application REST API using my knowledge of server-side web development.

## Getting Started with Create React App

This project was bootstrapped with Create React App.

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about running tests for more information.

#### `npm install`

Builds the app for production to the build folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

#### `npm run eject`

> **Note:** This is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready for it.

---

## Deployment

For deploying this project to a platform like Render or Heroku, follow the deployment instructions provided by the platform, ensuring that both the front-end (React) and back-end (Node.js/Express) are configured properly.

---

## Learn More

You can learn more in the Create React App documentation.

To learn React, check out the [React documentation](https://reactjs.org/docs/getting-started.html).

---

## Troubleshooting

For any errors such as `npm run build` fails to minify or other issues, you can find solutions in the [Create React App troubleshooting documentation](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

---

## eCommerce API Overview

The REST API provides the following features:

- **User Authentication**: Secure login and registration functionality using JWT (JSON Web Tokens).
- **Product Management**: CRUD operations (Create, Read, Update, Delete) for managing products.
- **Order Processing**: Ability to place and track orders.
- **Cart Management**: Functionality to manage items in a cart.

### Example Endpoints:
1. **POST /login** - User login to get a JWT token.
2. **POST /register** - User registration.
3. **GET /products** - Fetch all products.
4. **POST /products** - Create a new product (Admin only).
5. **GET /orders** - Retrieve all orders placed by the authenticated user.
6. **POST /cart** - Add an item to the cart.
