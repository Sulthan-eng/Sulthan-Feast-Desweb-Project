<script setup>
const emit = defineEmits(['search'])

const handleInput = (e) => {
    emit('search', e.target.value);
}
</script>

<template>
    <div class="bg-zinc-900 flex flex-col items-center justify-between pt-15 pb-20">
        <h1 class="font-['Cinzel_Decorative'] text-center font-semibold text-3xl md:text-5xl text-yellow-500">Our Menu</h1>
        <p class="pt-6 sm:text-md md:text-lg font-medium text-white text-center">
            Menyajikan menu makanan serta minuman yang dibuat dengan bahan-bahan asli langsung dari Timur Tengah sehingga memiliki rasa yang khas.
        </p>

        <div class="mt-8 w-full flex justify-center">
            <div class="relative w-full max-w-md">
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>

                <input 
                    type="text"
                    class="block w-full p-3 pl-12 text-sm text-gray-900 bg-white rounded-full border-none focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder-gray-700 font-medium"
                    placeholder="Cari Menu"
                    @input="handleInput"
                >
            </div>
        </div>
    </div>
</template>