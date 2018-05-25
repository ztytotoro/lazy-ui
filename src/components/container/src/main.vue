<template>
    <div :class="tClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LzContainer",
        props: {
            "-": {
                type: String,
                default: "center"
            },
            "|": {
                type: String,
                default: "center"
            }
        },
        computed: {
            tClass: function(){
                let t = ["lz-container"];
                switch(this["-"]){
                    case "center": t.push("lz-container--hcenter");break;
                    case "left": t.push("lz-container--left");break;
                    case "right": t.push("lz-container--right");break;
                    default:  break;
                }
                switch(this["|"]){
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

<style>
    .lz-container {
        display: flex;
        padding: 12px;
    }

    .lz-container--vcenter {
        align-content: center;
    }

    .lz-container--hcenter {
        justify-content: center;
    }

    .lz-container--left,.lz-container--top {
        justify-content: flex-start;
    }

    .lz-container--right,.lz-container--bottom {
        justify-content: flex-end;
    }
</style>