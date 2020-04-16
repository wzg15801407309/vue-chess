//css单位转换
//在打包的时候在转换的

module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      //视窗的宽度 对应的是我们设计稿的宽度（但是设计稿给的是像素  是这里宽度的2倍）
      viewportWidth: 375,
      //视窗的高度  对应设计稿的高度（可以不用设置）
      viewportHeight: 667,
      //指定‘px’转换的视窗单位 简易以宽度 ‘vw’
      viewportUnit: "vw",
      //指定‘px’转换为视窗单位的小数位数
      unitPrecision: 5,
      //转换的时候 忽略的不需要转的
      selectorBlackList: [".ignore", "tab-bar", "tab-bar-item"],
      //小于或等于1px的不转换
      minPixelValue: 1,
      //允许在媒体查询中转换‘px’
      mediaQuery: false,
    },
  },
};
