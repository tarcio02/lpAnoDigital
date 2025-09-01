/* .eslintrc.cjs */
module.exports = {
  env: { browser: true, es2023: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["@typescript-eslint", "react", "react-hooks", "react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-refresh/recommended",
    "prettier", // mantém por último
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ (Vite) não precisa importar React
  },
};
