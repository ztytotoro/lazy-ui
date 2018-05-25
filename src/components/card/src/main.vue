<template functional>
    <div class="hy-card">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LzCard"
    };
</script>

<style>
    .hy-card {
        background: #fff;
        border-radius: 5px;
        min-height: 80px;
        min-width: 200px; 
        padding: 12px;
        box-shadow: 1px 1px 1px 1px #d0d3da;
    }
</style>