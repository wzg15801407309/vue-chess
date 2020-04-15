import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./grtters";
Vue.use(Vuex);

const state = {
  //全局数据对象
  addGridData: [],
  //当前在哪一步
  stepNumber: 0,
  //难度
  difficulty: 3,
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
