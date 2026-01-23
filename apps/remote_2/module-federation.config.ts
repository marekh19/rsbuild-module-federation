import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "remote_2",
  exposes: {
    ".": "./src/components/Remote2Component.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    "react-dom": { singleton: true, requiredVersion: false },
    zustand: { singleton: true, requiredVersion: false },
    "shared-counter": { singleton: true, requiredVersion: false },
    ui: { singleton: true, requiredVersion: false },
  },
});
