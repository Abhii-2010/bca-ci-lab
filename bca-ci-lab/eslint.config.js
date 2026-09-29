module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'readonly',
                test: 'readonly',
                expect: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single']
        }
    }
];
