import { useCallback } from "react";
import { useRemoteComponent } from "../hooks/useRemoteComponent";
import { Button } from "ui";

export const Remote1Wrapper = () => {
  const importRemote = useCallback(() => import("remote_1"), []);

  const {
    Component: Remote1,
    isLoading,
    hasError,
    retry,
  } = useRemoteComponent(importRemote);

  if (isLoading) return <div>⏳ Loading...</div>;
  if (hasError) {
    return (
      <div>
        ❌ Remote 1 is not available.
        <Button onClick={retry}>Try again</Button>
      </div>
    );
  }
  if (!Remote1) return null;

  return <Remote1 />;
};
