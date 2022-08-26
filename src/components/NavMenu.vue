<template>
  <div
    class="w-full font-sans text-grey-900"
    :style="{
      backgroundColor: 'rgba(255, 255 , 255 , .3)',
    }"
  >
    <nav
      class="
        flex
        items-center
        justify-between
        px-24
        py-8
        max-w-screen-xlmx-auto
      "
    >
      <router-link to="/" class="text-2xl font-bold tracking-wide">
        Creative <span class="text-aqua">Tech</span> Park
      </router-link>

      <div class="flex item-center space-x-14 text-aqua">
        <ul class="flex items-center space-x-8">
          <li class="texl font-medium group" v-for="item of list" :key="item">
            <router-link
              :to="item.path"
              class="
                block
                py-2
                pr-4
                pl-3
                text-aqua
                rounded
                md:bg-transparent md:p-0
              "
            >
              {{ item.text }}
            </router-link>
            <div
              class="
                h-1
                bg-aqua
                scale-x-0
                group-hover:scale-75
                transsition-transform
                origin-left
                rounded-full
                duration-300
                ease-out
              "
            />
          </li>
        </ul>
        <button
          class="
            flex
            justify-center
            items-center
            h-10
            px-7
            font-medium
            text-white
            bg-aqua
            rounded-md
          "
        >
          Get a quote
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
const list = [
  {
    text: 'Work',
    path: '/work',
  },
  {
    text: 'Agency',
    path: '/agency',
  },
  {
    text: 'Outcomes',
    path: '/outcomes',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
];
</script>
