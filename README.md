# sandbox-husky-lint_staged

## create package.json

```
yarn init -y
```

## husky
### Automatic Install

```
# Yarn 1
yarn init -y
npx husky-init && yarn
```

> It will setup husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit.

husky のセットアップ、package.json の修正、そして編集可能なサンプル pre-commit フックの作成が行われます。デフォルトでは、コミット時にnpm testが実行されます。

https://typicode.github.io/husky/#/?id=automatic-recommended

## lint-staged
### Why

> Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.
> This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

Lintingは、コードをコミットする前に実行するとより効果的です。そうすることで、リポジトリにエラーを残さないようにすることができますし、コードのスタイルを強制することもできます。しかし、プロジェクト全体に対してLint処理を行うのは時間がかかりますし、Lint処理の結果が無意味になる可能性もあります。最終的には、コミットされるファイルだけをlintしたいものです。
このプロジェクトには、ステージングされたファイルのリストを引数として、指定されたグロブパターンでフィルタリングして任意のシェルタスクを実行するスクリプトが含まれています。

### Install

```
yarn add -D lint-staged
```

### Setup

```sh:.husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

```json:package.json
  "lint-staged": {
    "*.{txt}": "echo lint-staged!!"
  }
```

https://github.com/okonet/lint-staged#examples
