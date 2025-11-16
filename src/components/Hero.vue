<script setup lang>
import heroImg from "@/assets/images/heroSection/hero_foto.jpg";
</script>

<template>
<div :style="{backgroundImage: `url(${heroImg})`}"  class="relative bg-cover bg-center h-screen">
  <div class="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>    
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-65">
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-normal text-balance text-white sm:text-7xl">Welcome to Sulthan Feast!</h1>
        <p class="mt-8 text-lg font-medium text-justify text-white sm:text-xl/8">Nikmati cita rasa autentik Timur Tengah di Sulthan Feast, tempat di mana kelezatan rempah dan aroma khas berpadu dalam setiap sajian. Rasakan nuansa hangat, nikmati hidangan istimewa, dan biarkan setiap gigitan membawa Anda ke jantung budaya Timur Tengah.</p>
        <div class="mt-10 flex items-center justify-center gap-x-24">
          <Router-link to="/menu" class="rounded-md bg-yellow-500 px-4.5 py-3 text-sm font-semibold text-black shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">Lihat Menu</Router-link>
          <Router-link to="/reservation" class="rounded-md bg-yellow-500 px-4.5 py-3 text-sm font-semibold text-black shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">Reservasi Sekarang</Router-link>
        </div>
        <h2 class="mt-16 text-3xl font-semibold tracking-tight text-balance text-white sm:text-2xl">Jam Operasional</h2>
        <p class="mt-5 text-lg font-medium text-center text-white sm:text-xl/8">Reservasi : 10.00 - 21.30  WITA</p>
        <p class="text-lg font-medium text-center text-white sm:text-xl/8">Dine In / Take Away : 10.00 - 22.00 WITA</p>
      </div>
    </div>
    <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
    </div>
  </div>
</div>    

</template>

<style scoped>

</style>