import * as types from "./mutations-type";

export default {
  //当前下到第几步了
  [types.STEP_NUMBER](state) {
    state.stepNumber += 1;
  },
  //设置游戏难度
  [types.DIFFICULTY](state, payload) {
    state.difficulty = payload;
  },
  //设置数组
  [types.ADD_GRID_DATA](state, payload) {
    state.addGridData.push(payload);
  },
};
