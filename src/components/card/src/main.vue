<template>
    <div class="lz-card">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LzCard"
    };
</script>

<style>
    .lz-card {
        background: #fff;
        border-radius: 1px;
        min-height: 80px;
        min-width: 200px;
        padding: 12px;
        box-shadow: 0px 0px 8px 2px #d0d3da;
        display: flex;
    }
</style>