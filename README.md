# 🚀 Node.js Auth API with MongoDB & JWT

## 📌 Project Overview

This project is a **backend authentication system** built using Node.js, Express, MongoDB, and JWT.
It allows users to register, login, and access protected routes securely.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (JSON Web Token)
* bcryptjs (password hashing)

---

## 🔐 Features

* User Registration
* User Login
* Password Hashing (bcrypt)
* JWT Token Authentication
* Protected Routes (middleware)
* MongoDB Database Integration

---

## 📂 Project Structure

```
node-auth-mongo/
│── config/
│   └── db.js
│── models/
│   └── User.js
│── routes/
│   └── authRoutes.js
│── middleware/
│   └── auth.js
│── index.js
│── .env
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/vkkcnit84/node-auth-mongo.git
cd node-auth-mongo
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/myapp
JWT_SECRET=your_secret_key
PORT=3000
```

---

### 4️⃣ Run the server

```
npm run dev
```

---

## 📡 API Endpoints

### 🔹 Register User

**POST** `/api/auth/register`

Request:

```json
{
  "name": "Vinay",
  "email": "vinay@test.com",
  "password": "123456"
}
```

---

### 🔹 Login User

**POST** `/api/auth/login`

Request:

```json
{
  "email": "vinay@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

### 🔹 Protected Route

**GET** `/protected`

Header:

```
Authorization: Bearer TOKEN
```

Response:

```json
{
  "message": "Authenticated user"
}
```

---

## 🔐 Security Notes

* Passwords are hashed using bcrypt
* JWT tokens expire after a fixed time
* `.env` file is ignored for security

---

## 🚀 Future Improvements

* Refresh Token Implementation
* Role-Based Access (Admin/User)
* Input Validation (Joi/Zod)
* Deployment (AWS / Render)

---

## 👨‍💻 Author

Vinay Kumar Singh

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
