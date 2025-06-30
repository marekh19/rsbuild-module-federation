import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "shell",
  remotes: {
    remote_1: "remote_1@http://localhost:3001/mf-manifest.json",
    remote_2: "remote_2@http://localhost:3002/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    zustand: { singleton: true },
    "shared-counter": { singleton: true },
    ui: { singleton: true },
  },
});
