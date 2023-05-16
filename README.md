<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`# Card Game Prototype

Card Game Prototype is a web application built with React that allows you to create and prototype card games. It provides a drag-and-drop interface for managing different zones of cards, such as deck, hand, play area, and discard pile.

## Getting Started

To get started with Card Game Prototype, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/poeticmatter/card-game-prototype.git
   ```

2. Navigate to the project directory:

   ```shell
   cd card-game-prototype
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

   This will start the application and open it in your default browser.

## Customizing Card Data

By default, the application loads card data from a CSV file located in the `/public/data/cards.csv` directory. You can customize the card data by replacing this file with your own CSV file following the same format: `id,cardName,cardType`. Each row represents a card, with the `id` being a unique identifier, `cardName` being the name of the card, and `cardType` representing the type or category of the card.

## Deploying to GitHub Pages

Card Game Prototype can be easily deployed to GitHub Pages to make it accessible online. To deploy the application, follow these steps:

1. Update the `homepage` field in the `package.json` file:

   ```json
   "homepage": "https://your-username.github.io/card-game-prototype"
   ```

   Replace `your-username` with your GitHub username.

2. Build the application:

   ```shell
   npm run build
   ```

   This will create a production-ready build of the application in the `build` directory.

3. Create a new branch named `gh-pages`:

   ```shell
   git branch gh-pages
   ```

4. Switch to the `gh-pages` branch:

   ```shell
   git checkout gh-pages
   ```

5. Copy the contents of the `build` directory to the root of the project:

   ```shell
   cp -r build/* .
   ```

6. Commit and push the changes:

   ```shell
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

7. Your application should now be deployed to GitHub Pages. You can access it using the URL: `https://your-username.github.io/card-game-prototype`.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# card-game-prototype
A tool for rapid card prototyping
>>>>>>> 9efa85158d3621996e4083d1af1d45ecc19a8694
