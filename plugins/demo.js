const plugin = (opts = {}) => {
  return {
    postcssPlugin: '插件名字',

    // Rule(node) {},
    // Declaration(node) {},
    // AtRule(node) {},
    prepare(result) {
      // 公共逻辑

      return {
        Rule(node) {},
        Declaration(node) {},
        AtRule(node) {},
      }
    }
  }
}
