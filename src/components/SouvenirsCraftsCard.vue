<script setup>
defineProps({
    souvenirs: Object
})
</script>

<template>
    <div class="flex flex-col items-center bg-white w-80 h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img :src="souvenirs.image" :alt="souvenirs.name" class="h-56 w-full object-cover"/>

        <div class="p-4 w-full text-center">
            <h3 class="mt-3 text-xl font-semibold text-black">
                {{ souvenirs.name }}
            </h3>
            <p class="text-lg font-medium text-gray-800">
                {{ souvenirs.price }}
            </p>
        </div>
    </div>
</template>