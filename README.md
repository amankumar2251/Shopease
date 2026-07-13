# 🛒 ShopEase - E-Commerce Admin Panel

A **Full Stack E-Commerce Admin Panel** developed using **Spring Boot, Spring Security, JWT Authentication, MySQL, HTML, CSS, and JavaScript**. The project provides secure authentication and complete product management through REST APIs.

---

## 🚀 Features

- 🔐 User Registration
- 🔑 Secure Login with JWT Authentication
- 🔒 Password Encryption using BCrypt
- 📦 Product Management (CRUD)
- ➕ Add Product
- ✏️ Update Product
- ❌ Delete Product
- 📋 View All Products
- 🔍 Search Products
- 🚪 Logout
- 🌙 Modern Dark UI
- ⚡ REST API Integration

---

# 🛠️ Tech Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- JWT Authentication
- Maven

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

## Database

- MySQL

## Tools Used

- IntelliJ IDEA
- Postman
- Git
- GitHub
- Maven

---

# 📂 Project Structure

```
ShopEase
│
├── src
│   ├── main
│   │
│   ├── java
│   │   └── com.shopease
│   │       ├── controller
│   │       ├── service
│   │       ├── repository
│   │       ├── entity
│   │       ├── security
│   │       ├── config
│   │       ├── dto
│   │       └── ShopEaseApplication.java
│   │
│   └── resources
│       ├── static
│       │   ├── css
│       │   ├── js
│       │   ├── images
│       │   ├── index.html
│       │   ├── login.html
│       │   ├── register.html
│       │   ├── dashboard.html
│       │   └── products.html
│       │
│       └── application.properties
│
├── pom.xml
└── README.md
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
Spring Security
      │
      ▼
Authentication Manager
      │
      ▼
BCrypt Password Verification
      │
      ▼
JWT Token Generated
      │
      ▼
Stored in Browser (localStorage)
      │
      ▼
Authorization: Bearer <TOKEN>
      │
      ▼
Protected REST APIs
```

---

# 📦 REST APIs

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users/register` | Register User |
| POST | `/api/users/login` | Login User |

---

## Product APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Get All Products |
| POST | `/api/products` | Add Product |
| PUT | `/api/products/{id}` | Update Product |
| DELETE | `/api/products/{id}` | Delete Product |

---

# 🗄️ Database

## User Table

| Column |
|---------|
| id |
| name |
| email |
| password |

---

## Product Table

| Column |
|---------|
| id |
| product_name |
| description |
| price |
| quantity |

---

# 🖥️ Screenshots

## 🏠 Home Page

![Home](images/home.png)

---

## 🔐 Login Page

![Login](images/login.png)

---

## 📝 Register Page

![Register](images/register.png)

---

## 📊 Dashboard

![Dashboard](images/dashboard.png)

---

## 📦 Products

![Products](images/products.png)
---

# ▶️ How to Run the Project

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ShopEase-SpringBoot.git
```

---

## Open Project

Open in IntelliJ IDEA.

---

## Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/shopease

spring.datasource.username=root

spring.datasource.password=your_password
```

---

## Run Application

Run

```
ShopEaseApplication.java
```

Server

```
http://localhost:8080
```

---

# 🎯 Future Enhancements

- 🛒 Shopping Cart
- ❤️ Wishlist
- 📦 Order Management
- 💳 Payment Gateway
- 👤 User & Admin Roles
- 📱 Responsive Mobile Design
- ☁️ Cloud Deployment
- 📸 Product Image Upload

---

# 📚 Concepts Used

- Core Java
- OOPs
- Spring Boot
- Spring Security
- JWT Authentication
- REST APIs
- CRUD Operations
- Spring Data JPA
- Hibernate
- MySQL
- HTML
- CSS
- JavaScript
- Fetch API
- Git & GitHub

---

# 👨‍💻 Author

**Aman Kumar**

📧 Email: amanchakrawarti88@gmail.com

🔗 GitHub: https://github.com/amankumar2251

---

# ⭐ If you like this project

Please give this repository a ⭐ on GitHub!
