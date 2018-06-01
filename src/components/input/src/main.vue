<template>
    <div :class="['lz-input', size ? 'lz-input-' + size : '']">
        <slot name="prefix"></slot>
        <input class="lz-input-field" :type="type" :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
        <slot name="suffix"></slot>
    </div>
</template>

<script>
export default {
    name: "LzInput",
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: String,
        value: [String, Number],
        size: String
    }
}
</script>

<style lang="less">
.lz-input {
    height: 32px;
    width: 200px;
    border: 1px solid rgb(184, 182, 182);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    padding: 4px 12px;

    &+& {
        margin-top: 25px;
    }

    &-field {
        width: 100%;
        outline: none;
        border: none;
        font-size: 14px;
        color: #666;
    }

    &-large {
        height: 40px;
        width: 280px;

        & > input {
            font-size: 15px;
        }
    }
}
</style>