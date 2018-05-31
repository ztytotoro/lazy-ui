<template>
    <div class="lz-label">
        <span class="lz-label-title"></span>
        <div class="lz-label-item">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less">
    .lz-label {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-title {
            font-size: 17px;
            color: #555;
            width: 100px;
        }

        &-item {
            flex: 1;
            height: 100%;
            justify-content: flex-start;
            align-items: center;
        }
    }
</style>
