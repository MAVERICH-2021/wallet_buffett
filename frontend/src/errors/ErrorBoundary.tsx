import { useState, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: Props) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleError = (error: Error) => {
    setHasError(true);
    setError(error);
    // Log the error as you would in componentDidCatch
    console.error("Uncaught error:", error);
  };

  // Mimic componentDidCatch for the component itself, not its children
  useEffect(() => {
    try {
      // Simulate component logic that might throw an error
    } catch (error) {
      if (error instanceof Error) handleError(error);
    }
  }, []); // Empty dependency array means this runs once on mount

  if (hasError) {
    // Custom fallback UI when an error occurs
    return <div>An error occurred: {error?.toString()}</div>;
  }
  return <>{children}</>;
};

export default ErrorBoundary;
