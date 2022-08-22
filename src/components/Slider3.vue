<template>
    <div class="h-full container flex flex-row justify-between items-center px-3 bg-sea ">
        <div class="basis-1/2 px-8">
            <h2 class="text-xl px-2 mb-3">Evolving the <br><span class="text-7xl font-extrabold text-orange-600">FireFox
                </span>Brand</h2>
            <p class="px-2 font-light leading-relaxed mt-0 mb-0 text-gray-800">Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Adipisci consectetur aliquam corrupti.</p>
            <button @click="show = !show"
                class=" text-orange-600 border border-white px-2 m-2 hover:orange-600 hover:bg-orange-600 active:orange-600 hover:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"> See More
            </button>

            <Transition>
                <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero mollitia
                    exercitationem odit itaque accusamus dolorem debitis placeat possimus iusto!</p>
            </Transition>
        </div>
        <div class="basis-1/2">
            <img src="@/assets/img/security1.gif" />
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style> 


<style>



.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

</style>