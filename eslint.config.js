// eslint.config.js
import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import jsdoc from "eslint-plugin-jsdoc";
import js from "@eslint/js";
// import babelParser from "@babel/eslint-parser";

export default defineConfig([{
    // extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    plugins: {
        react,
        "react-native": reactNative,
        jsdoc: jsdoc,
        eslintJs: js,
    },

    extends: ["eslintJs/recommended"],

    languageOptions: {
        // parser: babelParser,
        ecmaVersion: 2025,
        sourceType: "module",
        parserOptions: {
            // requireConfigFile: false,
            // babelOptions: {
            //     presets: ["babel-preset-expo"],
            // },
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",

        "comma-dangle": ["error", "always-multiline"],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        // "no-unused-vars": ["error", { 
        //     argsIgnorePattern: "^_",
        //     varsIgnorePattern: "^React$",
        // }],

        "no-undef": ["error", { 
            typeof: false,
        }],

        "react/prop-types": [0],

        "jsdoc/require-jsdoc": ["error", {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: false,
                FunctionExpression: true,
            },
        }],

        "jsdoc/require-returns": "off",

        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        "jsx-quotes": ["error", "prefer-single"],
    },
}, {
    files: ["**/*.test.js"],

    languageOptions: {
        globals: {
            console: "readonly",
        },
    },

    rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        "jsdoc/require-jsdoc": "off",
        "comma-dangle": "off",
    },
}, {
    files: ["**/hooks/**/*.js"],

    languageOptions: {
        globals: {
            console: "readonly",
        },
    },
}]);
