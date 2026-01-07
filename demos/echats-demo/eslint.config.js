import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['src/**/*.{js,jsx,ts,tsx,vue}'],
        rules: {
            ...js.configs.recommended.rules,
            'no-undef': 'off',
            'no-console': 'off',
        },
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                extraFileExtensions: ['.vue'],
                parser: tsParser,
            },
        },
        plugins: {
            vue: pluginVue,
        },
    },
];