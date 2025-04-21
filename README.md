# LeetCode TypeScript ソルバー

TypeScript で LeetCode 問題を解くためのシンプルなプロジェクトです。

## セットアップ

```bash
# 依存関係のインストール
npm install
```

## 使い方

### プロジェクトの起動

```bash
npm start
```

### 特定の問題の実行

```bash
npm run solve src/problems/your-problem-file.ts
```

例：

```bash
npm run solve src/problems/example.ts
```

## ディレクトリ構造

- `/src/problems/` - LeetCode 問題のソリューションを保存するディレクトリ
  - 各問題は独立した TypeScript ファイルとして保存されます
  - サンプル: `example.ts`

## 新しい問題の追加方法

1. `src/problems/` ディレクトリに新しい TypeScript ファイルを作成します
2. 問題のロジックを実装します
3. `npm run solve` コマンドで実行します
