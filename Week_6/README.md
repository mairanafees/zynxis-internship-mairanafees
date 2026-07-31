# 🛒 SmartCart – Smart Shopping Cart

A modern React-based Shopping Cart application that demonstrates Global State Management using the Context API. The application allows users to browse products, add items to the cart, manage quantities, and retain cart data across browser sessions using Local Storage.

---

## 📌 Project Overview

Cartify is designed to showcase application-wide state management in React. Instead of passing data through multiple components (prop drilling), the Context API is used to manage and share cart data globally.

The project also uses Local Storage to ensure that cart data remains available even after refreshing or reopening the browser.

---

## ✨ Features

- View products in a responsive product grid
- Add products to cart
- Increase or decrease product quantity
- Remove items automatically when quantity reaches zero
- Real-time cart updates
- Cart item counter in navbar
- Total price calculation
- Persistent data using Local Storage
- Responsive design for different screen sizes
- Checkout functionality with success confirmation

---

## 🛠️ Technologies Used

- React.js
- Context API
- JavaScript (ES6+)
- CSS3
- Vite
- Local Storage

---

## 📂 Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ └── Cart.jsx
│
├── context/
│ └── CartContext.jsx
│
├── data/
│ └── products.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css

---

## 🔄 State Management Flow

Products → Add To Cart → Context API → Cart State
↓
Navbar Updates
↓
Cart Updates
↓
Local Storage Persistence

---

## 🔗 Live Demo

<img width="1920" height="836" alt="image" src="https://github.com/user-attachments/assets/8cf316bc-2fec-4540-9879-338bd6f4f7f1" />
<img width="1180" height="693" alt="image" src="https://github.com/user-attachments/assets/f804b8a5-1005-4150-8c70-e02e0b1a3277" />

