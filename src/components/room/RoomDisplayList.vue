<script setup>
import { room } from "@/data/room";
import RoomDisplayCard from "@/components/room/RoomDisplayCard.vue";
</script>

<template>
  <section class="pt-15 pb-20 text-white">
    <h1
      class="text-center md:text-5xl"
    >
      OUR ROOM
    </h1>

    <p
      class="mx-auto mt-5 max-w-4xl px-6 text-center leading-relaxed font-medium text-gray-300"
    >
      Selain tempat duduk reguler, Sulthan Feast juga memiliki ruangan bernuansa
      Timur Tengah yang memanjakan mata sehingga anda bisa bercengkrama dengan
      keluarga, sahabat, serta rekan kerja anda.
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
