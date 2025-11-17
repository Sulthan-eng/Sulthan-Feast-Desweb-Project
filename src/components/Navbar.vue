<script setup lang="ts">
import {RouterLink} from "vue-router";
import {ref} from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-black text-white fixed w-full z-20 top-0 start-0 border-b border-default">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
      <RouterLink to="/">
        <img src="/Full_Logo_Sulthan_Feast.svg" class="h-18" alt="Sulthan Feast Logo" />
      </RouterLink>

<!--    area hamburger-->
      <button @click="isMenuOpen = !isMenuOpen" type="button" 
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body-base lg:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" :aria-expanded="isMenuOpen">
        <span class="sr-only">Open main menu</span>

        <!-- ikon x -->
        <svg :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        <!-- hamburger -->
        <svg :class="{'block': !isMenuOpen, 'hidden': isMenuOpen}" class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
      </button>


      <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full lg:block lg:w-auto">
        <ul class="font-medium flex flex-col lg:p-0 bg-black lg:flex-row lg:space-x-12 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-neutral-primary">
          <li>
            <RouterLink to="/" active-class="text-yellow-500" class="block py-2 px-3 text-white lg:bg-transparent lg:p-0 hover:text-yellow-300">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/menu" active-class="text-yellow-500" class="block py-2 px-3 text-white lg:bg-transparent lg:p-0 hover:text-yellow-300">Menu</RouterLink>
          </li>
          <li>
            <RouterLink to="/room" active-class="text-yellow-500" class="block py-2 px-3 text-white lg:bg-transparent lg:p-0 hover:text-yellow-300">Room</RouterLink>
          </li>
          <li>
            <RouterLink to="/souvenirs"active-class="text-yellow-500" class="block py-2 px-3 text-white lg:bg-transparent lg:p-0 hover:text-yellow-300">Souvenirs & Gifts</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" active-class="text-yellow-500" class="block py-2 px-3 text-white lg:bg-transparent lg:p-0 hover:text-yellow-300">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/reservation" active-class="text-yellow-500" class="block py-2 px-3 text-white lg:bg-transparent lg:p-0 hover:text-yellow-300">Reservation</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>