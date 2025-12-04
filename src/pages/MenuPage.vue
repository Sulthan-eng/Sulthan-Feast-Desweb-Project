<script setup lang="ts">
import { ref } from "vue";
import MenuHeader from "@/components/menu/MenuHeader.vue";
import MenuTab from "@/components/menu/MenuTab.vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

const searchKeyword = ref("");

const handleSearch = (keyword) => {
  searchKeyword.value = keyword;
};
</script>

<template>
  <Navbar />
  <MenuHeader :searchQuery="searchKeyword" @update:searchQuery="searchKeyword = $event" />
  <MenuTab :searchQuery="searchKeyword" />
  <Footer />
</template>

<style scoped></style>
