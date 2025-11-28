<script setup>
import { Update } from 'vite';

const props = defineProps({
    activeTab: String,
})

const emit = defineEmits(["update:activeTab"])
const tabs = [
   {value: "Appertizer", id: "appertizer"},
   {value: "Main Couser", id: "maincourse"},
   {value: "Side Dish", id: "sidedish"},
   {value: "Beverage", id: "beverage"},
   {value: "Dessert", id: "dessert"},
]
</script>

<template>
    <div class="flex gap-3 justify-center mt-6">
        <button v-for="tab in tabs" :key="tab.value" @click="$emit('update:activeTab', tab.value)"
            class="px-4 py-2 rounded-lg border" :class="activeTab === tab.id ? 'bg-yellow-500 text-gray-200 font-semibold' : 'bg-black text-gray-200 font-semibold'">
            {{ tab.value }}
        </button>
    </div>
</template>