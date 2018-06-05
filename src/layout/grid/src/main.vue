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
        columnWidths: String,
        alignItems: {
            type: String,
            default: "center"
        },
        justifyItems: {
            type: String,
            default: "start"
        },
        gridGap: {
            type: String,
            default: "0"
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
                gridTemplateColumns: this.columnWidths ? this.columnWidths : `repeat(${this.columns}, ${this.columnWidth})`,
                gridAutoRows: this.rowHeight,
                //gridTemplateRows: `repeat(${this.rows || Math.ceil(this.children.length / this.columns)}, ${this.rowHeight})`,
                justifyItems: this.justifyItems,
                alignItems: this.alignItems,
                gridGap: this.gridGap
            }
        }
    }
}
</script>


<style lang="less">
    .lz-grid {
        display: grid;
        width: 100%;
    }
</style>
