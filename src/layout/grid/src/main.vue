<template>
    <div class="lz-grid" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "LzGrid",
    props: {
        rows: String,
        columns: String,
        rowHeight: String,
        columnWidth: {
            type: String,
            default: "1fr"
        },
        alignItems: {
            type: String,
            default: "center"
        },
        justifyItems: {
            type: String,
            default: "start"
        }
    },
    data() {
        return {
            children: []
        }
    },
    computed: {
        style(){
            return {
                gridTemplateColumns: `repeat(${this.columns}, ${this.columnWidth})`,
                gridTemplateRows: `repeat(${this.rows || Math.ceil(this.children.length / this.columns)}, ${this.rowHeight})`,
                justifyItems: this.justifyItems,
                alignItems: this.alignItems
            }
        }
    }
}
</script>


<style lang="less">
    .lz-grid {
        display: grid;
    }
</style>
