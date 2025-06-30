import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "shell",
  remotes: {
    remote_1: `remote_1@${process.env.REMOTE1_BASE_URL}/mf-manifest.json`,
    remote_2: `remote_1@${process.env.REMOTE2_BASE_URL}/mf-manifest.json`,
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
