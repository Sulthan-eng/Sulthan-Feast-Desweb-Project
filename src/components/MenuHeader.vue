<script setup>
const emit = defineEmits(["search"]);

const handleInput = (e) => {
  emit("search", e.target.value);
};
</script>

<template>
  <div
    class="mx-2 flex flex-col items-center justify-between pt-15 pb-10"
  >
    <h1
      class="text-center md:text-5xl"
    >
      Our Menu
    </h1>
    <p class="sm:text-md pt-6 text-center font-medium text-white md:text-lg">
      Menyajikan menu makanan serta minuman yang dibuat dengan bahan-bahan asli
      langsung dari Timur Tengah sehingga memiliki rasa yang khas.
    </p>

    <div class="mt-8 flex w-full justify-center">
      <div class="relative w-full max-w-2xl">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
        >
          <svg
            class="h-5 w-5 text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="text"
          class="block w-full rounded-full border-none bg-white p-3 pl-12 text-sm font-medium text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
          placeholder="Cari Menu"
          @input="handleInput"
        />
      </div>
    </div>
  </div>
</template>
