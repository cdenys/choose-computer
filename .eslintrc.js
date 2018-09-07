module.exports = {
    root: true,
    extends: ['doctolib', 'doctolib/react', 'prettier', 'prettier/react'],
    env: {
        jest: true,
    },
    settings: {
        'import/resolver': {
            node: {
                // As configured in webpack
                moduleDirectory: ['node_modules', 'app/assets/javascripts', 'jestUtils', 'app/assets/images'],
            },
        },
    },
    plugins: ['prefer-object-spread'],
    rules: {
        // Overrides.
        'no-prototype-builtins': 'off',
        'no-unexpected-multiline': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-plusplus': 'off',
        'prefer-object-spread/prefer-object-spread': 'error',
        'prefer-destructuring': 'off',
        'jsx-a11y/click-events-have-key-events': 'off', // Should be errors and we should implement them to have accessibility !!
        'jsx-a11y/mouse-events-have-key-events': 'off',

        // The following rules ought to error but they are not enforced everywhere in the project (yet) so we leave them as
        // warnings for now.
        'newline-per-chained-call': 'warn',
        'no-use-before-define': ['warn', { functions: false, classes: false }],
        'no-restricted-syntax': 'warn',
        'no-sequences': 'warn',
        'consistent-return': 'warn',
        'no-return-assign': 'warn',

        'import/no-named-as-default': 'off',
        'import/first': 'warn',
        'import/no-named-as-default-member': 'warn',

        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/label-has-for': 'warn',
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                labelComponents: [],
                labelAttributes: [],
                controlComponents: ['NumericInput', 'Select', 'Checkbox', 'Text', 'RadioButton'],
                depth: 3,
                assert: 'either',
            },
        ],
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'jsx-a11y/no-autofocus': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/media-has-caption': 'off',

        'react/sort-comp': 'warn',
        'react/no-array-index-key': 'warn',
        'react/prefer-es6-class': 'warn',
        'react/no-find-dom-node': 'warn',
        'react/no-multi-comp': 'off',
        'react/destructuring-assignment': 'off',
    },
}
