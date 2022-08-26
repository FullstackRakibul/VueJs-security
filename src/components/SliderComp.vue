<template>
  <div
    class="
      w-full
      h-full
      flex
      justify-between
      items-center
      px-3
      sm:px-5
      md:px-10
      gap-8
    "
  >
    <div class="flex-1">
      <slot name="left"></slot>
    </div>
    <div class="flex-1">
      <slot name="right"></slot>
    </div>
  </div>
</template>
