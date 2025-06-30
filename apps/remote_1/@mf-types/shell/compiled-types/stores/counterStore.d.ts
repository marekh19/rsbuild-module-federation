export type CounterStore = {
    count: number;
    increment: () => void;
};
export declare const useCounterStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CounterStore>>;
