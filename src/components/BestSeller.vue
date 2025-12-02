<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="bg-zinc-900 text-white py-16 sm:py-24">
    <div class="container mx-auto px-4">

      <div class="text-center">
        <h2 class="font-['Cinzel_Decorative'] text-3xl md:text-4xl font-bold text-yellow-500">
          BEST SELLER
        </h2>
        <p class="text-gray-200 mt-5 mb-12 md:mb-16 text-lg">
          Menu yang paling banyak disukai
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-48">
        
        <div class="flex flex-col items-center text-center">
          <img src="@/assets/images/menu/maincourse-sidedish/briyani_domba.png" alt="Nasi Briyani Domba" class="w-full max-w-md rounded-lg shadow-lg aspect-square object-cover">
          <h3 class="text-xl font-normal mt-5">Nasi Briyani Domba</h3>
        </div>

        <div class="flex flex-col items-center text-center">
          <img src="@/assets/images/menu/maincourse-sidedish/kebuli_ayam.jpg" alt="Nasi Kebuli Ayam" class="w-full max-w-md rounded-lg shadow-lg aspect-square object-cover">
          <h3 class="text-xl font-normal mt-5">Nasi Kebuli Ayam</h3>
        </div>

        <div class="flex flex-col items-center text-center">
          <img src="@/assets/images/menu/appertizer-dessert/kebab.jpg" alt="Kebab" class="w-full max-w-md rounded-lg shadow-lg aspect-square object-cover">
          <h3 class="text-xl font-normal mt-5">Kebab</h3>
        </div>

        <div class="flex flex-col items-center text-center">
          <img src="@/assets/images/menu/beverage/karak_tea.jpeg" alt="Karak Tea" class="w-full max-w-md rounded-lg shadow-lg aspect-square object-cover">
          <h3 class="text-xl font-normal mt-5">Karak Tea</h3>
        </div>
      </div>

      <div class="text-center mt-16 md:mt-20">
        <router-link to="/menu" class="bg-yellow-500 text-gray-900 font-bold py-3 px-10 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300">
          Lihat Menu
        </router-link>
      </div>

    </div>
  </section>
</template>

<style>
</style>