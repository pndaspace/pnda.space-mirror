import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname, 'src'); // Assuming src directory is at the root level

const compat = new FlatCompat({
	baseDirectory: srcDir,
	recommendedConfig: pluginJs.configs.recommended,
});

export default [
	{languageOptions: {globals: globals.browser}},
	...compat.extends('xo-typescript'),
	pluginReactConfig,
];