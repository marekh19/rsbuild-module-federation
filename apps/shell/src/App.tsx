import "./App.css";
import { Container } from "./components/Container/Container";
import { Remote1Wrapper } from "./components/Remote1Wrapper";
import { Remote2Wrapper } from "./components/Remote2Wrapper";
import { useCounterStore } from "shared-counter";
import { Button } from "ui";

export const App = () => {
  const count = useCounterStore((s) => s.count);
  const handleIncrement = useCounterStore((s) => s.increment);

  return (
    <Container intent="red" label="Consumer App">
      <div className="app-layout">
        <header className="app-header">
          Rsbuild Module Federation
          <Button onClick={handleIncrement}>Shared count: {count}</Button>
        </header>
        <main className="app-main">
          <Container intent="yellow" label="Provider 1 App">
            <Remote1Wrapper />
          </Container>
          <Container intent="blue" label="Provider 2 App">
            <Remote2Wrapper />
          </Container>
        </main>
      </div>
    </Container>
  );
};
