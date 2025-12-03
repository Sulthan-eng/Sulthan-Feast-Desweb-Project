<script setup>
import { snacks } from "@/data/souvenir";
import SnacksDisplayCard from "./SnacksDisplayCard.vue";
</script>

<template>
  <section class="pt-15 pb-20 text-white">
    <h1
      class="text-center md:text-5xl"
    >
      Snacks
    </h1>
    <p
      class="mx-auto mt-5 max-w-4xl px-6 text-center leading-relaxed font-medium text-gray-300"
    >
      Nikmati Kelezatan Tradisi di genggaman anda
    </p>

    <div
      class="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-16 md:gap-8 mt-10 md:mt-15 px-6 lg:px-20"
    >
      <SnacksDisplayCard v-for="s in snacks" :key="s.id" :snacks="s" />
    </div>
  </section>
</template>
