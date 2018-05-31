<template>
    <div class="lz-split-item" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "LzSplitItem",
  props: {
    span: {
      type: String,
      default: "1"
    }
  },

  created() {
    this.$parent.children.push(this);
  },

  computed: {
    style: function() {
      if (this.$parent.type === "-") {
        return {
          height: "100%",
          width: parseInt(this.span) / this.$parent.length * 100 + "%"
        };
      } else {
        return {
          width: "100%",
          height: parseInt(this.span) / this.$parent.length * 100 + "%"
        };
      }
    }
  }
};
</script>

<style lang="less">
.lz-split-item {
  padding: 0px;
  & + & {
    margin-left: 20px;
  }
}
</style>
