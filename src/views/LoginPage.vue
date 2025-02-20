<template>
    <div class="login-container">
        <h2>Login</h2>
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const username = ref("");
        const password = ref("");
        const errorMessage = ref("");

        const login = async () => {
            const success = await store.dispatch("login", {
                username: username.value,
                password: password.value
            });

            if (success) {
                router.push("/messages");
            } else {
                errorMessage.value = "Invalid credentials. Try again.";
            }
        };

        return { username, password, login, errorMessage };
    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
input, button {
    margin-top: 10px;
}
.error {
    color: red;
}
</style>
