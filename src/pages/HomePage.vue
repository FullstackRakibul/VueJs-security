<template>
    <Splide :options="options">
        <SplideSlide>
            <Slider3 />
        </SplideSlide>
        <SplideSlide>
            <Slider1 />
        </SplideSlide>
        <SplideSlide>
            <Slider4 />
        </SplideSlide>
        <SplideSlide>
            <Slider2 />
        </SplideSlide>
    </Splide>
</template>

<script setup>
import { reactive } from "vue"

import "@splidejs/vue-splide/css"

import SingleSlider from "@/components/SingleSlider.vue"
import Slider1 from "@/components/Slider1.vue"
import Slider2 from "@/components/Slider2.vue"
import Slider3 from "@/components/Slider3.vue"
import Slider4 from "@/components/Slider4.vue"

const options = reactive({
    direction: "ttb",
    wheel: true,
    wheelMinThreshold: 70,
    wheelSleep: 500,
    height: "100vh",
    arrows: false,
    waitForTransition: true,
    drag:true,
})
</script>

<style>
</style>
