<template>
  <nav class="p-3 flex items-center justify-between ">
    <router-link :to="{name:'ProductListPage'}" class="text-2xl font-bold text-gray-800">
    ⭐ Star Store ⭐
    </router-link>
  <div class="flex">
    <FeatherIcon class="h-8" name="shopping-cart" />
     <p class="text-gray-700 font-bold">({{ cart.items.length }} items )</p>
  </div>
  </nav>
  <div class="m-3">
    <router-view />
  </div>
</template>
<script setup>
import { FeatherIcon } from "frappe-ui";
import { inject } from "vue";

const cart = inject("cart");
</script>
