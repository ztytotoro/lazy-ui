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
        colSpan: String,
        alignItems: String,
        justifyContent: String,
        padding: String
    },
    created() {
        this.$parent.children.push(this);
    },
    computed: {
        style() {
            return {
                gridColumn: `span ${this.colSpan}`,
                gridRow: `span ${this.rowSpan}`,
                alignItems: this.alignItems ? this.alignItems : this.$parent.alignItems,
                justifyContent: this.justifyContent ? this.justifyContent : this.$parent.justifyItems,
                padding: this.padding ? this.padding : this.$parent.padding
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
    }
</style>


