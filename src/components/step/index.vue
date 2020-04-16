<template>
  <div id="step">
    <div v-for="index in stepNumber" :key="index" @click="backClick(index)">
      {{ index }}.
      <span v-if="index == 1">Go to game start</span>
      <span v-else>{{ `Go to move#${index - 1}` }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "step",
  components: {},
  props: {
    stepNumber: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(["deleteGridData"]),
    backClick(index) {
      let arrayId = index;
      // console.log(arrayId);
      this.deleteGridData(arrayId);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
#step {
  div {
    padding: 2px 0;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    padding: 5px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }
}
</style>
