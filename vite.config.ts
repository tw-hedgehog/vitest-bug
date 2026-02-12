import { preview } from "@vitest/browser-preview";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      provider: preview(),
      enabled: true,
      // at least one instance is required
      instances: [{ browser: "chromium" }],
    },
  },
});
