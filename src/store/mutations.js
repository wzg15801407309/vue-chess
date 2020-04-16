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
  //初始化数组 修改数组
  [types.ADD_GRID_DATA](state, payload) {
    state.dataList[payload.id] = {
      type: payload.type,
      setp: state.stepNumber,
    };
    // console.log(state.dataList, state.isOver);
  },
  [types.DELETE_GRID_DATA](state, index) {
    state.dataList = state.dataList.map((item) =>
      item != null && item.setp > index ? null : item
    );
    state.stepNumber = state.stepNumber - (state.stepNumber - index);
    state.isOver = false;
    // console.log(state.dataList);
  },
  [types.IS_GAME_OVER](state, payload) {
    state.isOver = payload;
  },
};
