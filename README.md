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