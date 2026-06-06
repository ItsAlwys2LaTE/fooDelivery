# 🍔 fooDelicious: Full-Stack Food Delivery

> *"Savor the Flavor, Delivered to You! Fast, convenient, and always satisfying."*

![Frontend](https://img.shields.io/badge/Frontend-React_%2B_Vite-blue)
![Backend](https://img.shields.io/badge/Backend-Node.js_%2B_Express-green)
![Database](https://img.shields.io/badge/Database-MongoDB-success)

## 📖 Overview
**fooDelicious** is a comprehensive, full-stack MERN (MongoDB, Express, React, Node.js) food delivery platform. It is designed to seamlessly connect customers with a diverse menu of local restaurant offerings, featuring a dynamic customer-facing web app for browsing and ordering, alongside a dedicated administrative dashboard for inventory and order management.

---

## 🧠 Core Features & Mechanics

### 🍕 1. Customer Experience (Frontend)
* **Dynamic Menu Exploration:** Users can seamlessly filter dishes by categories (Burger, Pizza, Pasta, Noodles, etc.) using a responsive, horizontally scrolling menu.
* **Real-Time Cart Management:** A globally managed cart state (powered by React Context API) allows users to add items, adjust quantities, and calculate subtotals and delivery fees instantly.
* **Secure Checkout Options:** Integration with the **Stripe API** allows for secure credit/debit transactions, alongside a seamless Cash on Delivery (COD) alternative.
* **Live Order Tracking:** Authenticated users have access to a dedicated "My Orders" portal to monitor their food's journey from "Food Processing" to "Out for delivery" and finally "Delivered."

### ⚙️ 2. Administrative Control (Admin Panel)
* **Inventory Management:** A dedicated React portal allows restaurant admins to add new menu items, upload high-quality dish images directly to the server, assign categories, and set pricing.
* **Order Fulfillment:** A centralized dashboard aggregates all incoming orders, displaying customer delivery addresses, contact details, and itemized lists, while allowing admins to update the live delivery status with a single click.

### 🔒 3. Robust Backend Architecture
* **Secure Authentication:** Utilizes **JWT (JSON Web Tokens)** and **Bcrypt** password hashing to secure user accounts, protect privacy, and authenticate API requests.
* **Efficient File Handling:** Integrates **Multer** for reliable, localized image uploading and storage for food items.
* **Scalable Database:** Powered by **MongoDB** and **Mongoose**, ensuring flexible, schema-based data storage for user profiles, cart states, food inventories, and complex order histories.

---

## 🛠️ Tech Stack
* **Frontend Apps (Client & Admin):** React 18, Vite, React Router DOM, Context API, CSS3
* **Backend Server:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication & Security:** JWT, Bcrypt, Validator
* **Payment Gateway:** Stripe
* **Utilities:** Axios (API Requests), React Toastify (Notifications), Multer (Image Uploads)
