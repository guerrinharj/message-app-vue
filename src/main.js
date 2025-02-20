import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router); // ✅ Ensure Vue Router is used
app.use(store);
app.mount("#app");

console.log("Vue app is mounted!");
