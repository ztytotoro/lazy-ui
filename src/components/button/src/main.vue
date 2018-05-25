<template>
    <button :class="['lz-btn','lz-btn-' + type]" @click="Click" :disabled="disabled">
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
            }
        },

        methods: {
            Click: function (e) {
                this.$emit('click', e);
            }
        }
    };
</script>

<style>
    .lz-btn {
        width: 92px;
        height: 32px;
        line-height: 32px;
        padding: 0;
        font-weight: normal;
        outline: none;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        touch-action: manipulation;
        white-space: nowrap;
        border-radius: 2px;
        border: none;
        box-shadow: 2px 2px 8px #ababab;
        transition: 0.13s;
    }

    .lz-btn:hover {
        box-shadow: 4px 4px 8px #ababab;
    }

    .lz-btn:active {
        box-shadow: 1px 1px 4px #ababab;
    }

    .lz-btn+.lz-btn {
        margin-left: 10px;
    }

    .lz-btn-default {
        background-color: #fff;
    }

    .lz-btn-default:hover {
        color: rgb(0, 135, 238);
    }

    .lz-btn-default:active {
        background-color: rgb(0, 103, 184);
        box-shadow: 1px 1px 4px #ababab;
    }

    .lz-btn-primary {
        background-color: rgb(0, 103, 184);
        color: #fff
    }

    .lz-btn-primary:hover {
        background-color: rgb(0, 135, 238);
    }

    .lz-btn-primary:active {
        background-color: rgb(0, 103, 184);
    }

    .lz-btn-text {
        color: #409eff;
        background: transparent;
        padding-left: 0;
        padding-right: 0;
        width: unset;
    }

    .lz-btn-text:focus {
        color: #66b1ff;
        border-color: transparent;
        background-color: transparent;
    }

    .lz-btn:disabled {
        color: #737477;
        background-color: #e6e6e6;
        cursor: default;
    }

    .lz-btn-text:disabled {
        background: transparent;
    }
</style>