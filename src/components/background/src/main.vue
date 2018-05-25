<template>
    <div class="lz-bg" :style="style"></div>
</template>

<script>
    export default {
        name: "LzBg",
        props: {
            color: {
                type: String,
                default: "white"
            }
        },
        computed: {
            style: function(){
                return {
                    backgrondColor: this.color
                }
            }
        }
    };
</script>

<style>
    .lz-bg {
        z-index: -10000;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>