<template>
    <div>
        <NavBar />
        <div class="create-message-container">
            <h2>Send a Message</h2>
            <input v-model="receiverId" type="number" placeholder="Receiver ID" />
            <textarea v-model="content" placeholder="Enter your message"></textarea>
            <input type="file" multiple @change="handleFileUpload" />
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // ✅ Import properly
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
    components: { NavBar }, // ✅ Register NavBar correctly
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
