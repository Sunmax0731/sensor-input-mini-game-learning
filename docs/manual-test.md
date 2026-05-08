# 手動テスト

対象: センサー入力ミニゲーム教材 (Rank 61, IoT No.16)

Codex側では手動テスト未実施です。

作業ディレクトリ: `D:\AI\IoT\sensor-input-mini-game-learning`

```powershell
npm test
npm run cli
```


## 手順

1. `index.html` を静的サーバーで開き、タイトルと概要を確認する。
2. 4つの代表シナリオを順に選び、Canvasがblankでなく、Status / Accepted / Warnings / Score が変わることを確認する。
3. missing-required が error、warning と mixed-batch が warning、happy-path が pass になることを確認する。
4. 実機なしで検証できる simulator / mock device / CLI / Web dashboard / sample telemetry を境界にし、security/privacy とLAN安全性を整理します。
5. release asset 3件をダウンロードし、docs ZIP内に必要docsが含まれることを確認する。
