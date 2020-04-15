<template>
  <div id="gameitem" @click="clickItem">
    {{ isActive == null ? null : isActive == 0 ? "X" : "O" }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "gameitem",
  components: {},
  props: {
    difficulty: {
      type: Number,
      default: 3,
    },
    personType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isActive: null,
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(["stepNumber", "addGridData"]),
    clickItem() {
      console.log(this.personType);
      this.isActive = this.personType;
      this.stepNumber();
      //添加数据
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
#gameitem {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 1px solid gray;
  text-align: center;
  font-size: 90px;
  font-weight: bold;
}
</style>
