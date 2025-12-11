<script setup>
defineProps({
  cv: Object,
});
</script>

<template>
   <div
    class="flex h-auto w-80 flex-col items-center overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
  >
    <img
      :src="cv.image"
      :alt="cv.name"
      class="h-56 w-full object-cover"
    />

    <div class="w-full p-4 text-center">
      <h3 class="mt-3 text-xl font-semibold text-black">
        {{ cv.name }}
      </h3>

      <p class="text-lg font-medium text-gray-800">
        {{ cv.descriptions }}
      </p>
    </div>
  </div>
</template>