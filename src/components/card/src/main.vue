<template>
    <div :class="['lz-card', animate ? 'lz-card-animate' : '']">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LzCard",
        props: {
            animate: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="less">
    .lz-card {
        background: #fff;
        border-radius: 1px;
        min-height: 80px;
        min-width: 200px;
        padding: 12px;
        box-shadow: 0px 0px 8px 2px #d0d3da;
        display: flex;
        flex-direction: column;
        cursor: default;
        &-animate {
            transition: 0.167s;
            &:hover {
                box-shadow: 0px 0px 20px 8px #dadadad5;
            }
        }
    }
</style>