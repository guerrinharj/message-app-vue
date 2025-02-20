<template>
    <div class="create-message-container">
        <h2>Send a Message</h2>
        <div class="form-container">
            <input v-model="receiverId" type="number" placeholder="Receiver ID" class="input-field" />
            <textarea v-model="content" placeholder="Enter your message" class="textarea-field"></textarea>
            <input type="file" multiple @change="handleFileUpload" class="file-input" />
            <button @click="sendMessage" class="send-button">Send</button>
        </div>
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
        const receiverId = ref("");
        const content = ref("");
        let files = [];

        const handleFileUpload = (event) => {
            files = event.target.files;
        };

        const sendMessage = async () => {
            const success = await store.dispatch("sendMessage", {
                receiverId: receiverId.value,
                content: content.value,
                files
            });
            if (success) {
                router.push("/messages");
            } else {
                alert("Message sending failed.");
            }
        };

        return { receiverId, content, handleFileUpload, sendMessage };
    }
};
</script>

<style scoped>
.create-message-container {
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

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input-field, 
.textarea-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.textarea-field {
    height: 100px;
    resize: none;
}

.file-input {
    margin-top: 10px;
    margin-bottom: 10px;
}

.send-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.send-button:hover {
    background: #0056b3;
}
</style>
