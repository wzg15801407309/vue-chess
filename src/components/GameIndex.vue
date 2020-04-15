<template>
  <div id="game">
    <Title />
    <div class="gird">
      <Item
        class="girdItem"
        v-for="(index, id) in Math.pow(difficulty, 2)"
        :key="id"
        :personType="personType"
      ></Item>
    </div>

    <div class="nextplayer">nextPlayer:{{ personType == 0 ? " X" : " O" }}</div>
    <Setp class="setp" :stepNumber="stepNumber" />
  </div>
</template>

<script>
import Item from "./gird/index";
import Title from "../components/title";
import Setp from "../components/step";
import { mapState } from "vuex";
export default {
  name: "GameIndex",
  components: { Item, Title, Setp },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      difficulty: (state) => state.difficulty,
      //步数
      stepNumber: (state) => state.stepNumber,
      //type 判断 偶数代表o 奇数代表x
      personType: (state) => state.stepNumber % 2,
    }),
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
#game {
  .nextplayer {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 600;
  }
  .gird {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .setp {
    padding: 0 20px;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
