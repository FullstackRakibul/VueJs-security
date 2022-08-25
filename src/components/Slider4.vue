<script setup>
import SliderContent from '@/components/SliderContent.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';

//reference to the root container element
const parentEl = ref(null);

// variable to store circle Percentage
const clip = ref(0);

// a basic lerp function
const lerp = (v1, v2, t) => v1 * t + v2 * (1 - t);

// variable to store animation frame id
let requestId = null;

//main animation function that runs animation loop
const animate = (v1, t) => {
  // the loop function
  const loop = () => {
    clip.value = lerp(v1, clip.value, t);

    //OPTIONAL .. did this to make clip value go
    //all the way to zero
    clip.value <= 5 ? (v1 = 0) : false;
    requestId = window.requestAnimationFrame(loop);
  };
  //initializing the animation function
  requestId = window.requestAnimationFrame(loop);
};

const { abs } = Math;
const onMouseMove = (evt) => {
  //cancel prev animation on every mousemove event
  window.cancelAnimationFrame(requestId);
  // normalizing value -1 0 1
  const a = (evt.x / parentEl.value?.clientWidth) * 2 - 1;
  const b = abs(a) * 80;
  animate(b, 0.02);
};

/////////
////////
// COLOR CHANGING CODES START
///////
///////
let hue = ref(0);
let ID = null;
onMounted(() => {
  const loop = () => {
    hue.value = (hue.value + 0.5) % 360;
    ID = window.requestAnimationFrame(loop);
  };
  ID = window.requestAnimationFrame(loop);
});
onUnmounted(() => {
  window.cancelAnimationFrame(ID);
});

const colorHSL = computed(() => `hsl(${hue.value},70%,99.99%)`);
const invertedColorHSL = computed(() => {
  const val = 360 - hue.value;
  return `hsl(${val},70%,30%)`;
});
</script>

<template>
  <div
    @mousemove="onMouseMove"
    ref="parentEl"
    class="container"
    :style="{
      backgroundColor: colorHSL,
    }"
  >
    <SliderContent :textColor="invertedColorHSL" />
    <div
      class="divider"
      :style="{
        backgroundColor: invertedColorHSL,
        clipPath: `circle(${clip}% at 50% 50%)`,
      }"
    >
      <Content :textColor="colorHSL" class="dividerContent" />
    </div>
  </div>
</template>

<style scoped>
.container,
.divider {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  position: relative;
}

.divider {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.dividerContent {
  position: absolute;
  flex: 1;
}
</style>
