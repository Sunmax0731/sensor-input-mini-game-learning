export const product = {
  "repo": "sensor-input-mini-game-learning",
  "domain": "IoT",
  "rank": 61,
  "tier": "P3",
  "score": 51,
  "ideaNo": 16,
  "ideaName": "センサー入力ミニゲーム教材",
  "field": "センサー入力教材",
  "publicTarget": "GitHub Release / GitHub Pages",
  "platformScope": "sensor simulator / mock device / Web dashboard",
  "overview": "仮想センサー値をミニゲーム入力へ変換し、実機なしでもノイズ、欠落、反応の扱いを学べる教材。",
  "problem": "IoT教材はセンサー実機や配線に依存し、入力値の揺れや欠落を安全に試しにくい。",
  "differentiation": "mock device、sample telemetry、ブラウザ教材を同じ代表シナリオで検証する。",
  "audience": "IoT初学者、学校教材担当、ワークショップ運営者",
  "requiredInputs": [
    "sensorType",
    "reading",
    "playerAction",
    "lessonMode"
  ],
  "modules": [
    "simulator",
    "mock-device",
    "telemetry-host",
    "web-dashboard",
    "scenario-validator"
  ],
  "accent": "#0f766e",
  "secondary": "#1f2937",
  "scenarioNouns": [
    "仮想センサー",
    "ミニゲーム",
    "教材ログ"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === 'mixed-batch') {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + '-' + index, inputs, flags: index === 2 ? ['needsReview'] : [] }));
    const accepted = results.filter((result) => result.status !== 'error').length;
    const warnings = results.filter((result) => result.status !== 'pass').length;
    return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted, warnings, missing: results.flatMap((result) => result.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === '');
  if (missing.length) return { id: scenario.id, status: 'error', accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((value) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown|overflow|rush|storm|fatigue|unstable|crowded|high/i.test(String(value)));
  const warnings = (scenario.flags || []).includes('needsReview') || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, domain: product.domain, releaseTarget: product.publicTarget, platformScope: product.platformScope, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
