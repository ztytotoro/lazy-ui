<script>
    export default {
        name: "LzRow",
        render: function (h) {
            return h("div", {
                class: ["lz-row"],
                style: this.style
            }, this.$slots.default)
        },
        props: {
            align: String,
            padding: {
                type: String,
                default: "8px"
            }
        },
        computed: {
            style: function () {
                let t = {};
                if (this.align === "aside") {
                    t.justifyContent = "space-between";
                } else if (this.align === "space-around") {
                    t.justifyContent = "space-around";
                } else if (this.align === "center") {
                    t.justifyContent = "center";
                } else if (this.align) {
                    t.justifyContent = this.align;
                }
                if (this.padding) {
                    t.padding = this.padding;
                }
                return t;
            }
        }
    }
</script>

<style>
    .hy-row {
        padding: 8px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
    }
</style>