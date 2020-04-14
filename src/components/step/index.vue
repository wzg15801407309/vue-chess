<template>
  <div id="step">
    <div v-for="index in stepNumber + 1" :key="index">{{ index }}:{{}}</div>
  </div>
</template>

<script>
export default {
  name: "step",
  components: {},
  props: {
    stepNumber: {
      type: Number,
      default: 0
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
#step {
}
</style>
