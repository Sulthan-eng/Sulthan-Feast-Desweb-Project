<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="py-16 text-white sm:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h1
          class="md:text-4xl"
        >
          BEST SELLER
        </h1>
        <p class="mt-5 mb-12 text-lg text-gray-200 md:mb-16">
          Menu yang paling banyak disukai
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-48">
        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/images/menu/maincourse-sidedish/briyani_domba.png"
            alt="Nasi Briyani Domba"
            class="aspect-square w-full max-w-md rounded-lg object-cover shadow-lg"
          />
          <h3 class="mt-5 text-xl font-normal">Nasi Briyani Domba</h3>
        </div>

        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/images/menu/maincourse-sidedish/kebuli_ayam.jpg"
            alt="Nasi Kebuli Ayam"
            class="aspect-square w-full max-w-md rounded-lg object-cover shadow-lg"
          />
          <h3 class="mt-5 text-xl font-normal">Nasi Kebuli Ayam</h3>
        </div>

        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/images/menu/appertizer-dessert/kebab.jpg"
            alt="Kebab"
            class="aspect-square w-full max-w-md rounded-lg object-cover shadow-lg"
          />
          <h3 class="mt-5 text-xl font-normal">Kebab</h3>
        </div>

        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/images/menu/beverage/karak_tea.jpeg"
            alt="Karak Tea"
            class="aspect-square w-full max-w-md rounded-lg object-cover shadow-lg"
          />
          <h3 class="mt-5 text-xl font-normal">Karak Tea</h3>
        </div>
      </div>

      <div class="mt-16 text-center md:mt-20">
        <router-link
          to="/menu"
          class="rounded-lg bg-yellow-500 px-10 py-3 text-lg font-bold text-gray-900 transition-colors duration-300 hover:bg-yellow-400"
        >
          Lihat Menu
        </router-link>
      </div>
    </div>
  </section>
</template>

<style></style>
