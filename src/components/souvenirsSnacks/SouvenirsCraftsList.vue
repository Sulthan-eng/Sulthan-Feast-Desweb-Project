<script setup>
import { souvenirs } from "@/data/souvenir";
import SouvenirsCraftsCard from "./SouvenirsCraftsCard.vue";
</script>

<template>
  <section class="pt-15 pb-20 text-white">
    <h1 class="text-center md:text-5xl">Souvenirs & Crafts</h1>
    <p
      class="mx-auto mt-5 max-w-4xl px-6 text-center leading-relaxed font-medium text-gray-300"
    >
      Koleksi kami yang membawa sentuhan seni Timur Tengah
    </p>

    <div
      class="mt-10 grid grid-cols-1 justify-items-center gap-16 px-6 md:mt-15 md:gap-8 lg:grid-cols-2 lg:px-20"
    >
      <SouvenirsCraftsCard
        v-for="sou in souvenirs"
        :key="sou.id"
        :souvenirs="sou"
      />
    </div>
  </section>
</template>
