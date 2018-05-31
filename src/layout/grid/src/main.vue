<template>
    <div class="lz-grid">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "LzGrid"
}
</script>


<style lang="less" scoped>
    .lz-grid {
        display: grid;
    }
</style>
