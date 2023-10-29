import { Component, ErrorInfo } from 'react';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../models/ErrorBoundary.interface';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h1>Sorry.. there was an error</h1>
          <p>Plase reload the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
