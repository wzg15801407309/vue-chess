<template>
  <div class="home">
    <tabTitle />
    <div class="gird">
      <Item
        v-for="(item, id) in dataList"
        :key="id"
        :personType="personType"
        :index="id"
        :item="item"
        @changerWin="changerWin"
      ></Item>
    </div>
    <div v-if="winner < 0" class="nextplayer">
      nextPlayer:{{ personType == 1 ? " X" : " O" }}
    </div>
    <div class="nextplayer" v-else>Winner:{{ winner == 1 ? " X" : " O" }}</div>
    <Setp class="setp" :stepNumber="stepNumber" />
  </div>
</template>

<script>
import tabTitle from "../components/title";
import Item from "../components/gird/index";
import { mapState, mapActions } from "vuex";
import Setp from "../components/step";
export default {
  name: "Home",
  components: { tabTitle, Item, Setp },
  watch: {},
  data() {
    return {
      winner: -1,
    };
  },
  computed: {
    ...mapState({
      difficulty: (state) => state.difficulty,
      //步数
      stepNumber: (state) => state.stepNumber,
      //type 判断 偶数代表o 奇数代表x
      personType: (state) => state.stepNumber % 2,
      dataList: (state) => state.dataList,
    }),
  },
  methods: {
    ...mapActions(["isOverSet"]),
    changerWin(obj) {
      this.winner = this.winFun(obj.id, obj.type);
      console.log(this.winner);
      if (this.winner >= 0) this.isOverSet(true);
    },
    winFun(id, type) {
      let result = false;
      let row = Math.floor(id / 3);
      let coulum = id % 3;

      let arr = this.oneToTwo(this.dataList, this.difficulty);
      //x表示该棋子所在行,y表示该棋子所在列
      //横向
      if (
        arr[row][0] &&
        arr[row][1] &&
        arr[row][2] &&
        arr[row][0].type == type &&
        arr[row][1].type == type &&
        arr[row][2].type == type
      ) {
        return type;
      }
      //竖向
      if (
        arr[0][coulum] &&
        arr[1][coulum] &&
        arr[2][coulum] &&
        arr[0][coulum].type == type &&
        arr[1][coulum].type == type &&
        arr[2][coulum].type == type
      ) {
        return type;
      }
      //斜向
      if (
        arr[0][0] &&
        arr[1][1] &&
        arr[2][2] &&
        arr[0][0].type == type &&
        arr[1][1].type == type &&
        arr[2][2].type == type
      ) {
        return type;
      }
      result = -1;
      return result;
    },
    //一维数组转二维
    oneToTwo(arr, n) {
      let tempArray = [];
      console.log(arr);
      let len = arr.length;
      let listnum = len % n === 0 ? len / n : Math.floor(len / n) + 1;
      for (let i = 0; i < listnum; i++) {
        let temp = arr.slice(i * n, i * n + n);
        tempArray.push(temp);
      }
      return tempArray;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less">
.home {
  width: 100vw;
  min-height: 100vh !important;
  background: linear-gradient(to bottom right, #434343, #000000);
  .gird {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .nextplayer {
    padding: 10px 30px;
    font-size: 18px;
    font-weight: 600;
  }
  .setp {
    padding: 0 30px;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
