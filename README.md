# Restful Auth Frontend

A modern React-based frontend for **Authentication**, featuring JWT authentication, a responsive dashboard, and a clean, scalable architecture.

> **Status:** 🚧 In Development

---

## 📌 Overview

DevHub Frontend is built with React and communicates with the DevHub Backend through REST APIs. It provides a smooth authentication flow, manages user sessions, and offers a clean dashboard interface.

This project focuses on learning and implementing real-world frontend architecture, API integration, and authentication using JWT.

---

## ✨ Features

* 🔐 User Signup
* 🔑 User Login
* 🛡️ JWT Authentication
* 📡 REST API Integration using Axios
* ⚡ Axios Request & Response Interceptors
* 💾 Persistent Authentication using Local Storage
* 📊 Responsive Dashboard UI
* 🧩 Component-Based Architecture
* 🎨 Responsive Design with Tailwind CSS

---

## 🛠️ Tech Stack

* React
* React Router DOM
* Axios
* Tailwind CSS
* React Icons
* Vite

---

## 📂 Project Structure

```text
.

├── src
│   ├── App.jsx
│   ├── api
│   │   └── axios.js
│   ├── components
│   │   ├── Dashboard
│   │   │   ├── Navbar.jsx
│   │   │   ├── RecentActivity.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── UserProfile.jsx
│   ├── context
│   │   └── AuthContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── routes
│   │   └── router.jsx
│   ├── services
│   │   └── authService.js
│   └── utils
│       └── authStorage.js
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/devhub-frontend.git
```

### Navigate to the project

```bash
cd devhub-frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

## 🔗 Backend

This frontend communicates with the DevHub Backend.

Backend Repository:

**👉 Add your backend GitHub repository link here**

Example:

```text
https://github.com/<your-username>/devhub-backend
```

---

## 🔄 Authentication Flow

```text
User Login / Signup
        │
        ▼
React Form
        │
        ▼
Auth Service
        │
        ▼
Axios Instance
        │
        ▼
Backend API
        │
        ▼
JWT Token
        │
        ▼
Local Storage
        │
        ▼
Dashboard
```

---

## 📸 Screenshots

Add screenshots here after completing the UI.

Suggested screenshots:

* Login Page
* Signup Page
* Dashboard

---

## 📚 What I Learned

During this project, I explored and implemented:

* Connecting React with an Express backend
* Working with REST APIs
* JWT-based authentication
* Axios interceptors
* Service layer architecture
* Authentication persistence
* Component-based React architecture
* Error handling during API communication
* Organizing scalable React projects

---

## 🚀 Future Improvements

* Password hashing support (Backend)
* Context API for global authentication
* Protected Routes
* User Profile Page
* Project Management Module
* Task Management
* Theme Toggle
* Form Validation
* Toast Notifications
* Better Error Handling
* Loading Skeletons
* Role-Based Authentication
* Refresh Token Authentication

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

Feel free to fork the repository and create a pull request.

---

## 📄 License

This project is created for learning and educational purposes.
