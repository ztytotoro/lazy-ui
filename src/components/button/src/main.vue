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
                type: boolean,
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
        border-radius: 4px;
    }

    .lz-btn+.lz-btn {
        margin-left: 10px;
    }

    .lz-btn-default {
        border: 1px solid #bfbfbf;
        background-color: #fff;
    }

    .lz-btn-default:hover {
        border-color: #4d99e0;
        color: #4d99e0;
    }

    .lz-btn-default:active {
        background-color: #1c699f;
        color: #fff;
    }

    .lz-btn-primary {
        background-color: #4d99e0;
        border: 1px solid #4d99e0;
        color: #fff
    }

    .lz-btn-primary:hover {
        background-color: #217ebd;
        color: #fff;
    }

    .lz-btn-primary:active {
        background-color: #1c699f;
        color: #fff;
    }

    .lz-btn-text {
        border-color: transparent;
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
        border: 1px solid #bfbfbf;
        background-color: #e6e6e6;
        cursor: default;
    }

    .lz-btn-text:disabled {
        background: transparent;
        border: none;
    }
</style>