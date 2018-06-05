<template>
    <div class="lz-card">
        <div class="lz-card-title" v-if="$slots.title">
            <slot name="title"></slot>
        </div>
        <div :class="['lz-card-main', animate ? 'lz-card-animate' : '']" :style="style">
            <div class="lz-card-title" v-if="$slots.op">
                <slot name="op"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LzCard",
        props: {
            animate: {
                type: Boolean,
                default: false
            },
            background: String,
            shadowColor: String,
            justifyContent: {
                type: String,
                default: "flex-start"
            },
            alignItems: {
                type: String,
                default: "center"
            }
        },
        computed: {
            style() {
                return {
                    background: this.background,
                    justifyContent: this.justifyContent,
                    alignItems: this.alignItems
                }
            }
        }
    };
</script>

<style lang="less">
    .lz-card-main {
        background: #fff;
        border-radius: 1px;
        min-height: 80px;
        min-width: 200px;
        padding: 12px;
        box-shadow: 0px 0px 8px 2px #d0d3da;
        display: flex;
        flex-direction: column;
        flex: 1;
        cursor: default;
    }

    .lz-card {
        display: flex;
        flex-direction: column;
        &-title {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
        }
        &-animate {
            transition: 0.167s;
            &:hover {
                box-shadow: 0px 0px 20px 8px #dadadad5;
            }
        }
    }
</style>