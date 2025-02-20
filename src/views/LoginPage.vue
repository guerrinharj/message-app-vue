<template>
    <div class="login-container">
        <h2>Login</h2>
        <input v-model="userIdentifier" type="text" placeholder="Username or User ID" />
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
        const userIdentifier = ref("");
        const password = ref("");
        const errorMessage = ref("");

        const login = async () => {
            const isNumeric = !isNaN(userIdentifier.value); // Check if input is a number

            const success = await store.dispatch("login", {
                username: isNumeric ? null : userIdentifier.value,
                user_id: isNumeric ? Number(userIdentifier.value) : null,
                password: password.value
            });

            if (success) {
                router.push("/messages");
            } else {
                errorMessage.value = "Invalid login. Try again.";
            }
        };

        return { userIdentifier, password, login, errorMessage };
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
