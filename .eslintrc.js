module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin,
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    ],
    rules: {
        'no-console': 'warn',
        'no-eval': 'error',
        'sort-imports': ['error', { allowSeparatedGroups: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
    env: {
        node: true,
    },
    ignorePatterns: ['cypress/support/pages/*.js', 'cypress/e2e/mocha/**/*.js'],
};
