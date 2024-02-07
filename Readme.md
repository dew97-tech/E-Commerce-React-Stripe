# Shop Now | A E-Commerce Store

This project is a simple e-commerce website built with React, Tailwind CSS, Daisy UI, and Vite. The website is responsive, mobile-friendly, and integrated with the Fakestore API for prototyping e-commerce. State management is handled with React Context API.

## Features

-  User authentication (login, password change, OTP, multi-device login with IP address tracking, session management) using the Clerk library.
-  Dark Mode support.
-  Product listing fetched from the Fakestore API.
-  Add products to cart and calculate total cost.
-  Proceed to payment using Stripe.

## Project Structure

The project is divided into two main directories:

-  `frontend/`: Contains the React application.
-  `backend/`: Handles payments with Stripe.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Navigate to the `backend/` directory and run `npm install` to install the necessary dependencies.
3. Start the backend server by running `node server.js`.
4. Navigate to the `frontend/` directory and run `npm install` to install the necessary dependencies.
5. Start the frontend server by running `npm run dev`.

## Contributing

Contributions are welcome! Feel free to report any bugs or issues you find, or open a pull request if you have an improvement or feature to suggest.

## License

This project is open source, under the [MIT License](LICENSE).
