<template>
    <nav class="navbar">
        <router-link to="/messages">Messages</router-link>
        <router-link to="/create-message">Send Message</router-link>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const logout = () => {
            store.commit("logout");
            router.push("/");
        };

        return { logout };
    }
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
    background: blue;
    padding: 10px;
}

.navbar a, .navbar button {
    color: white;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.navbar button {
    color: red;
}
</style>
