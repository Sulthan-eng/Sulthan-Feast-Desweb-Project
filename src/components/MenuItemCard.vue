<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="flex flex-col gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-3 shadow-md sm:flex-row"
  >
    <div class="h-24 w-28 shrink-0 overflow-hidden rounded-md md:h-32 md:w-32">
      <img
        :src="item.image"
        :alt="item.name"
        class="h-full w-full rounded-md object-cover"
      />
    </div>

    <div class="flex min-h-24 grow flex-col justify-between">
      <h3 class="text-md mb-1 font-serif font-bold text-gray-200 md:text-lg">
        {{ item.name }}
      </h3>
      <p
        v-if="item.description"
        class="line-clamp-3 text-xs leading-snug text-gray-200 md:text-sm"
      >
        {{ item.description }}
      </p>
      <p
        v-if="item.price"
        class="md:text-md mt-2 text-sm font-semibold text-gray-200"
      >
        {{ item.price }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
