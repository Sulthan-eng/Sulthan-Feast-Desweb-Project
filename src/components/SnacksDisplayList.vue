<script setup>
import { snacks } from '@/data/souvenir';
import SnacksDisplayCard from './SnacksDisplayCard.vue';
</script>

<template>
    <section class="bg-zinc-900 text-white pt-15 pb-20">
        <h1 class="font-['Cinzel_Decorative'] text-center text-3xl md:text-5xl font-semibold text-yellow-500 ">Snacks</h1>
        <p class="max-w-4xl mx-auto font-medium text-center text-gray-300 mt-5 leading-relaxed px-6">Nikmati Kelezatan Tradisi di genggaman anda</p>

        <div class="mt-10 md:mt-15 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-16 md:gap-8 px-6 lg:px-20">
            <SnacksDisplayCard
                v-for="s in snacks"
                :key="s.id"
                :snacks="s"
            />
        </div>
    </section>
</template>