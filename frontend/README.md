# 🏭 IndustrialMind AI
### AI-Powered Predictive Maintenance & Digital Twin Platform

IndustrialMind AI is an intelligent industrial monitoring platform that combines **Artificial Intelligence, IoT concepts, Machine Learning,Computer Vision and Digital Twin Technology** to monitor machine health in real time, predict equipment failures before they occur, and provide interactive 3D visualization of industrial machines.

The project aims to reduce unplanned downtime, improve maintenance efficiency, and support Industry 4.0 transformation through predictive analytics and real-time monitoring.

---

# 📌 Features

- 🔐 Secure Authentication (Firebase Authentication)
- 👤 User Login & Registration
- 📊 Real-Time Machine Monitoring Dashboard
- 🤖 AI-Based Predictive Maintenance
- 📈 Machine Health Score Prediction
- ⚠️ Failure Probability Prediction
- 💡 AI Maintenance Recommendations
- 🏭 Interactive 3D Digital Twin
- 🎮 Camera Controls
- 🌐 REST APIs
- ⚡ Real-Time Communication using Socket.IO
- 📂 Machine Management
- 📉 Sensor Data Visualization
- 📱 Responsive User Interface

---

# 🏗 Project Architecture

```
Frontend (React + Three.js)
        │
        ▼
Backend (Node.js + Express)
        │
        ▼
Machine APIs
        │
        ▼
Prediction Engine
        │
        ▼
MongoDB Database
        │
        ▼
Digital Twin Visualization
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Three.js
- React Three Fiber
- React Router DOM
- Axios
- Firebase
- Socket.IO Client
- Tailwind CSS
- Lucide React

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Firebase Admin SDK
- JWT Authentication
- Multer
- Cookie Parser
- Dotenv
- CORS
- Socket.IO

---

# 📂 Folder Structure

```
ET_AI_Hackathon/

│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── components/
│   │      ├── dashboard/
│   │      ├── digitalTwin/
│   │      ├── machine/
│   │      └── prediction/
│   │
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙ Prerequisites

Install the following software before running the project.

- Node.js (v20 or later recommended)
- npm
- MongoDB Community Server / MongoDB Atlas
- Git
- Firebase Project

---

# 📥 Installation

Clone the repository

```bash
git clone https://github.com/coderkuldheep/ET_AI_Hackathon.git
```

Move into the project directory

```bash
cd ET_AI_Hackathon
```

---

# 📦 Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 📦 Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# ▶ Running the Backend

```bash
cd backend
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# ▶ Running the Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173

FIREBASE_PROJECT_ID=

FIREBASE_PRIVATE_KEY=

FIREBASE_CLIENT_EMAIL=
```

Create another `.env` inside the frontend folder.

```env
VITE_API_URL=http://localhost:5000
```

---

# 📦 Main Dependencies

## Backend

```bash
npm install express
npm install mongoose
npm install dotenv
npm install cors
npm install cookie-parser
npm install bcryptjs
npm install jsonwebtoken
npm install firebase-admin
npm install multer
npm install socket.io
npm install uuid
```
Install these dependencies before running the project

Development

```bash
npm install --save-dev nodemon
```

---

## Frontend

```bash
npm install react-router-dom
npm install axios
npm install firebase
npm install socket.io-client
npm install three
npm install @react-three/fiber
npm install @react-three/drei
npm install @react-three/postprocessing
npm install lucide-react
npm install tailwindcss
```
Install these Dependencies before running the project
---

# 🚀 How the Project Works

1. User logs into the application.
2. Machine information is loaded.
3. Sensor values are collected.
4. AI Prediction Engine evaluates machine health.
5. Failure probability is calculated.
6. Maintenance recommendations are generated.
7. Digital Twin updates machine colors based on health.
8. Dashboard visualizes the machine status in real time.

---

# 📊 Current Project Status

## ✅ Completed

- User Authentication
- Dashboard UI
- Backend APIs
- Machine Management
- AI Prediction Dashboard
- Recommendation Engine
- Digital Twin Foundation
- 3D Machine Models
- Camera Controls
- Health Color Mapping

---

## 🚧 In Progress

- Real Sensor Integration
- Machine Learning Model Training
- Live Data Streaming
- Advanced Analytics

---

# 🔮 Future Enhancements

- IoT Device Integration
- Cloud Deployment
- Predictive Maintenance using Deep Learning
- Remaining Useful Life (RUL) Prediction
- AI Chat Assistant
- Multi Factory Support
- Mobile Application
- Production Deployment
- Industrial Reports & Analytics

---

# 🎯 Advantages

- Reduces machine downtime
- Improves maintenance planning
- Reduces maintenance costs
- Real-time monitoring
- Better resource utilization
- Interactive Digital Twin
- Scalable architecture
- Industry 4.0 ready
- AI-powered decision making

---

# 👨‍💻 Team

**Industrial Mind AI Team**

Team Leader : Kuldheep S
Member 1 : Mohammed Abdul Haseeb
Member 2 : Kuldeep Jain
Member 3 : Keerthivasan R

Developed as part of the ET AI Hackathon.

---

# 📄 License

This project is developed for educational and hackathon purposes.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.