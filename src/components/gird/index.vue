<template>
  <div id="gameitem">
    <div v-for="index in difficulty" :key="index">
      12356
    </div>
  </div>
</template>

<script>
export default {
  name: "gameitem",
  components: {},
  props: {
    difficulty: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
#gameitem {
  display: flex;
  justify-content: center;
  div {
    width: 100px;
    height: 100px;
    border: 1px solid gray;
  }
}
</style>
