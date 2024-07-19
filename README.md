# Zero Waste Recipe Finder

This app is designed to help users discover and explore various recipes while reducing food waste. Users can search for recipes based on ingredients, cuisines, or meal types. The application provides detailed information about each recipe, including ingredients, cooking instructions, and nutritional facts.

## Demo Link
https://zerowasterecipeapp.netlify.app

## Features

- **Recipe Search:** Users can search for recipes by entering ingredients, cuisines, or meal types.
- **Recipe Details:** Detailed information about each recipe, including ingredients, cooking instructions, and nutritional facts.
- **Responsive Design:** The application is designed to work seamlessly across different devices and screen sizes.

## Technologies Used

- **Frontend:** HTML, SCSS, JavaScript
- **External APIs:** Spoonacular
- **Hosting:** Netlify

## Installation

To run the FoodApp locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/GurjotChohan/foodApp.git
   ```
2. Navigate into the project directory:
   ```bash
   cd foodApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```plaintext
     REACT_APP_YOUR_APP_KEY = <your_api_key>
     ```
     Replace `<your_api_key>` with the API key for the external recipe API.

5. Start the application:
   ```bash
   npm start
   ```
6. Open your browser and navigate to `http://localhost:3000` to use the application locally.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

## Acknowledgments

- [External API Provider](https://spoonacular.com) - The FoodApp uses the external API to fetch recipe data.
