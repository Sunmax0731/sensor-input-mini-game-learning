# 実装計画

対象: センサー入力ミニゲーム教材 (Rank 61, IoT No.16)

## 方針

実機なしで検証できる simulator / mock device / CLI / Web dashboard / sample telemetry を境界にし、security/privacy とLAN安全性を整理します。

## 根拠

- NON PICKUP 優先表 Rank 61
- Source ZIP metadata: センサー入力ミニゲーム教材
- ドメインDesign / Architecture / AGENTS / SKILL

## 実行


作業ディレクトリ: `D:\AI\IoT\sensor-input-mini-game-learning`

```powershell
npm test
npm run cli
```


QCDS は Quality、Cost、Delivery、Satisfaction と定義し、S+ / S- / A+ / A- / B+ / B- / C+ / C- / D+ / D- の10段階で評価します。手動テストはCodex側では未実施のため、S+は付けません。

## 次アクション

ユーザー手動テスト後、結果をrelease evidenceとpost-MVP roadmapへ反映します。
