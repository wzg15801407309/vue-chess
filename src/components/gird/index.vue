<template>
  <div id="gameitem" @click="clickItem(index)">
    {{ item == null ? null : item.type == 1 ? "X" : "O" }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "gameitem",
  components: {},
  props: {
    personType: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  watch: {},
  computed: {
    ...mapState({
      step: (state) => state.stepNumber,
      isover: (state) => state.isOver,
    }),
  },
  methods: {
    ...mapActions(["stepNumber", "girdData"]),
    clickItem(id) {
      console.log(!this.isover && !this.item);
      if (!this.isover && !this.item) {
        this.stepNumber();
        //添加数据
        this.girdData({ type: this.personType, id: id });
        if (this.step > 5) {
          this.$emit("changerWin", { id: id, type: this.personType });
        }
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
#gameitem {
  width: calc((100% - 60px) / 3);
  padding-bottom: calc((100% - 60px) / 3);
  height: 0;
  // height: 100px;

  border: 1px solid gray;
  text-align: center;
  font-size: 90px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  div {
    height: 100%;
    width: 100%;
  }
}
</style>
