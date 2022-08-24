<script setup>
import NavBar from "@/components/NavBar.vue"
import NavMenu from "@/components/NavMenu.vue";
</script>

<template>
    <div>
        <NavMenu class="fixed top-0 left-0 w-full z-[9999]" />

        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>

    </div>
</template>


<style >
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-action{
    transition: opacity 0.5s ease-out;
}
</style>
