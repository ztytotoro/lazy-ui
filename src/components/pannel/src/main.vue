<template>
    <div class="lz-pannel">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "LzPannel"
}
</script>

<style lang="less">
    .lz-pannel {
        background: #fff;
        border-radius: 1px;
        min-height: 80px;
        min-width: 200px;
        padding: 12px;
        box-shadow: 0px 0px 8px 2px #d0d3da;
        display: flex;
        flex-direction: column;
        cursor: default;
    }
</style>
