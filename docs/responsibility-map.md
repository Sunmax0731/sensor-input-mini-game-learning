# 責務分割

- simulator: センサー入力ミニゲーム教材 の closed alpha 検証責務。
- mock-device: センサー入力ミニゲーム教材 の closed alpha 検証責務。
- telemetry-host: センサー入力ミニゲーム教材 の closed alpha 検証責務。
- web-dashboard: センサー入力ミニゲーム教材 の closed alpha 検証責務。
- scenario-validator: センサー入力ミニゲーム教材 の closed alpha 検証責務。

共通: `src/core` が評価ロジック、`src/validators` が代表シナリオ検証、`src/report` が証跡生成、`src/web` がブラウザ表示を担当する。
