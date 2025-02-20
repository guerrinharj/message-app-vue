<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { NavBar },
  setup() {
    const route = useRoute();
    
    // Hide navbar on login page
    const showNavbar = computed(() => route.path !== "/");

    return { showNavbar };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
