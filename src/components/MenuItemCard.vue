<script setup lang="ts">
defineProps<{
  item: {
    id: string,
    name: string,
    description?: string,
    price: string,
    image: string
  }
}>()
</script>

<template>
    <div class="flex flex-col sm:flex-row bg-zinc-900 p-3 rounded-lg gap-4 shadow-md border border-zinc-800">
        <div class="w-28 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-md">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover rounded-md"/>
        </div>

        <div class="flex flex-col grow justify-between min-h-24">
            <h3 class="text-md md:text-lg text-gray-200 font-bold font-serif mb-1 ">{{ item.name }}</h3>
            <p v-if="item.description" class="text-gray-200 text-xs md:text-sm leading-snug line-clamp-3">{{ item.description }}</p>
            <p v-if="item.price" class="text-gray-200 font-semibold text-sm md:text-md mt-2">{{ item.price }}</p>
        </div>
    </div>
</template> 

<style scoped>
</style>