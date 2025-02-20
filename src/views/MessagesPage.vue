<template>
    <div>
        <div class="messages-container">
            <h2>Your Messages</h2>
            <ul>
                <li v-for="message in messages" :key="message.id">
                    To <strong>{{ message.receiver }}</strong>: {{ message.content }}
                    <div v-if="message.files.length">
                        <a v-for="file in message.files" :key="file" :href="file" target="_blank">View File</a>
                    </div>
                </li>
            </ul>
        </div>
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
