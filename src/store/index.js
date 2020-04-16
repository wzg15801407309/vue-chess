import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./grtters";
Vue.use(Vuex);

const state = {
  //当前在哪一步
  stepNumber: 1,
  //难度
  difficulty: 3,
  //全局数据对象
  dataList: Array.from({ length: 9 }, () => null),
  isOver: false,
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
