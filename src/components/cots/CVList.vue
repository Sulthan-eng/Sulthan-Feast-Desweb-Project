<script>
import CVCard from './CVCard.vue';
import { cv } from '@/data/cv'

</script>
<template>
    <section class="pt-15 pb-20 text-white">
    <div class="mt-10 grid grid-cols-1 justify-items-center gap-16 px-6 md:mt-15 md:gap-8 md:grid-grid-cols-2 lg:grid-cols-3 lg:px-20"
    >
      <CVCard
        v-for="c in cv" :key="c.id" :cv="c" 
      />
    </div>
  </section>
</template>