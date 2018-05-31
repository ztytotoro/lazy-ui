<template>
    <div class="lz-label">
        <span class="lz-label-title" :style="{'text-align': textAlign}">{{title}}</span>
        <div class="lz-label-item">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "LzLabel",
    props: {
        title: String,
        textAlign: {
            type: String,
            default: "right"
        }
    }
}
</script>


<style lang="less">
    .lz-label {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-title {
            font-size: 18px;
            color: #555;
            width: 100px;
            height: 40px;
            line-height: 40px;
        }

        &-item {
            flex: 1;
            height: 100%;
            justify-content: flex-start;
            align-items: center;
            margin-left: 10px;
        }
    }
</style>
