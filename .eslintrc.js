module.exports = {
  extends: ['plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 'error', // 不能使用var声明变量
    'no-extra-semi': 'error', // 不允许不必要的分号
    // 这东西有点问题:https://typescript-eslint.io/rules/indent
    // '@typescript-eslint/indent': ['error', 2],
    'import/extensions': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    indent: ['error', 2, { SwitchCase: 1 }], // error类型，缩进2个空格
    'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
    'eol-last': 0, // 不检测新文件末尾是否有空行
    semi: ['error', 'always'], // 在语句后面加分号
    quotes: ['error', 'single'], // 字符串使用单双引号,double,single
    'no-console': ['error', { allow: ['warn', 'error'] }], // 不允许使用console.log()
    'arrow-parens': 0,
    'no-new': 0, //允许使用 new 关键字
    'comma-dangle': [2, 'only-multiline'], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline多行模式必须带逗号，单行模式不能带逗号
    'no-undef': 0,
  },
  overrides: [
    {
      files: ['**/demo/**'],
      rules: { 'no-console': 'off' }, // 允许在demo中使用 console
    },
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { modules: true },
  },
};
