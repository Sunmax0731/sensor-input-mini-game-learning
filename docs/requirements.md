# 要件定義

## 対象

| 61 | P3 | 51 | IoT | 16 | センサー入力ミニゲーム教材 | sensor-input-mini-game-learning | GitHub Release / GitHub Pages | IoT教材はセンサー実機や配線に依存し、入力値の揺れや欠落を安全に試しにくい。 |

## 目的

仮想センサー値をミニゲーム入力へ変換し、実機なしでもノイズ、欠落、反応の扱いを学べる教材。

## 必須要件

- 代表シナリオ4種を自動検証する。
- simulator、mock device、sample telemetry、Web dashboard、security/privacy の安全境界を必須とする。
- 文字化けを検出し、正式成果物へ残さない。
- QCDSの10段階スケールを機械検証する。
