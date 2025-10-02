# rsbuild-module-federation

Monorepo for experimenting with Rsbuild Module Federation.

## Apps

- **shell**: Host application (module federation shell)
- **remote_1**: Remote app exposing components
- **remote_2**: Remote app exposing components

## Packages

- **shared-counter**: Shared Zustand store for counters
- **ui**: Shared UI components

## Getting Started

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Start all apps (in separate terminals):

   ```sh
   pnpm --filter remote_1 dev
   pnpm --filter remote_2 dev
   pnpm --filter shell dev
   ```

3. For production preview:

   ```sh
   pnpm --filter remote_1 preview
   pnpm --filter remote_2 preview
   pnpm --filter shell preview
   ```

---

## Monorepo Tooling

This repo uses **Turborepo** for managing tasks across packages and apps.

- To run dev servers for all apps in parallel:

  ```sh
  pnpm dev
  ```

- To build all apps and packages in parallel:

  ```sh
  pnpm build
  ```

- To preview all apps in parallel:

  ```sh
  pnpm preview
  ```
