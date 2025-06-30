import { useCallback } from "react";
import { useRemoteComponent } from "../hooks/useRemoteComponent";
import { Button } from "ui";

export const Remote2Wrapper = () => {
  const importRemote = useCallback(() => import("remote_2"), []);

  const {
    Component: Remote2,
    isLoading,
    hasError,
    retry,
  } = useRemoteComponent(importRemote);

  if (isLoading) return <div>⏳ Loading...</div>;
  if (hasError) {
    return (
      <div>
        ❌ Remote 2 is not available.
        <Button onClick={retry}>Try again</Button>
      </div>
    );
  }
  if (!Remote2) return null;

  return <Remote2 />;
};
