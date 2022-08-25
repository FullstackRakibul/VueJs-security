<template>
  <div class="w-full h-full flex justify-between items-center px-3">
    <div class="flex-1 px-8">
      <slot name="left"></slot>
    </div>
    <div class="flex-1">
      <slot name="right"></slot>
    </div>
  </div>
</template>
