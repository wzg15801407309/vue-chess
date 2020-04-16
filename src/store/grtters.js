export default {
  // 难度
  difficulty: (state) => state.difficulty,
  //步数
  step: (state) => state.stepNumber,
  //type 判断 偶数代表o 奇数代表x
  personType: (state) => state.stepNumber % 2,
  //dataList
  dataList: (state) => state.dataList,
  isover: (state) => state.isOver,
};
