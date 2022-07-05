<template>
  <app-navbar />
  <router-view></router-view>
</template>

<script>
import AppNavbar from "./components/Navbar.vue";

export default {
  components: { AppNavbar }
}
</script>
