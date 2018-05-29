<template>
    <div :class="tClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LzContainer",
        props: {
            align: {
                type: String,
                default: "center"
            }
        },
        computed: {
            tClass: function(){
                let t = ["lz-container"];
                switch(this.align){
                    case "center":
                        t.push("lz-container--hcenter");
                        t.push("lz-container--vcenter");
                        break;
                    default: break;
                }
                return t;
            }
        }
    };
</script>

<style lang="less">
    .lz-container {
        display: flex;
        padding: 12px;
        width: 100%;
        height: 100%;
        flex-direction: column;

        &--vcenter {
            align-items: center;
        }

        &--hcenter {
            justify-content: center;
        }

        &--left {
            justify-content: flex-start;
        }

        &--right {
            justify-content: flex-end;
        }

        &--top {
            align-items: flex-start;
        }

        &--bottom {
            align-items: flex-end;
        }
    }
</style>