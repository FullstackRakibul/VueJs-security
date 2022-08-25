<template>
    <div>
        <h2> Welcome to Creative Tech park </h2>
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
        font-size: calc(3vw + 30px);
        font-weight: bold;
        white-space: pre;
    }
</style>