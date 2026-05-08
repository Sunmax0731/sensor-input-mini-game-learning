# 要件定義

対象: センサー入力ミニゲーム教材 (Rank 61, IoT No.16)

## 目的

M5Stackの傾き、ボタン、ジャイロをブラウザゲームや教材に接続する。

## 課題

センサー実験が値の表示だけで終わりやすい。

## 要件

- 必須入力 `deviceId`、`sensorType`、`sampleRate`、`calibrationProfile` を検証する。
- happy-path / missing-required / warning / mixed-batch を代表シナリオとして保持する。
- CLI、静的Web UI、自動テスト、docs ZIP、release evidence を同一repoで完結させる。
- 正式docsはNON PICKUP行、ZIP metadata、ドメインdocsを根拠に正常な日本語で再構成する。

実機なしで検証できる simulator / mock device / CLI / Web dashboard / sample telemetry を境界にし、security/privacy とLAN安全性を整理します。
