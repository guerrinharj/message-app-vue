<template>
    <div class="messages-container">
        <h2>Your Messages</h2>
        <ul>
            <li v-for="message in messages" :key="message.id" class="message-block">
                <p><strong>To: {{ message.receiver }}</strong></p>
                <p class="message-content">{{ message.content }}</p>
                <div v-if="message.files.length" class="files-container">
                    <a v-for="file in message.files" :key="file" :href="file" target="_blank">📎 View File</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export default {
    setup() {
        const store = useStore();
        const messages = ref([]);

        const fetchMessages = async () => {
            messages.value = await store.dispatch("fetchMessages");
        };

        onMounted(fetchMessages);

        return { messages };
    }
};
</script>

<style scoped>
.messages-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 20px;
}

h2 {
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
    width: 60%;
}

.message-block {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.message-content {
    font-size: 16px;
    color: #333;
    margin: 10px 0;
}

.files-container {
    margin-top: 10px;
}

.files-container a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    margin-right: 10px;
}
</style>
