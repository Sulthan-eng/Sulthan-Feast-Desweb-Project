<script setup>
defineProps({
    snacks: Object
})

</script>

<template>
    <div class="flex flex-col items-center bg-white w-80 h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img :src="snacks.image" :alt="snacks.name" class="h-56 w-full object-cover"/>
        
        <div class="p-3 w-full text-center">
            <h3 class="mt-3 text-xl font-semibold text-black">
                {{ snacks.name }}
            </h3>

            <p class="text-lg font-medium text-gray-800">
                {{ snacks.price }}
            </p>
        </div>
    </div>
</template>