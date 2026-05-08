export const product = {
  "repo": "sensor-input-mini-game-learning",
  "domain": "IoT",
  "rank": 61,
  "tier": "P3",
  "score": 51,
  "ideaNo": 16,
  "ideaName": "センサー入力ミニゲーム教材",
  "field": "ゲーム・教材",
  "publicTarget": "GitHub Release / GitHub Pages",
  "overview": "M5Stackの傾き、ボタン、ジャイロをブラウザゲームや教材に接続する。",
  "problem": "センサー実験が値の表示だけで終わりやすい。",
  "differentiation": "センサー、Web UI、ログをセットにして学習用に再利用する。",
  "audience": "センサー入力をゲーム教材として試したい学習者と教材作成者",
  "requiredInputs": [
    "deviceId",
    "sensorType",
    "sampleRate",
    "calibrationProfile"
  ],
  "modules": [
    "simulator",
    "device-adapter",
    "host-adapter",
    "web-dashboard"
  ],
  "accent": "#2f8f7f",
  "secondary": "#f0b429",
  "scenarioNouns": [
    "ジャイロ迷路",
    "ボタン反射",
    "傾きターゲット"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === "mixed-batch") {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + "-" + index, inputs, flags: index === 2 ? ["needsReview"] : [] }));
    const accepted = results.filter((r) => r.status !== "error").length;
    const warnings = results.filter((r) => r.status !== "pass").length;
    return { id: scenario.id, status: warnings ? "warning" : "pass", accepted, warnings, missing: results.flatMap((r) => r.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === "");
  if (missing.length) return { id: scenario.id, status: "error", accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((v) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown/i.test(String(v)));
  const warnings = (scenario.flags || []).includes("needsReview") || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? "warning" : "pass", accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, releaseTarget: product.publicTarget, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
