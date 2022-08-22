<script setup>
import NavBar from "@/components/NavBar.vue"
import NavMenu from "@/components/NavMenu.vue";
</script>

<template>
    <div>
        <NavMenu class="fixed top-0 left-0 w-full z-[9999]" />
        <router-view></router-view>
    </div>
</template>
