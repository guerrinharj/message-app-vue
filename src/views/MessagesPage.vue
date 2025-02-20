<template>
    <div>
        <NavBar />
        <div class="messages-container">
            <h2>Your Messages</h2>
            <ul>
                <li v-for="message in messages" :key="message.id">
                    <strong>{{ message.sender_id }}</strong>: {{ message.content }}
                    <div v-if="message.files.length">
                        <a v-for="file in message.files" :key="file" :href="file" target="_blank">View File</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // ✅ Correct Import
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export default {
    components: { NavBar }, // ✅ Register Component
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
