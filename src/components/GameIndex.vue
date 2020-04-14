<template>
  <div id="game">
    <Title />
    <Item v-for="index in difficulty" :key="index">
      :difficulty="difficulty"></Item
    >
    <div class="nextplayer">nextPlayer:{{ personType }}</div>
    <Setp :stepNumber="stepNumber" />
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
      difficulty: state => state.difficulty,
      //步数
      stepNumber: state => state.stepNumber,
      //type 判断 偶数代表o 奇数代表x
      personType: state => state.stepNumber % 2
    })
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
#game {
  .nextplayer {
    padding: 20px;
    float: left;
  }
}
</style>
