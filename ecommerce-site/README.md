# E-Commerce Website

A fully responsive, modern e-commerce website built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- **Home Page**: Hero section, featured products, responsive design
- **Shop Page**: Product listing with filters, search, sorting
- **Product Details**: Detailed product view with image, description, add to cart
- **Cart**: Shopping cart with quantity updates, price calculations
- **Checkout**: Billing information, payment options (Cash on Delivery, demo card)
- **User Authentication**: Login and registration forms
- **User Dashboard**: Profile management, order history, wishlist, addresses
- **Admin Dashboard**: Product management, order management, user management
- **About & Contact Pages**: Company information and contact details

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.0
- Font Awesome Icons

## Project Structure

```
ecommerce-site/
├── index.html          # Home page
├── shop.html           # Shop/products page
├── product.html        # Product details page
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout page
├── login.html          # Login/register page
├── dashboard.html      # User dashboard
├── admin.html          # Admin dashboard
├── about.html          # About us page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Custom styles
├── js/
│   ├── main.js         # Common functionality
│   ├── shop.js         # Shop page scripts
│   ├── cart.js         # Cart functionality
│   ├── checkout.js     # Checkout scripts
│   ├── auth.js         # Authentication
│   ├── product.js      # Product details
│   ├── dashboard.js    # User dashboard
│   └── admin.js        # Admin dashboard
├── assets/
│   └── images/         # Product images
└── README.md           # This file
```

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in a web browser
3. The website is fully functional with local storage for data persistence

## Sample Data

The website includes sample product data for demonstration. In a real-world scenario, this would be replaced with a backend API.

## Images Required

Place the following images in the `assets/images/` folder:

- `hero-image.jpg` - Hero section background (1200x600px)
- `about-image.jpg` - About page image (800x600px)
- Product images for each product (e.g., `wireless-headphones.jpg`, `running-shoes.jpg`, etc.)

## Features Implemented

- Responsive design for all screen sizes
- Product search and filtering
- Shopping cart with local storage
- User authentication simulation
- Admin panel for product/order management
- Smooth animations and hover effects
- Bootstrap components for consistent UI

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

- Backend integration with Node.js/Express
- Database integration (MongoDB/MySQL)
- Real payment gateway integration
- Email notifications
- Order tracking
- Product reviews and ratings
- Advanced admin analytics

## Customization

The code is well-commented and easy to customize. Key areas for customization:

- Colors: Modify CSS variables in `style.css`
- Products: Update the `products` array in `js/main.js`
- Layout: Adjust Bootstrap classes in HTML files
- Functionality: Extend JavaScript files for additional features

## License

This project is for educational purposes. Feel free to use and modify as needed.
