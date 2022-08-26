<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<template>
  <SliderComp class="bg-sea">
    <template #left>
      <h2 class="text-xl px-2 mb-3">
        Evolving the <br />
        <h1 class="my-2 text-typing text-7xl font-extrabold text-orange-600">
          SecurityGard
        </h1>
      </h2>
      <p class="px-2 font-light leading-relaxed mt-0 mb-0 text-gray-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        consectetur aliquam corrupti.
      </p>

      <div class="flex flex-row mt-3">
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

      <p v-if="show">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        mollitia exercitationem odit itaque accusamus dolorem debitis placeat
        possimus iusto!
      </p>
    </template>

    <template #right>
      <img class="w-auto h-25" src="@/assets/img/security1.gif" />
    </template>
  </SliderComp>
</template>

<style>
.splide__pagination__page.is-active {
  background: #0039ff;
}

.splide__pagination__page {
  background: #7979fa;
}

.text-typing {
  overflow: hidden;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    width: 0%;
  }
  70%,
  90% {
    width: 100%;
  }
}
</style>
