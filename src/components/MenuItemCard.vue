<script setup lang="ts">
// ini kepake di Best seller dan menu page
interface MenuItem {
  id: string;
  name: string;
  description?: string; // opsional
  image: string;
  price?: number; // Opsional
  category?: string; // Opsional
}

defineProps<{
  item: MenuItem
}>()


const formatCurrency = (value?: number) => {
  if (value === undefined || value === null) return '';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'RP',
    minimumFractionDigits: 0
  }).format(value);
};
</script>

<template>
    <div>
    <img :src="item.image" :alt="item.name" />
    <h3>{{ item.name }}</h3>
    <p v-if="item.description">{{ item.description }}</p>
    <p v-if="item.price">{{ formatCurrency(item.price) }}</p>
    </div>
</template>

<style scoped>
</style>