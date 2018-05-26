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
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    .lz-container--vcenter {
        align-items: center;
    }

    .lz-container--hcenter {
        justify-content: center;
    }

    .lz-container--left {
        justify-content: flex-start;
    }

    .lz-container--right {
        justify-content: flex-end;
    }
    
    .lz-container--top {
        align-items: flex-start;
    }

    .lz-container--bottom {
        align-items: flex-end;
    }
</style>