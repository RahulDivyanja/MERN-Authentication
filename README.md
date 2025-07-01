# MERN Authentication

A secure and scalable full-stack authentication system built with the **MERN stack** (MongoDB, Express.js, React, Node.js). 
This project includes **JWT-based** user authentication, email verification and password reset via **Brevo (formerly Sendinblue)**, 
and a responsive frontend styled with **Tailwind CSS**.

## 🔐 Features

- User registration & login
- JWT authentication and authorization
- Email verification via Brevo
- Forgot/reset password functionality
- Protected routes (frontend & backend)
- Fully responsive UI with Tailwind CSS
- Input validation & error handling

## 🛠️ Tech Stack

### 📦 Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **JWT** – Token-based authentication
- **Bcrypt.js** – Password hashing
- **Brevo API** – Email delivery service
- **dotenv** – Manage environment variables

### 🌐 Frontend
- **React.js** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS framework
- **Axios** – HTTP client
- **React Router DOM** – Client-side routing
- **React Hook Form** – Form handling

## 📁 Project Structure
mern-authentication/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│
├── .env
├── README.md
└── package.json


## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)
- Brevo account with API key

### Installation

```bash
git clone https://github.com/your-username/mern-authentication.git
cd mern-authentication

📧 Email Integration with Brevo
Email verification and password reset links are sent via Brevo Email API.

Ensure your sender email is verified in your Brevo dashboard.

🌟 Future Improvements
Google / GitHub OAuth

Multi-factor authentication (MFA)

Admin dashboard for managing users

Account lockout after failed attempts

🤝 Contributing
Contributions are welcome! Fork the repo and submit a pull request.

📄 License
This project is licensed under the MIT License.

