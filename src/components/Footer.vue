<script setup></script>

<template>
  <footer class="bg-gray-950 px-4 py-8 text-white">
    <div
      class="container mx-auto flex flex-col space-y-8 md:flex-row md:justify-center md:space-y-0 md:space-x-24"
    >
      <div class="flex flex-col items-start space-y-2 md:items-center">
        <h3 class="mb-2 text-xl font-semibold uppercase">Lokasi</h3>
        <p class="text-left text-base">
          Jl. Ruhui Rahayu No.36 <br />
          Gunung Bahagia, Balikpapan, <br />
          Kalimantan Timur
        </p>
      </div>

      <div class="flex flex-col items-start space-y-2 md:items-center">
        <h3 class="mb-2 text-xl font-semibold uppercase">Kontak</h3>
        <p class="text-base">Whatsapp : 0853-9141-9495</p>
        <p class="text-base">Telepon : 0542-7341-0908</p>
      </div>

      <div class="flex flex-col items-start space-y-2 md:items-center">
        <h3 class="mb-2 text-xl font-semibold uppercase">Media Sosial</h3>
        <div class="mt-2 flex flex-col items-start space-y-2 md:items-center">
          <a
            href="https://www.instagram.com/farizanfawwaz"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-gray-300 transition-colors duration-200 hover:text-yellow-500"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="w-6 text-center text-xl"
            />
            <span class="text-base">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/share/1BuNQJ2JTB/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-gray-300 transition-colors duration-200 hover:text-yellow-500"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="w-6 text-center text-xl"
            />
            <span class="text-base">Facebook</span>
          </a>
        </div>
      </div>
    </div>

    <div
      class="mt-8 border-t border-gray-800 py-6 text-center text-sm text-gray-400"
    >
      © 2025 Sulthan Feast. Hak Cipta Dilindungi.
    </div>
  </footer>
</template>

<style scoped></style>
