<script setup>
const props = defineProps({
    items: Object
})
</script>

<template>
    <div class="bg-zinc-900 rounded-lg p-4 shadow-md">
    <img :src="item.image" :alt="item.name" />
    <h3 class="text-lg text-gray-200 font-semibold">{{ item.name }}</h3>
    <p v-if="item.description" class="text-gray-200 text-sm mt-1">{{ item.description }}</p>
    <p v-if="item.price" class="text-gray-200 text-sm mt-2">{{ item.price }}</p>
    </div>
</template>

<style scoped>
</style>