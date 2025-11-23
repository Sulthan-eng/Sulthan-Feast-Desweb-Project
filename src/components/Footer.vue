<script setup>
</script>

<template>
  <footer class="px-4 py-8 bg-gray-950 text-white">
    <div class="container flex flex-col mx-auto space-y-8 md:flex-row md:justify-center md:space-y-0 md:space-x-24">

      <div class="flex flex-col items-start md:items-center space-y-2">
        <h3 class="text-xl font-semibold uppercase mb-2">Lokasi</h3>
        <p class="text-base text-left">
          Jl. Ruhui Rahayu No.36 <br>
          Gunung Bahagia, Balikpapan, <br>
          Kalimantan Timur
        </p>
      </div>

      <div class="flex flex-col items-start md:items-center space-y-2">
        <h3 class="text-xl font-semibold uppercase mb-2">Kontak</h3>
        <p class="text-base">Whatsapp : 0853-9141-9495</p>
        <p class="text-base">Telepon : 0542-7341-0908</p>
      </div>

      <div class="flex flex-col items-start md:items-center space-y-2">
        <h3 class="text-xl font-semibold uppercase mb-2">Media Sosial</h3>
        <div class="flex flex-col items-start md:items-center space-y-2 mt-2">
          
          <a href="https://www.instagram.com/farizanfawwaz" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors duration-200">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-xl w-6 text-center" />
            <span class="text-base">Instagram</span>
          </a>

          <a href="https://www.facebook.com/share/1BuNQJ2JTB/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors duration-200">
            <font-awesome-icon :icon="['fab', 'facebook']" class="text-xl w-6 text-center" />
            <span class="text-base">Facebook</span>
          </a>

        </div>
      </div>
    </div>

    <div class="mt-8 py-6 text-sm text-center text-gray-400 border-t border-gray-800">
      © 2025 Sulthan Feast. Hak Cipta Dilindungi.
    </div>
  </footer>
</template>

<style scoped>

</style>