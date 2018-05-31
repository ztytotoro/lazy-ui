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
        columnWidth: String
    },
    computed: {
        style(){
            return {
                gridTemplateColumns: `repeat(${this.columns}, ${this.columnWidth})`,
                gridTemplateRows: `repeat(${this.rows}, ${this.rowHeight})`
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
