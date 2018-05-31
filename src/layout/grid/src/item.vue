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

