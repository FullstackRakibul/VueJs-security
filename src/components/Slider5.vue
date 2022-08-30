<template>
  <div class=" w-full
      h-full mt-4">
    <div class="flex flex-col justify-center align-middle items-center bg-[url('@/assets/img/security-15.gif')] w-full h-full">
      <div @mousemove="onMousemove" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
           class="head movearea rounded-md p-3 mx-3">
        <h2 class="text-4xl text-white font-semibold text-center p-3">Give your computer a rest when you're not at your desk.</h2>

        <p class="text-center font-light font-mono p-2 text-white ">Passwords are like dirty socks. If left laying around, they'll create a stinky mess.</p>
      </div>
      <div class="mx-2 p-4">
        <img src="../assets/img/security-11.gif">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
<script >
export default {
  data() {
    return {
      x: 0
    }
  },
  methods: {
    onMousemove(e) {
      this.x = e.clientX
    }
  }
}
</script>