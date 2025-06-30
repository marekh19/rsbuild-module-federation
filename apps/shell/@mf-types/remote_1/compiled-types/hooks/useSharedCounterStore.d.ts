import type { CounterStore } from "shell/counterStore";
export declare const useSharedCounterStore: () => import("zustand").UseBoundStore<import("zustand").StoreApi<CounterStore>>;
