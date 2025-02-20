<template>
    <div class="login-container">
        <h2>Login</h2>
        <input v-model="userId" type="number" placeholder="Enter your User ID" />
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
        const userId = ref("");
        const errorMessage = ref("");

        const login = async () => {
            const success = await store.dispatch("login", userId.value);
            if (success) {
                router.push("/messages");
            } else {
                errorMessage.value = "Invalid login. Try again.";
            }
        };

        return { userId, login, errorMessage };
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
