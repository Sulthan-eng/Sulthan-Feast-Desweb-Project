<script setup>
defineProps({
  souvenirs: Object,
});
</script>

<template>
  <div
    class="flex h-auto w-80 flex-col items-center overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
  >
    <img
      :src="souvenirs.image"
      :alt="souvenirs.name"
      class="h-56 w-full object-cover"
    />

    <div class="w-full p-4 text-center">
      <h3 class="mt-3 text-xl font-semibold text-black">
        {{ souvenirs.name }}
      </h3>
      <p class="text-lg font-medium text-gray-800">
        {{ souvenirs.price }}
      </p>
    </div>
  </div>
</template>
