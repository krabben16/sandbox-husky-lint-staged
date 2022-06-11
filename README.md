# sandbox-husky-lint_staged

## Create package.json

```
yarn init -y
```
 
## Automatic Install

```
# Yarn 1
yarn init -y
npx husky-init && yarn
```

> It will setup husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit.

husky のセットアップ、package.json の修正、そして編集可能なサンプル pre-commit フックの作成が行われます。デフォルトでは、コミット時にnpm testが実行されます。

https://typicode.github.io/husky/#/?id=automatic-recommended
