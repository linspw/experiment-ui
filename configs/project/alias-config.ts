import { join, resolve } from "path";

const baseUrl = join(__dirname, "..", "..");

export const alias = {
  "@": resolve(baseUrl, "src"),
  "@root": resolve(baseUrl),
  "@api": resolve(baseUrl, "src/api"),
  "@assets": resolve(baseUrl, "src/assets"),
  "@styles": resolve(baseUrl, "src/styles"),
  "@components": resolve(baseUrl, "src/components"),
  "@composables": resolve(baseUrl, "src/composables"),
  "@layouts": resolve(baseUrl, "src/layouts"),
  "@modules": resolve(baseUrl, "src/modules"),
  "@pages": resolve(baseUrl, "src/pages"),
  "@plugins": resolve(baseUrl, "src/plugins"),
  "@router": resolve(baseUrl, "src/router"),
  "@services": resolve(baseUrl, "src/services"),
  "@settings": resolve(baseUrl, "configs", "settings"),
  "@utils": resolve(baseUrl, "src/utils"),
};
