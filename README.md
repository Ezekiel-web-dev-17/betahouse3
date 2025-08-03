# 🏠 BetaHouse

[![Live Site](https://img.shields.io/badge/Live_Site-Click_Here-blue?style=for-the-badge)](https://betahouse3.vercel.app/)
[![Build Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)](https://github.com/Ezekiel-web-dev-17/betahouse3)

BetaHouse is a modern housing e-commerce web application that allows users to browse real estate listings, view detailed property information, and proceed to checkout for property-related payments using **Stripe** integration.

> Built with React, Tailwind CSS, Node.js, Express.js, MongoDB, and TypeScript.

---

## 🔗 Live Preview

🌐 [Visit BetaHouse Live →](https://betahouse3.vercel.app/)

---

## 🚀 Features

- 🔍 Browse a curated list of homes and properties.
- 🖼️ View high-quality images and property details.
- 🛒 Add a property to cart and simulate payment via Stripe Checkout.
- 🔐 Authentication (Login/Register) for secure access.
- 💳 Stripe Integration for secure and reliable payment processing.
- 📱 Fully responsive and mobile-optimized layout.
- 🌐 Hosted on **Vercel** (Frontend) and **Render** (Backend API).

---

## 🛠️ Tech Stack

### Frontend:
- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend:
- Node.js
- Express.js
- TypeScript
- Stripe API
- MongoDB
- CORS
- Dotenv

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/Ezekiel-web-dev-17/betahouse3.git
cd betahouse3

###2. Install frontend dependencies
cd client
npm install

###3. Run frontend
npm run dev

###4. Set up the backend (if in same repo or linked)
Configure environment variables in .env file:

STRIPE_SECRET_KEY=your_stripe_secret_key
MONGODB_URI=your_mongo_uri
Install backend dependencies:
cd server
npm install
Run backend:
npm run dev

🔐 Stripe Integration
This project uses Stripe’s PaymentIntent API and Checkout Sessions.

Ensure your Stripe account is in test mode and the secret keys match across both frontend and backend environments.

Example payload:
{
  "items": [{"amount": 5000000}]
}

🙌 Contributing
Want to contribute? Pull requests are welcome! Please fork the repo and submit a PR.

📄 License
MIT License.

📬 Contact
Created with ❤️ by Ezekiel

Feel free to reach out if you want to collaborate or have questions about the project.
