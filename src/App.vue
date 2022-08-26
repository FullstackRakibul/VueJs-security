<script setup>
import NavMenu from '@/components/NavMenu.vue';
</script>

<template>
  <div class="overflow-hidden">
    <NavMenu class="fixed top-0 left-0 w-full z-[9999]" />
    <router-view v-slot="{ Component, route }">
      <Transition name="slide-fade" mode="out-in">
        <div :key="route.path">
          <Component :is="Component" />
        </div>
      </Transition>
    </router-view>
  </div>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 800ms linear;
}

.slide-fade-enter-from {
  transform: translateX(calc(100% + 200px));
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(calc(-100% - 200px));
  opacity: 0;
}
</style>
