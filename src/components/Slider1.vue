<script setup>
import { ref } from 'vue';
const show = ref(true);

</script>

<template>
  <SliderComp class="">
    <template #left>
      <span class="flex items-center px-1 text-2xl text-aqua">
        <span class="">Secure Your Data </span>
        <img class="w-auto h-16 mx-2" src="@/assets/img/security-16.gif" />
      </span>
      <div class="inline">
        <h1 class=" text-4xl font-extrabold text-orange-400 animate__animated animate__wobble">
          Our business is protecting yours.
        </h1>
      </div>
      <p class="px-2 font-light leading-relaxed  text-gray-800 ">
        Our Commitment is Keeping you Safe. Our Concern is Security. Peace of mind is a matter of choice.
      </p>

      <div class="flex flex-row mt-4 animate__animated animate__flipInX animate__delay-1s">
        <button
            type="button"
            class="
            text-blue-700
            hover:text-white
            border border-blue-700
            hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            mr-2
            mb-2
            dark:border-blue-500
            dark:text-blue-500
            dark:hover:text-white
            dark:hover:bg-blue-600
            dark:focus:ring-blue-800
          "
        >
          Get Service
        </button>
        <button
            type="button"
            class="
            text-gray-900
            hover:text-white
            border border-gray-800
            hover:bg-gray-900
            focus:ring-4 focus:outline-none focus:ring-gray-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            mr-2
            mb-2
            dark:border-gray-600
            dark:text-gray-400
            dark:hover:text-white
            dark:hover:bg-gray-600
            dark:focus:ring-gray-800
          "
        >
          Get Consulting
        </button>
      </div>
    </template>

    <template #right>
      <div class="flex justify-end">
        <img src="@/assets/img/security-12.gif" />
      </div>

    </template>
  </SliderComp>
</template>


