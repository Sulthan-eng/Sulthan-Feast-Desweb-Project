<script setup>
import { ref, computed } from "vue";
import MenuItemCard from "./MenuItemCard.vue";

import { appetizerMenu } from "@/data/menu";
import { mainCourseMenu } from "@/data/menu";
import { sideDishMenu } from "@/data/menu";
import { beverageMenu } from "@/data/menu";
import { dessertMenu } from "@/data/menu";
import { categoryInfo } from "@/data/menu";

const props = defineProps({
  searchQuery: String,
});

const emit = defineEmits(["update:searchQuery"]);

const activeTab = ref("appetizer");

const tabs = [
  { value: "Appetizer", id: "appetizer" },
  { value: "Main Course", id: "maincourse" },
  { value: "Side Dish", id: "sidedish" },
  { value: "Beverage", id: "beverage" },
  { value: "Dessert", id: "dessert" },
];

const getAllMenus = () => {
  let allItems = [];

  //menu g grup
  if (appetizerMenu) allItems.push(...appetizerMenu);
  if (sideDishMenu) allItems.push(...sideDishMenu);
  if (dessertMenu) allItems.push(...dessertMenu);

  //menu grup
  if (mainCourseMenu) {
    mainCourseMenu.forEach((group) => {
      if (group.items) allItems.push(...group.items);
    });
  }
  if (beverageMenu) {
    beverageMenu.forEach((group) => {
      if (group.items) allItems.push(...group.items);
    });
  }

  return allItems;
};

// logika pemilih data
const currentMenuData = computed(() => {
  //ada search query tab aktif diabaikan
  if (props.searchQuery && props.searchQuery.trim() !== "") {
    const keyword = props.searchQuery.toLowerCase();
    const allItems = getAllMenus();

    //filter item berdasarkan nama
    return allItems.filter((item) => item.name.toLowerCase().includes(keyword));
  }

  switch (activeTab.value) {
    case "appetizer":
      return appetizerMenu;
    case "maincourse":
      return mainCourseMenu;
    case "sidedish":
      return sideDishMenu;
    case "beverage":
      return beverageMenu;
    case "dessert":
      return dessertMenu;
    default:
      return [];
  }
});

//logika cek nested
const isNested = computed(() => {
  const data = currentMenuData.value;
  return data && data.length > 0 && data[0].items !== undefined;
});

const currentCategoryInfo = computed(() => {
  return categoryInfo[activeTab.value];
});
</script>

<template>
  <div class="container mx-auto mb-20 bg-zinc-900">
    <div
      class="mt-5 mb-10 flex w-full flex-nowrap justify-start gap-2 overflow-x-auto p-4 md:justify-center md:gap-3"
    >
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="
          activeTab = tab.id;
          $emit('update:searchQuery', '');
        "
        class="shrink-0 cursor-pointer rounded-xl border font-semibold tracking-wide whitespace-nowrap transition-all duration-150"
        :class="[
          'px-4 py-2 text-xs md:px-8 md:py-4 md:text-base',

          activeTab === tab.id && !searchQuery
            ? 'border-amber-500 bg-amber-500 text-gray-50 shadow-lg shadow-amber-500/35'
            : 'border-amber-400 bg-black text-gray-200 hover:border-amber-600 hover:text-amber-500',
        ]"
      >
        {{ tab.value }}
      </button>
    </div>

    <div v-if="!searchQuery && currentCategoryInfo" class="text-center">
      <h1
        class="mb-5 font-['Cinzel_Decorative'] text-3xl font-semibold tracking-wide text-white md:text-4xl"
      >
        {{ currentCategoryInfo.title }}
      </h1>

      <p
        class="mx-auto mb-10 px-2 text-sm leading-relaxed text-gray-200 md:text-base"
      >
        {{ currentCategoryInfo.description }}
      </p>
    </div>

    <div class="min-h-[300px]">
      <div
        v-if="currentMenuData.length === 0"
        class="py-10 text-center font-semibold text-gray-400"
      >
        Menu tidak tersedia.
      </div>

      <div v-else-if="isNested" class="flex flex-col gap-16">
        <div v-for="(group, index) in currentMenuData" :key="index">
          <div class="mx-2 mb-6 font-serif font-bold text-yellow-500">
            <h2 class="text-2xl">
              {{ group.groupName }}
            </h2>
            <p
              v-if="group.groupDesc"
              class="text-md mt-1.5 max-w-2xl text-gray-300"
            >
              {{ group.groupDesc }}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
            <MenuItemCard
              v-for="item in group.items"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
        <MenuItemCard
          v-for="item in currentMenuData"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
