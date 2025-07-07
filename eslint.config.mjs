// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;




import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Disable all ESLint rules
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      
      // Next.js rules
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      
      // Basic ESLint rules
      "no-console": "off",
      "no-debugger": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-empty": "off",
      
      // React rules
      "react/jsx-key": "off",
      "react/no-unescaped-entities": "off",
      
      // Add more rules here if needed
    },
  },
];

export default eslintConfig;
