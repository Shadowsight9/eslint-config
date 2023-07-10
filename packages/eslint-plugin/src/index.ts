import genericSpacing from './rules/generic-spacing'
import topLevelFunction from './rules/top-level-function'
import noTsExportEqual from './rules/no-ts-export-equal'
import noCjsExports from './rules/no-cjs-exports'
import noConstEnum from './rules/no-const-enum'

export default {
  rules: {
    'generic-spacing': genericSpacing,
    'top-level-function': topLevelFunction,
    'no-cjs-exports': noCjsExports,
    'no-ts-export-equal': noTsExportEqual,
    'no-const-enum': noConstEnum,
  },
}
