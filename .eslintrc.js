module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,

  // parser: 'babel-eslint',  此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析

  // "plugins" 存放插件名字的列表

  // 此项指定环境的全局变量，
  env: {
    node: true
  },
  /**
   * 一个配置文件可以被基础配置中的已启用的规则继承。
    extends 属性值可以是：
      指定配置的字符串(配置文件的路径、可共享配置的名称、eslint:recommended 或 eslint:all)
      字符串数组：每个配置继承它前面的配置
    ESLint递归地扩展配置，因此基本配置也可以具有 extends 属性。extends 属性中的相对路径和可共享配置名从配置文件中出现的位置解析。
   `值为 "eslint:recommended" 的 extends 属性启用一系列核心规则，这些规则报告一些常见问题，
   可共享的配置 是一个 npm 包，它输出一个配置对象。要确保这个包安装在 ESLint 能请求到的目录下。
   插件 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 配置。要确保这个包安装在 ESLint 能请求到的目录下。
    * 
   */
  extends: [
    "plugin:vue/vue3-essential",  // 基本规则 
    "eslint:recommended",   
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],

  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    // sourceType: 'module', 
    ecmaVersion: 2020  // ECMAScript 版本
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0,
    // 关闭不能使用any类型规则
    "@typescript-eslint/no-explicit-any": 0,
    // ts每个函数都要显示声明返回值 0关闭
    "@typescript-eslint/explicit-module-boundary-types": 0,
    // 允许非空断言 !
    "@typescript-eslint/no-non-null-assertion": 0,
    // 禁用未声明的变量 0关闭
    "no-undef": 0,
    // 禁止出现重复的 case 标签 0关闭
    "no-duplicate-case": 0,

  }
}
