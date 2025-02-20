import { createStore } from "vuex";
import axios from "axios";

const API_URL = "http://localhost:3000"; // Your Rails API URL

export default createStore({
    state: {
        userId: localStorage.getItem("user_id") || null,
        token: localStorage.getItem("token") || null
    },
    mutations: {
        setUser(state, { userId, token }) {
            state.userId = userId;
            state.token = token;
            localStorage.setItem("user_id", userId);
            localStorage.setItem("token", token);
        },
        logout(state) {
            state.userId = null;
            state.token = null;
            localStorage.removeItem("user_id");
            localStorage.removeItem("token");
        }
    },
    actions: {
        async login({ commit }, userId) {
            try {
                const response = await axios.post(`${API_URL}/login`, { username: userId });
                commit("setUser", { userId, token: response.data.token });
                return true;
            } catch (error) {
                console.error("Login failed:", error);
                return false;
            }
        },
        async fetchMessages({ state }) {
            try {
                const response = await axios.get(`${API_URL}/messages/${state.userId}`, {
                    headers: { Authorization: `Bearer ${state.token}` }
                });
                return response.data.messages;
            } catch (error) {
                console.error("Error fetching messages:", error);
                return [];
            }
        },
        async sendMessage({ state }, { receiverId, content, files }) {
            const formData = new FormData();
            formData.append("receiver_id", receiverId);
            formData.append("content", content);
            for (const file of files) {
                formData.append("files[]", file);
            }

            try {
                await axios.post(`${API_URL}/messages`, formData, {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                        "Content-Type": "multipart/form-data"
                    }
                });
                return true;
            } catch (error) {
                console.error("Error sending message:", error);
                return false;
            }
        }
    }
});
