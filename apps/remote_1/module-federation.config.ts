import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "remote_1",
  exposes: {
    ".": "./src/components/Remote1Component.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    zustand: { singleton: true },
    "shared-counter": { singleton: true },
    ui: { singleton: true },
  },
});
