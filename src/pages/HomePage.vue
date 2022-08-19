
<template>
    <Splide :options="{
        direction: 'ttb',
        wheel: true,
        wheelDelay:20,
        height:'100vh',
        arrows:false,
        waitForTransition:true,
    }">
        <SplideSlide>
            <SingleSlider />
        </SplideSlide>
        <SplideSlide>
            <Slider1 />
        </SplideSlide>
        <SplideSlide>
            <Slider2 />
        </SplideSlide>

    </Splide>
    <NavBar class="fixed top-0 left-0 w-full" />

</template>

<script setup>

import NavBar from '../components/NavBar.vue';
import SingleSlider from '../components/SingleSlider.vue'
import Slider1 from '../components/Slider1.vue';
import Slider2 from '../components/Slider2.vue';
import WorkPage from '../pages/WorkPage.vue'



import "@splidejs/vue-splide/css";
</script>

<style lang="scss" scoped>

</style>