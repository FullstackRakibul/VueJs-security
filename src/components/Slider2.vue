<template>
  <SliderComp>
    <template #left>
      <div class="m-10 border px-10 p-6 rounded-md hover:shadow-md bg-[#F5F5F5]">
        <div class="">
          <h2 class="text-2xl text-orange-500">We protect personal information that we collect.</h2>
          <p class="text-justify text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div class="">
            <img class="object-contain h-48 w-full" src="@/assets/img/security-14.gif">
          </div>
        </div>
      </div>
    </template>

    <template #right>
      <div class="m-10 border shadow-md px-10 p-6 rounded-md hover:shadow-md bg-[#F5F5F5]">
        <div class="avatar">
          <img class="object-contain h-48 w-full" src="@/assets/img/security-18.gif">
        </div>
        <div class="">
          <h2 class="text-2xl text-orange-500">We protect personal information that we collect.</h2>
          <p class="text-justify text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

      </div>
    </template>
  </SliderComp>
</template>

<script setup>

</script>

<style scoped>

</style>

<style>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.avatar {
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
</style>