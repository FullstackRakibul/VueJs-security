<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const animateClass = ref('');
onMounted(() => {
  animateClass.value =
    'animate__animated animate__bounce animate__delay-2s animate__slow animate__infinite';
});
onUnmounted(() => {
  animateClass.value = '';
});
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h2 :class="animateClass" class="text-red-200 text-7xl font-extrabold">
      404 Error
    </h2>
    <p class="text-aqua">Sorry!!! What are you looking for ?</p>
  </div>
</template>
