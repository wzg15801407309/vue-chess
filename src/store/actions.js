import * as types from "./mutations-type";

export default {
  stepNumber({ commit }) {
    commit(types.STEP_NUMBER);
  },
  girdData({ commit }, payload) {
    commit(types.ADD_GRID_DATA, payload);
  },
  deleteGridData({ commit }, index) {
    commit(types.DELETE_GRID_DATA, index);
  },
  isOverSet({ commit }, payload) {
    commit(types.IS_GAME_OVER, payload);
  },
};
