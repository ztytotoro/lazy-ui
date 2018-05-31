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
        box-shadow: 0px 2px 8px rgba(0,0,0,0.05);
        display: flex;
        flex-direction: column;
        cursor: default;
    }
</style>
