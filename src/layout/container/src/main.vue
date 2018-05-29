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
                switch(this.sleep){
                    case "center": t.push("lz-container--hcenter");break;
                    case "left": t.push("lz-container--left");break;
                    case "right": t.push("lz-container--right");break;
                    default:  break;
                }
                switch(this.stand){
                    case "center": t.push("lz-container--vcenter");break;
                    case "top": t.push("lz-container--top");break;
                    case "bottom": t.push("lz-container--bottom");break;
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