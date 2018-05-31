<template>
    <div class="lz-split">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "LzSplit",
  data() {
    return {
      children: []
    };
  },

  computed: {
    length: function() {
      let t = 0;
      for (let item of this.children) {
        t += parseInt(item.span);
      }

      return t;
    }
  }
};
</script>

<style lang="less">
.lz-split {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
