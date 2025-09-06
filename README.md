

# 🛒 E-Mart

E-Mart is a **full-stack e-commerce web application** built with **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.
It provides a seamless shopping experience with user authentication, product browsing, cart management, and order handling.

---

## 🚀 Features

* 🔑 **User Authentication** (Signup & Login with JWT)
* 🛍️ **Product Catalog** – Browse products with details, price, and category
* 🔎 **Search & Filter** – Find products by name or category
* 🛒 **Shopping Cart** – Add/remove products, update quantities



---

## 🏗️ Project Structure

```
Emart1/
│── backend/          # Express + MongoDB backend
│   ├── config/       # Database & environment config
│   ├── models/       # Mongoose models (User, Product, Order)
│   ├── routes/       # API routes
│   ├── controllers/  # Route controllers
│   ├── middleware/   # JWT auth middleware
│   └── server.js     # Backend entry point
│
│── public/           # Static assets
│
│── src/              # React frontend
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components (Home, Cart, Login, etc.)
│   ├── data/         # Sample product/event data
│   ├── App.js        # Main app
│   └── main.jsx      # React entry point
│
│── package.json
│── vite.config.js
│── README.md
```

---

## 🛠️ Tech Stack

**Frontend**

* React (with Vite) ⚡
* Axios (API calls)
* React Router (navigation)

**Backend**

* Node.js + Express
* MongoDB + Mongoose
* Stripe (payment gateway – optional)


## ⚙️ Installation & Setup

### 1. Clone the Repository

git clone https://github.com/jyothitumma304/Emart1.git
cd Emart1

### 2. Setup Backend


1)cd backend
2)npm install


Create a `.env` file in `backend/` with:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key   # optional


Start the backend:

1)npm run dev


### 3. Setup Frontend

1)cd  folder name
2)npm install
3)npm run dev

Frontend will run at: `http://localhost:5173`
Backend will run at: `http://localhost:5000`


## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to your branch
5. Create a Pull Request



👉 Would you like me to **write this README.md directly into your repo** (so it appears on GitHub), or just give you the markdown file to paste yourself?
