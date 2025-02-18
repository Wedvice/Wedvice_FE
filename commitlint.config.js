module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(\w+)] (.*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'bugfix', 'docs', 'refactor', 'style', 'test', 'chore'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
