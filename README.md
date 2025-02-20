# Vue Messaging App

## 📌 Overview
This is a simple Vue.js frontend for a messaging system that interacts with a Rails API. It allows users to authenticate, view their messages, and send new messages in a clean and organized interface.

## ✨ Features
- **User Authentication**: Simple login interface where users enter their `user_id`.
- **Message Display**: View all sent and received messages in a structured layout.
- **Message Composition**: Users can compose and send new messages.

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/vue-messaging-app.git
cd vue-messaging-app
```

### 2️⃣ Install Dependencies
```sh
yarn add
```

### 3️⃣ Run the Development Server
```sh
yarn run serve
```

- By default, the app will be available at: http://localhost:8080


## 📂 Project Structure
```bash 
/src
│── /components     # Reusable Vue components (Navbar, MessageItem, etc.)
│── /views          # Main pages (LoginPage, MessagesPage, CreateMessagePage)
│── /store          # Vuex store for state management
│── /router         # Vue Router configuration
│── App.vue         # Main Vue app structure
│── main.js         # Vue entry point
```

## 💡 Notes

- This frontend is designed to work with a Rails API.
- Ensure the API allows CORS requests from http://localhost:8080.
- Modify the API_URL in src/store/index.js if needed.