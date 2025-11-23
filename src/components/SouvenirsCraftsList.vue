<script setup>
import { souvenirs } from '@/data/souvenir';
import SouvenirsCraftsCard from './SouvenirsCraftsCard.vue';
</script>

<template>
    <section class="bg-zinc-900 text-white pt-15 pb-20">
        <h1 class="font-['Cinzel_Decorative'] text-center text-3xl md:text-5xl font-semibold text-yellow-500">Souvenirs & Crafts</h1>
        <p class="max-w-4xl mx-auto font-medium text-center text-gray-300 mt-5 leading-relaxed px-6">Koleksi kami yang membawa sentuhan seni Timur Tengah</p>

        <div class="mt-10 md:mt-15 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16 md:gap-8 px-6 lg:px-20">
            <SouvenirsCraftsCard
                v-for="sou in souvenirs"
                :key="sou.id"   
                :souvenirs="sou" 
            />
        </div>
    </section>
</template>