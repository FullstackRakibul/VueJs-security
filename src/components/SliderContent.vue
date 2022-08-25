<template>
    <div>
        <h2> Hello World !</h2>
    </div>
</template>

<script setup>
const props = defineProps(['textColor'])
</script>

<style scoped>
    div{
      color: v-bind(props.textColor);
    }

    h2 {
        font-size: calc(5vw + 30px);
        font-weight: bold;
        white-space: pre;
    }
</style>