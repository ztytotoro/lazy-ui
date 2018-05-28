<template>
    <div class="lz-input">
        <slot name="prefix"></slot>
        <input class="lz-input-field" :type="type" :placeholder="placeholder">
        <slot name="suffix"></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: String
    }
}
</script>

<style>
.lz-input {
    height: 40px;
    width: 280px;
    border: 1px solid rgb(184, 182, 182);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    padding: 4px 12px;
}

.lz-input+.lz-input{
    margin-top: 25px;
}

.lz-input-field {
    width: 100%;
    outline: none;
    border: none;
    font-size: 15px;
    color: #666;
}
</style>