<script setup>
defineProps({
    snacks: Object
})

</script>

<template>
    <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-mg">
        <img :src="snacks.image" :alt="snacks.name" class="w-40 h-40 object-cover rounded-md"/>

        <h3 class="mt-4 text-xl font-semibold text-black">
            {{ snacks.name }}
        </h3>
    </div>
</template>