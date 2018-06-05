<template>
    <div class="lz-grid-item" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "LzGridItem",
    props: {
        rowSpan: String,
        colSpan: String
    },
    created() {
        this.$parent.children.push(this);
    },
    computed: {
        style() {
            return {
                gridColumn: this.colSpan,
                gridRow: this.rowSpan
            }
        }
    }
}
</script>

<style lang="less">
    .lz-grid-item {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
</style>


