<template>
  <navbar />
  <div class="m-3">
    <router-view />
  </div>
</template>
<script setup>
import {watch,inject } from "vue";
import Navbar from './components/NavBar.vue';
const cart = inject("cart")
watch(cart.items,()=>{
  console.log("watcher works!")
  localStorage.setItem("cart", JSON.stringify(cart))
})
</script>
