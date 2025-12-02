<script setup>
import heroImg from "@/assets/images/heroSection/hero_foto.jpg";
</script>

<template>
<div :style="{backgroundImage: `url(${heroImg})`}"  class="relative bg-cover bg-center min-h-screen">
  <div class="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>    
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-2xl py-24 sm:py-32 lg:py-48">
      <div class="text-center">
        <h1 class="text-4xl font-semibold text-balance text-white sm:text-5xl lg:text-7xl">Welcome to Sulthan Feast!</h1>
        <p class="mt-8 text-lg font-medium text-justify text-white sm:text-xl/8">Nikmati cita rasa autentik Timur Tengah di Sulthan Feast, tempat di mana kelezatan rempah dan aroma khas berpadu dalam setiap sajian. Rasakan nuansa hangat, nikmati hidangan istimewa, dan biarkan setiap gigitan membawa Anda ke jantung budaya Timur Tengah.</p>
        <div class="mt-10 flex flex-row gap-x-6 sm:gap-x-30 justify-center ">
          <Router-link to="/menu" class="rounded-md bg-yellow-500 px-4.5 py-3 text-sm font-semibold text-black shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">Lihat Menu</Router-link>
          <Router-link to="/reservation" class="rounded-md bg-yellow-500 px-4.5 py-3 text-sm font-semibold text-black shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">Reservasi Sekarang</Router-link>
        </div>
        <h2 class="mt-12 text-2xl sm:mt-20 font-semibold tracking-tight text-white sm:text-3xl">Jam Operasional</h2>
        <p class="mt-3 text-lg font-medium text-center text-white sm:text-xl/8">Reservasi : 10.00 - 21.30  WITA</p>
        <p class="text-lg font-medium text-center text-white sm:text-xl/8">Dine In / Take Away : 10.00 - 22.00 WITA</p>
      </div>
    </div>
  </div>
</div>    
</template>

<style scoped>

</style>