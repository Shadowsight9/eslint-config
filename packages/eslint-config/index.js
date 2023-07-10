const { isPackageExists } = require('local-pkg')

const useVue = isPackageExists('vue')
const useTypescript = isPackageExists('typescript')
const useUnocss = isPackageExists('unocss')
const useReact = isPackageExists('react')

if (!useTypescript) console.warn('[@shadowsight9/eslint-config] TypeScript is not installed, fallback to JS only.')

const extendsList = [
  useTypescript ? '@shadowsight9/eslint-config-ts' : '@shadowsight9/eslint-config-basic',
  useVue ? 'plugin:vue/vue3-recommended' : null,
  useReact ? ['plugin:react/recommended', 'plugin:react-hooks/recommended'] : null,
  useUnocss ? 'plugin:@unocss/recommended' : null,
]
const vueRules = {
  'vue/multi-word-component-names': 'off',
  'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
  'vue/max-attributes-per-line': 'off',
  'vue/no-v-html': 'off',
  'vue/require-default-prop': 'off',
  'vue/component-tags-order': ['warn', { order: ['script', 'template', 'style'] }],
  'vue/multiline-html-element-content-newline': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  'vue/component-options-name-casing': ['error', 'PascalCase'],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/define-macros-order': ['error', {
    order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
  }],
  'vue/no-restricted-v-bind': ['warn', '/^v-/'],
  'vue/no-useless-v-bind': 'error',
  'vue/no-unused-refs': 'warn',
  'vue/padding-line-between-blocks': ['warn', 'always'],
  'vue/prefer-separate-static-class': 'warn',

  // Extensions rules, need to align with base rules
  'vue/array-bracket-spacing': ['error', 'never'],
  'vue/arrow-spacing': ['error', { before: true, after: true }],
  'vue/block-spacing': ['error', 'always'],
  'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'vue/comma-dangle': ['error', 'always-multiline'],
  'vue/comma-spacing': ['error', { before: false, after: true }],
  'vue/comma-style': ['error', 'last'],
  'vue/dot-location': ['error', 'property'],
  'vue/dot-notation': ['error', { allowKeywords: true }],
  'vue/eqeqeq': ['error', 'smart'],
  'vue/func-call-spacing': ['error', 'never'],
  'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'vue/keyword-spacing': ['error', { before: true, after: true }],
  'vue/no-constant-condition': 'warn',
  'vue/no-empty-pattern': 'error',
  'vue/no-extra-parens': ['error', 'functions'],
  'vue/no-irregular-whitespace': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement' ],
  'vue/no-sparse-arrays': 'warn',
  'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
  'vue/object-curly-spacing': ['error', 'always'],
  'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  'vue/operator-linebreak': ['error', 'before'],
  'vue/prefer-template': 'error',
  'vue/quote-props': ['error', 'consistent-as-needed'],
  'vue/space-in-parens': ['error', 'never'],
  'vue/space-infix-ops': 'error',
  'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
  'vue/template-curly-spacing': 'error',
}

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: extendsList.filter(Boolean).flat(),
  rules: {
    ...(useVue ? vueRules : {}),
  },
}


