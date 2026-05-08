# センサー入力ミニゲーム教材

sensor-input-mini-game-learning は、NON PICKUP 優先リスト Rank 61 / IoT No.16 から昇格した closed alpha プロダクトです。M5Stackの傾き、ボタン、ジャイロをブラウザゲームや教材に接続する。

## Quick Start

```powershell
cd D:\AI\IoT\sensor-input-mini-game-learning
npm test
npm run cli
```

## Closed Alpha Scope

- 公開想定: GitHub Release / GitHub Pages
- 対象ユーザー: センサー入力をゲーム教材として試したい学習者と教材作成者
- 手動テスト: Codex側では未実施。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記載

## Architecture

- `src/core`: プロダクト定義と代表シナリオ評価
- `src/validators`: representative suite と期待結果の検証
- `src/report`: validation result、web smoke、QCDS metrics、deterministic docs ZIP の生成
- `src/review-model`: QCDS 評価モデル
- `src/cli`: CLI 検証入口
- `src/web`: 静的Web表示と主要操作
- `src/simulator` / `src/device-adapter` / `src/host-adapter`: mock telemetry と安全なLAN検証境界

## Release Artifacts

- `dist/sensor-input-mini-game-learning-docs.zip`
- `dist/validation-result.json`
- `dist/web-smoke-result.json`
- `docs/release-evidence.json`
