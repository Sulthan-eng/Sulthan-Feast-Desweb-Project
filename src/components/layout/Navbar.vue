<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <nav
    class="border-default sticky start-0 top-0 z-20 w-full border-b bg-black text-white"
  >
    <div
      class="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-5"
    >
      <RouterLink to="/">
        <img
          src="/Full_Logo_Sulthan_Feast.svg"
          class="h-18"
          alt="Sulthan Feast Logo"
        />
      </RouterLink>

      <!--    area hamburger-->
      <button
        @click="isMenuOpen = !isMenuOpen"
        type="button"
        class="text-body-base hover:bg-neutral-secondary-soft hover:text-heading focus:ring-neutral-tertiary inline-flex h-10 w-10 items-center justify-center p-2 text-sm focus:ring-2 focus:outline-none lg:hidden"
        :aria-expanded="isMenuOpen"
      >
        <span class="sr-only">Open main menu</span>

        <!-- ikon x -->
        <svg
          :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
          class="h-6 w-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <!-- hamburger -->
        <svg
          :class="{ block: !isMenuOpen, hidden: isMenuOpen }"
          class="h-6 w-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>

      <Transition
        enter-active-class="transition-opacity duration-400"
        enter-from-class="opacity-0"
        enter-to-class="opacity-200"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isMenuOpen" class="pt-5 w-full lg:block lg:w-auto">
          <ul
            class="lg:bg-neutral-primary flex flex-col bg-black font-medium lg:mt-0 lg:flex-row lg:space-x-12 lg:border-0 lg:p-0 rtl:space-x-reverse"
          >
            <li>
              <RouterLink
                to="/"
                active-class="text-yellow-500"
                class="block px-3 py-2 text-white hover:text-yellow-300 lg:bg-transparent lg:p-0"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/menu"
                active-class="text-yellow-500"
                class="block px-3 py-2 text-white hover:text-yellow-300 lg:bg-transparent lg:p-0"
                >Menu</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/room"
                active-class="text-yellow-500"
                class="block px-3 py-2 text-white hover:text-yellow-300 lg:bg-transparent lg:p-0"
                >Room</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/souvenirs"
                active-class="text-yellow-500"
                class="block px-3 py-2 text-white hover:text-yellow-300 lg:bg-transparent lg:p-0"
                >Souvenirs & Gifts</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                active-class="text-yellow-500"
                class="block px-3 py-2 text-white hover:text-yellow-300 lg:bg-transparent lg:p-0"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/reservation"
                active-class="text-yellow-500"
                class="block px-3 py-2 text-white hover:text-yellow-300 lg:bg-transparent lg:p-0"
                >Reservation</RouterLink
              >
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped></style>
