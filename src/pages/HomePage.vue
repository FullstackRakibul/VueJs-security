<template>
  <Splide :options="options"
          @splide:active="onActive"
          @splide:inactive="onInactive"
    >
    <SplideSlide>
      <Slider1 />
    </SplideSlide>
    <SplideSlide>
      <slider5/>
    </SplideSlide>
    <SplideSlide>
      <Slider2/>
    </SplideSlide>
<!--    <SplideSlide>-->
<!--      <Slider3 />-->
<!--    </SplideSlide>-->
    <SplideSlide>
      <Slider6/>
    </SplideSlide>
    <SplideSlide>
      <Slider4 />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { reactive } from 'vue';
import SingleSlider from '@/components/SingleSlider.vue';
import Slider1 from '@/components/Slider1.vue';
import Slider2 from '@/components/Slider2.vue';
import Slider3 from '@/components/Slider3.vue';
import Slider4 from '@/components/Slider4.vue';
import Slider5 from "@/components/Slider5.vue";
import Slider6 from "@/components/Slider6.vue";

import '@splidejs/vue-splide/css';
import 'animate.css';


const options = reactive({
  width: '100vw',
  height: '100vh',

  arrows: false,
  direction: 'ttb',
  wheel: true,
  wheelMinThreshold: 50,
  wheelSleep: 50,
  waitForTransition: true,
  gap: 0,
  padding: 0,
  drag: false,
  snap: true,
  speed: 350,
  easing: 'cubic-bezier(.19,.52,.84,.5)',
});

const className = ['animate__animated', 'animate__rubberBand'];

function onActive(Event, Element) {
  const { slide } = Element;
  slide.classList.add(...className);
}
function onInactive(Event, Element) {
  const { slide } = Element;
  slide.classList.remove(...className);
}

</script>

<style>
.testAnimation {
  animation: test 500ms linear infinite;
}

@keyframes test {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.2;
  }
  90% {
    opacity: 0.9;
  }
}

.splide__pagination__page.is-active {
  background: #ff2828;
}
.splide__pagination__page {
  background: #ffa1a1;
  height: 10px;
  width:10px;
}
</style>