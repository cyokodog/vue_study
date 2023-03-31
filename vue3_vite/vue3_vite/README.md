# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

---

## memo

https://zenn.dev/atoz/articles/fc97f337050f5d

- Japanese Language Pack for Visual Studio ... 日本語化
- ESLint ... 構文チェック、コード整形
- Prettier ... コード整形
- Volar ... Vue3 対応。強調表示、型チェックなど（Vetur は無効にすること）

```
> npm i -D eslint @vue/eslint-config-typescript
→ @vue/eslint-config-typescript ... typescript対応
> npm i -D prettier eslint-config-prettier
→ eslint-config-prettier ... eslintとprettierの競合を防ぐ
```

.vscode/settings.json

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true
}
```

- printWidth ... 単純に行数が減るため。
- endOfLine ... 新規 vue 時の「Delete ␍」対策、要 VSCode 再起動
- htmlWhitespaceSensitivity ... タグ改行時の空白を許可する

.prettierrc

```
{
  "printWidth": 150,
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "ignore"
}
```

.eslintrc.js

```
module.exports = {
  root: true,
  env: {
    // ブラウザ、node.jsを利用
    browser: true,
    node: true,
    // es2021を利用
    es2021: true,
  },
  // prettierを入れないと、eslintで競合してwarningになる。
  extends: ["plugin:vue/vue3-recommended", "@vue/typescript/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // console.logを許可
    "no-console": "off",
    // ネーミングルールを追加
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: ["property"],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["class", "enum", "interface", "typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE"],
      },
    ],
  },
};

```

package.json

```
  "scripts": {
    ...
    "lint": "eslint --ext .ts,vue --ignore-path .gitignore .",
    "lint-fix": "eslint --ext .ts,vue --ignore-path .gitignore . && prettier --write src/**/*.{ts,vue}"
  },
```
