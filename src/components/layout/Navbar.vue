<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <div>
      <RouterLink to="/">
        <img src="/Full Logo Sulthan Feast.png" alt="Sulthan Feast Logo" class="h-10 w-auto" />
      </RouterLink>
    </div>

    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/menu">Menu</RouterLink></li>
      <li><RouterLink to="/room">Room</RouterLink></li>
      <li><RouterLink to="/souvenirs">Sourvenirs&Gifts</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/reservation">Reservation</RouterLink></li>
    </ul>

    <button>
      <span>☰</span>
    </button>
  </nav>
</template>

<style scoped>

</style>