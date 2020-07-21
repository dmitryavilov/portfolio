<template>
    <div class="container container_big">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .container {
        max-width: 1034px;
        margin: 0 auto;
        width: 96%;
    }

    .container_big {
        max-width: 1560px;
    }
</style>