<template>
    <button :class="['lz-btn','lz-btn-' + type, size ? 'lz-btn--' + size : '']" @click="Click" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "LzButton",

        props: {
            type: {
                default: "default",
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: String
        },

        methods: {
            Click: function (e) {
                this.$emit('click', e);
            }
        }
    };
</script>

<style lang="less">
    @shadow: #ababab;

    @disabled: #e6e6e6;
    @disabled-text: #737477;

    @primary: rgb(0, 135, 238);
    @primary-text: #fff;

    @default: #fff;
    @default-text: #555;

    .primary() {
        background-color: @primary;
        color: @primary-text;
    }

    .default() {
        background-color: @default;
        color: @default-text;
    }

    .text() {
        color: #409eff;
        background-color: transparent;
        box-shadow: none;
    }

    .disabled() {
        background-color: @disabled;
        color: @disabled-text;
    }

    .lz-btn {
        height: 32px;
        line-height: 32px;
        padding: 0 16px;
        font-weight: normal;
        outline: none;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        touch-action: manipulation;
        white-space: nowrap;
        border-radius: 2px;
        border: none;
        box-shadow: 2px 2px 8px @shadow;
        transition: 0.167s;

        &:hover {
            box-shadow: 4px 4px 8px @shadow;
        }

        &:active {
            box-shadow: 1px 1px 4px @shadow;
        }

        &:disabled {
            color: #737477;
            background-color: #e6e6e6;
            cursor: default;
            box-shadow: 1px 1px 2px #ababab;
        }

        &:disabled:hover {
            color: #737477;
            background-color: #e6e6e6;
            cursor: default;
            box-shadow: 1px 1px 2px #ababab;
        }

        &+& {
            margin-left: 10px;
        }

        &-default {
            .default;

            &:hover {
                color: @primary;
            }

            &:active {
                background-color: rgb(0, 153, 255);
            }
        }

        &-primary {
            .primary;

            &:hover {
                background-color: rgb(0, 153, 255);
            }

            &:active {
                background-color: @primary;
            }
        }

        &-text {
            color: #409eff;
            background: transparent;
            padding-left: 0;
            padding-right: 0;
            width: unset;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }

            &:focus {
                color: #66b1ff;
                border-color: transparent;
                background-color: transparent;
                box-shadow: none;
            }

            &:disabled {
                background: transparent;
            }
        }

        &--large {
            height: 40px;
            width: 280px;
            font-size: 18px;
        }
    }
</style>