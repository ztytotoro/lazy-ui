<template>
    <div class="lz-popver">
        <transition name="fade-in-linear" >
            <div class="lz-popver-main" v-show="show">
                <slot></slot>
            </div>
        </transition>
        <slot name="trigger"></slot>
    </div>
</template>

<script>
export default {
    name: "LzPopover",
    data() {
        return {
            show: false
        }
    }
}
</script>
