module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": "error",

    "no-debugger": "error",

    // 要求 Switch 语句中有 Default 分支
    "default-case": ["error"],

    // 不允许多个空行
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1
      }
    ],

    // 要求语句块之前的空格
    "space-before-blocks": ["error", "always"],

    // 强制箭头函数使用花括号
    "arrow-body-style": ["error", "always"],

    // 调用无参构造函数时带括号
    "new-parens": ["error"],

    // 箭头函数的参数必须使用圆括号括起来
    "arrow-parens": ["error", "always"],

    // 强制 if、else、while、do-while 和 for 等语句加花括号
    "nonblock-statement-body-position": ["error", "below"],

    // 构造函数首字母大写
    "new-cap": ["error"],

    // 要求 import 语句后的语句换行
    // "import/newline-after-import": ["error"],

    "no-var": "error"
  }
};
