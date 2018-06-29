<script>
export default {
    name: "LzPopover",
    data() {
        return {
            show: false
        }
    },
    render(h) {
        return (
            <div class="lz-popver">
                <transition name="fade-in-linear" >
                    <div class="lz-popver-main" v-show={this.show}>
                        <slot></slot>
                    </div>
                </transition>
                <slot name="trigger"></slot>
            </div>
        )
    }
}
</script>

<style lang="less" src="">

</style>

