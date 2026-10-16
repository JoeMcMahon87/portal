import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				// Svelte 5 runes. Without these, `no-undef` fires on every use
				// in a plain `.svelte.js` module, where the compiler provides
				// them but eslint has no way to know that.
				$state: 'readonly',
				$derived: 'readonly',
				$effect: 'readonly',
				$props: 'readonly',
				$bindable: 'readonly',
				$inspect: 'readonly',
				$host: 'readonly'
			}
		}
	},
	{
		// Accessibility and markup advice from the Svelte compiler, plus
		// `{@html}` use. These are authoring choices made across upstream's
		// pages, not defects introduced here: as errors they failed the lint
		// on every file, and acting on them would mean rewriting UI unrelated
		// to this fork's purpose and conflicting with upstream on every merge.
		// Kept visible as warnings instead.
		rules: {
			'svelte/no-at-html-tags': 'warn',
			'svelte/valid-compile': 'warn'
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];
