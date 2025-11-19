<script setup>
defineProps({
  room: Object,
  index: Number
});
</script>

<template>
  <div class="flex flex-col md:flex-row items-center md:items-center px-8 md:px-24" :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''">
    <img :src="room.image" :alt="room.name" class="w-full md:w-1/2 rounded-md shadow-lg object-cover"/>

    <div class="mt-6 md:mt-0 md:w-1/2" :class="index % 2 === 1 ? 'md:text-left md:pr-10' : 'md:pl-10'">
      <h2 class="text-xl font-bold text-yellow-500">
        {{ room.name }}
      </h2>

      <p class="text-gray-300 mt-3 font-medium leading-relaxed">
        {{ room.description }}
      </p>
    </div>
  </div>
</template>
