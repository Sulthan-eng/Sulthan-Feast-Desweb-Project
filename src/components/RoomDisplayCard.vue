<script setup>
defineProps({
  room: Object,
  index: Number
});
</script>

<template>
  <div class="flex flex-row items-center px-4 md:px-24" :class="index % 2 === 1 ? 'flex-row-reverse' : ''">
    
    <img :src="room.image" :alt="room.name" class="w-1/2 rounded-md shadow-lg object-cover"/>

    <div class="w-1/2" :class="index % 2 === 1 ? 'text-left pr-4 md:pr-10' : 'pl-4 md:pl-10'">
      <h2 class="text-sm md:text-xl font-bold text-yellow-500">
        {{ room.name }}
      </h2>

      <p class="text-xs md:text-base text-gray-300 mt-2 md:mt-3 leading-relaxed">
        {{ room.description }}
      </p>
    </div>
  </div>
</template>