<script setup>
defineProps({
  room: Object,
  index: Number,
});
</script>

<template>
  <div
    class="flex flex-row items-center px-4 md:px-24"
    :class="index % 2 === 1 ? 'flex-row-reverse' : ''"
  >
    <img
      :src="room.image"
      :alt="room.name"
      class="w-1/2 rounded-md object-cover"
    />

    <div
      class="w-1/2"
      :class="index % 2 === 1 ? 'pr-4 text-left md:pr-10' : 'pl-4 md:pl-10'"
    >
      <h2 class="text-sm font-bold text-yellow-500 md:text-xl">
        {{ room.name }}
      </h2>

      <p
        class="mt-2 text-xs leading-relaxed text-gray-300 md:mt-3 md:text-base"
      >
        {{ room.description }}
      </p>
    </div>
  </div>
</template>
