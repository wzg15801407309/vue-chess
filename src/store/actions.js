import * as types from "./mutations-type";

export default {
  stepNumber({ commit }) {
    commit(types.STEP_NUMBER);
  },
  addGridData({ commit }, payload) {
    commit(types.ADD_GRID_DATA, payload);
  },
};
