<script setup>
import { room } from "@/data/room";
import RoomDisplayCard from "@/components/RoomDisplayCard.vue";
</script>

<template>
  <section class="bg-zinc-900 text-white pt-32 pb-20">

    <h1 class="font-['Cinzel_Decorative'] text-center text-3xl md:text-5xl font-semibold text-yellow-500">
      OUR ROOM
    </h1>

    <p class="max-w-4xl font-medium mx-auto mt-5 text-gray-300 text-center leading-relaxed px-6">
      Selain tempat duduk reguler, Sulthan Feast juga memiliki ruangan bernuansa
      Timur Tengah yang memanjakan mata sehingga anda bisa bercengkrama
      dengan keluarga, sahabat, serta rekan kerja anda.
    </p>

    <div class="mt-20 space-y-24">
      <RoomDisplayCard
        v-for="(r, index) in room"
        :key="r.id"
        :room="r"
        :index="index"
      />
    </div>

  </section>
</template>
