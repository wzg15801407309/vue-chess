import * as types from "./mutations-type";

export default {
  //当前下到第几步了
  [types.STEP_NUMBER](state) {
    state.stepNumber += 1;
  },
  //设置游戏难度
  [types.DIFFICULTY](state, payload) {
    state.difficulty = payload;
  }
  // [ADD_CARTCOUNT](state, payload) {
  //   payload.count += 1;
  // },
  // [ADD_CARTLIST](state, payload) {
  //   state.cartList.push(payload);
  // },
  // [CHANGE_UID](state, payload) {
  //   state.uid = payload;
  // }
};
