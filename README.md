# QuickBite - Food Delivery Web Application

QuickBite is a modern, responsive food delivery web application built with React.js for the frontend and Node.js with Express for the backend. The application allows users to browse restaurants, view menus, add items to cart, and place orders.

## Features

- 🍽️ **Restaurant Listings**: Browse through various restaurants
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🛒 **Shopping Cart**: Add/remove items, update quantities
- 💳 **Payment Integration**: Multiple payment options including COD and online payment
- 📍 **Location-based Services**: Find restaurants near you
- 🔍 **Search Functionality**: Search for specific restaurants or cuisines
- 📦 **Order Tracking**: Track your order status
- 👤 **User Authentication**: Secure login and registration system

## Screenshots

### Home Page & Hero Section
![Home Page](screenshots/home-hero.png)
*Our welcoming homepage featuring a delectable array of dishes and our mission statement.*

### Menu Categories
![Menu Categories](screenshots/menu-categories.png)
*Explore our diverse menu categories including Salads, Rolls, Desserts, Sandwiches, and more.*

### Shopping Cart
![Shopping Cart](screenshots/cart.png)
*Easy-to-use shopping cart with item management and delivery fee calculation.*

### Checkout Process
![Delivery Details](screenshots/delivery-details.png)
*Simple and secure delivery information collection.*

![Payment Options](screenshots/payment-options.png)
*Multiple payment options including Cash on Delivery, Card, and UPI.*

### Order Tracking
![Order Status](screenshots/order-status.png)
*Track your order status and view order details.*

### Mobile App Promotion
![Mobile App](screenshots/app-promotion.png)
*Download our mobile app for an enhanced ordering experience.*

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- CSS3 for styling
- Font Awesome for icons
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Mongoose for database operations

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Food-Web-App.git
cd Food-Web-App
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. Start the backend server:
```bash
cd backend
cd server
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
Food-Web-App/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Restaurants
- GET `/api/restaurants` - Get all restaurants
- GET `/api/restaurants/:id` - Get restaurant by ID
- GET `/api/restaurants/search` - Search restaurants

### Orders
- POST `/api/orders` - Create new order
- GET `/api/orders` - Get user's orders
- GET `/api/orders/:id` - Get order by ID

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Font Awesome for the icons
- React community for the amazing framework
- All contributors who have helped in building this project
