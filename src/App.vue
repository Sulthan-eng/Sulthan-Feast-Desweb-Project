<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import {RouterView} from "vue-router"; //nampilkan halaman
</script>

<template>
  <Navbar />

  <main>
    <RouterView />
  </main>

  <Footer />

<!--  <nav class="bg-black  p-5 text-white flex justify-center space-x-5">-->
<!--    <router-link to="/" class="hover:text-yellow-300">Home</router-link>-->
<!--    <router-link to="/menu" class="hover:text-yellow-300">Menu</router-link>-->
<!--    <router-link to="/room" class="hover:text-yellow-300">Room</router-link>-->
<!--    <router-link to="/souvenirs" class="hover:text-yellow-300">Souvenirs</router-link>-->
<!--    <router-link to="/about" class="hover:text-yellow-300">About Us</router-link>-->
<!--    <router-link to="/reservation" class="hover:text-yellow-300">Reservation</router-link>-->
<!--  </nav>-->

<!--  <router-view></router-view>-->
</template>

<style scoped>

</style>
