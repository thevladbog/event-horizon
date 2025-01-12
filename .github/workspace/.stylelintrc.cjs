const {resolve} = require('path');

const basePath = resolve(__dirname, 'node_modules');
const groupSelectors = `${basePath}/stylelint-group-selectors`;
const cssTreeValidator = `${basePath}/stylelint-csstree-validator`;
const prettierValidator = `${basePath}/stylelint-prettier/recommended`;

module.exports = {
    plugins: [groupSelectors, cssTreeValidator, prettierValidator],
    extends: [
        'stylelint-prettier/recommended',
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended',
        'stylelint-scss',
        'stylelint-a11y/recommended',
    ],
    customSyntax: require('postcss-scss'),
    rules: {
        // Possible errors
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'property-no-unknown': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'media-feature-name-no-unknown': true,
        'no-unknown-animations': true,

        // Limit language features
        'color-named': 'never',
        'value-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'declaration-no-important': true,
        'declaration-block-single-line-max-declarations': 1,
        'selector-max-id': 1,
        'selector-max-universal': 1,
        'selector-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'value-keyword-case': ['lower', {camelCaseSvgKeywords: true}],
        'selector-type-case': 'lower',
        'rule-empty-line-before': ['always', {ignore: ['inside-block']}],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless'],
                ignore: ['inside-block'],
            },
        ],

        // SCSS
        'scss/at-rule-no-unknown': true,
        'prettier/prettier': true,
    },
};
