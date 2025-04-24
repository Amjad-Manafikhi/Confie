# 🛍️ Confie — E-commerce React App

**Confie** is a sleek, modern, and responsive multi-page React e-commerce application built with performance and user experience in mind. It features product browsing, filtering, animations, user authentication, and an interactive dashboard — all within a clean and modular React setup.

🔗 [Live Demo](https://confie-xi.vercel.app/)

---

## 📄 Pages Overview

### 🏠 Home (`/`)
- A welcoming landing page with hero sections and featured content.
- Uses **Embla Carousel** for smooth and mobile-friendly image sliders.

### 🛒 Shop (`/shop`)
- Displays a collection of animated product cards using the **FlipMove** library.
- Includes filtering options to filter products by **type** and sort them by **price**.

### ℹ️ About (`/about`)
- Provides information about the brand or application purpose.

### 🔐 Authentication
- **Login** and **Sign Up** pages for user access.
- Form validation for secure login/signup flow.

### 📊 Dashboard (`/dashboard`)
- A private route showing user-related data or admin features.
- Accessible only after login (authentication logic assumed).

---

## 🧰 Features

- 🔀 **Animated Cards**: Product listings use FlipMove to animate transitions when items are filtered or sorted.
- 🎚️ **Filters**: Products can be filtered by type (e.g., furniture category) and sorted by price (e.g., High to Low, Low to High).
- 🎠 **Carousel**: Home page includes a smooth Embla Carousel to highlight promotions or featured items.
- 🍔 **Responsive Sidebar**: Sidebar menu toggled via a hamburger button, collapses gracefully on mobile.
- 🔐 **Auth Pages**: Login and Sign Up form flows to simulate secure access and redirect logic.
- 📦 **Dashboard**: A private route (`/dashboard`) with user-specific content.

---

## 🛠 Tech Stack

- **React** (functional components + hooks)
- **React Router DOM** for routing between pages
- **FlipMove** for animating list changes
- **Embla Carousel** for responsive sliders
- **Custom CSS** for styling 

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/yourusername/confie.git
cd confie
npm install
npm run dev
```

---

## 💡 Future Enhancements (Ideas)

- Integrate with Firebase or Supabase for real authentication
- Add cart functionality and checkout flow
- Use context or state management (like Redux/Zustand) for global product state

---

## 📬 Feedback & Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Made with 💙 by **Amjad Manafikhi**
