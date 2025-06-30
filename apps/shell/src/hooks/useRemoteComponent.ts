import { useState, useEffect, useCallback, type ComponentType } from "react";

type UseRemoteComponentResult<T> = {
  Component: ComponentType<T> | null;
  isLoading: boolean;
  hasError: boolean;
  retry: () => void;
};

export function useRemoteComponent<T = {}>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
): UseRemoteComponentResult<T> {
  const [Component, setComponent] = useState<ComponentType<T> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const retry = useCallback(() => {
    setRetryCount((prev) => ++prev);
  }, []);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    setHasError(false);
    setComponent(null);

    importFn()
      .then((mod) => {
        if (!isMounted) return;
        setComponent(() => mod.default);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn("Failed to load remote module:", err);
        if (!isMounted) return;
        setHasError(true);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [importFn, retryCount]);

  return { Component, isLoading, hasError, retry };
}
