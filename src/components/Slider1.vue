<template>
    <div class="h-full container flex flex-row justify-between items-center px-3 bg-white ">
        <div class="basis-1/2 px-8">
            <span class="flex items-center px-1 text-2xl text-aqua">
                <span>Secure Your Data </span>
                <img class="w-auto h-10 mx-2 " src="@/assets/img/security9.png" />
            </span>
                <h1 class=" text-typing text-7xl font-extrabold text-orange-600 ">FireFox
                </h1>
            <p class="px-2 font-light leading-relaxed mt-0 mb-0 text-gray-800">Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Adipisci consectetur aliquam corrupti.</p>
            
            <div class="flex flex-row mt-4">
                <button type="button"
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"> Get Service </button>
                <button type="button"
                    class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"> Get Consulting </button>
            </div>

            <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero mollitia
                    exercitationem odit itaque accusamus dolorem debitis placeat possimus iusto!
            </p>
        </div>
        <div class="basis-1/2">
            <img src="@/assets/img/security7.gif" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>