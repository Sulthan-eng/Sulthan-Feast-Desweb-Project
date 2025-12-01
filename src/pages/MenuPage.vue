<script setup lang="ts"> 
import { ref } from "vue";
import MenuHeader from "@/components/MenuHeader.vue";
import MenuTab from "@/components/MenuTab.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const searchKeyword = ref('')

const handleSearch = (keyword) => {
  searchKeyword.value = keyword;
}
</script>

<template>
  <Navbar/>
  <MenuHeader @search="handleSearch"/>
  <MenuTab :searchQuery="searchKeyword"/>
  <Footer/>
</template>

<style scoped>

</style>