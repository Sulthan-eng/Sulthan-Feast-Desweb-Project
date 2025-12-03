<script setup>
import { ref, computed } from 'vue'
import MenuItemCard from './MenuItemCard.vue'

import { appetizerMenu } from '@/data/menu'
import { mainCourseMenu } from '@/data/menu'
import { sideDishMenu } from '@/data/menu'
import { beverageMenu } from '@/data/menu'
import { dessertMenu } from '@/data/menu'
import { categoryInfo } from '@/data/menu'


const props = defineProps({
    searchQuery: String
})

const emit = defineEmits(['update:searchQuery'])

const activeTab = ref('appetizer')

const tabs = [
   {value: "Appetizer", id: "appetizer"},
   {value: "Main Course", id: "maincourse"},
   {value: "Side Dish", id: "sidedish"},
   {value: "Beverage", id: "beverage"},
   {value: "Dessert", id: "dessert"},
]

const getAllMenus = () => {
    let allItems = [];

    //menu g grup
    if(appetizerMenu) allItems.push(...appetizerMenu);
    if(sideDishMenu) allItems.push(...sideDishMenu);
    if(dessertMenu) allItems.push(...dessertMenu);

    //menu grup
    if(mainCourseMenu){
        mainCourseMenu.forEach(group => {
            if(group.items) allItems.push(...group.items);
        });
    }
    if(beverageMenu){
        beverageMenu.forEach(group =>{
            if(group.items) allItems.push(...group.items);
        })
    }

    return allItems;
}

// logika pemilih data
const currentMenuData = computed(() => {
    //ada search query tab aktif diabaikan
    if(props.searchQuery && props.searchQuery.trim() !== ''){
        const keyword = props.searchQuery.toLowerCase();
        const allItems = getAllMenus();

        //filter item berdasarkan nama
        return allItems.filter(item => item.name.toLowerCase().includes(keyword));
    }

    switch (activeTab.value) {
        case 'appetizer': return appetizerMenu;
        case 'maincourse': return mainCourseMenu;
        case 'sidedish': return sideDishMenu;
        case 'beverage': return beverageMenu;
        case 'dessert': return dessertMenu;
        default : return[]; 
    } 
})

//logika cek nested
const isNested = computed (() => {
    const data = currentMenuData.value;
    return data && data.length > 0 && data[0].items !== undefined;
})

const currentCategoryInfo =  computed (() => {
    return categoryInfo[activeTab.value]
})
</script>

<template>
    <div class="bg-zinc-900 container mx-auto mb-20">
        <div class="flex gap-2 md:gap-3 overflow-x-auto w-full p-4 justify-start md:justify-center mt-5 mb-10 flex-nowrap">
            <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.id; $emit('update:searchQuery', '') "
                class="whitespace-nowrap shrink-0 rounded-xl border transition-all duration-150 cursor-pointer font-semibold tracking-wide" 
                :class="[
                    'text-xs px-4 py-2 md:text-base md:px-8 md:py-4',

                    activeTab === tab.id && !searchQuery 
                    ? 'bg-amber-500 text-gray-50 border-amber-500 shadow-lg shadow-amber-500/35' 
                    : 'bg-black text-gray-200 border-amber-400 hover:border-amber-600 hover:text-amber-500'
                    ]">
                {{ tab.value }}
            </button>
        </div>

        <div v-if="!searchQuery && currentCategoryInfo" class="text-center">
            <h1 class="font-['Cinzel_Decorative'] font-semibold text-3xl md:text-4xl text-white mb-5 tracking-wide">
                {{ currentCategoryInfo.title }}
            </h1>

            <p class="text-gray-200 text-sm md:text-base mb-10 leading-relaxed mx-auto px-2">
                {{ currentCategoryInfo.description }}
            </p>
        </div>

        <div class="min-h-[300px]"> 
            <div v-if="currentMenuData.length === 0" class="text-center text-gray-400 py-10 font-semibold">
                Menu tidak tersedia.
            </div>

            <div v-else-if="isNested" class="flex flex-col gap-16">
                <div v-for="(group, index) in currentMenuData" :key="index">
                    
                    <div class="mb-6 mx-2 font-serif font-bold text-yellow-500">
                        <h2 class="text-2xl">
                            {{ group.groupName }}
                        </h2>
                        <p v-if="group.groupDesc" class="text-gray-300 text-md mt-1.5 max-w-2xl" >
                            {{ group.groupDesc }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-8">
                        <MenuItemCard
                            v-for="item in group.items"
                            :key="item.id"
                            :item="item"  
                        />
                    </div>
                </div>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-8">
                <MenuItemCard 
                    v-for="item in currentMenuData" 
                    :key="item.id" 
                    :item="item" 
                />
            </div>
        </div>
    </div>
</template>