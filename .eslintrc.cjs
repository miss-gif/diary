module.exports = {
  // ESLint 구성 옵션입니다.
  root: true, // ESLint가 현재 디렉토리를 최상위 디렉토리로 간주합니다.
  env: { browser: true, es2020: true }, // 브라우저 환경 및 ES2020을 사용합니다.
  extends: [
    // 기본 설정 및 플러그인을 확장합니다.
    "eslint:recommended", // 기본적인 ESLint 규칙을 사용합니다.
    "plugin:react/recommended", // React 규칙을 사용합니다.
    "plugin:react/jsx-runtime", // JSX를 지원하는 React 플러그인을 사용합니다.
    "plugin:react-hooks/recommended", // React Hooks 규칙을 사용합니다.
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // 지정된 패턴의 파일을 무시합니다.
  parserOptions: { ecmaVersion: "latest", sourceType: "module" }, // 파서 옵션을 설정합니다.
  settings: { react: { version: "18.2" } }, // React 버전을 설정합니다.
  plugins: ["react-refresh"], // React 리프레시 플러그인을 활성화합니다.
  rules: {
    // 사용자 정의 규칙을 설정합니다.
    "react-refresh/only-export-components": [
      // React 리프레시 플러그인 규칙 설정입니다.
      "warn", // 경고 수준으로 설정합니다.
      { allowConstantExport: true }, // 상수를 허용합니다.
    ],
    "no-unused-vars": "off", // 사용되지 않은 변수를 허용합니다.
    "react/prop-types": "off", // 프로퍼티 타입을 검사하지 않습니다.
  },
};
