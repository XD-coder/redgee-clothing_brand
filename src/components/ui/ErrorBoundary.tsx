'use client';

import React from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    // Track error for analytics
    if (typeof window !== 'undefined') {
      // You can integrate with error tracking services here
      console.error('Error tracked:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      });
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-red-100 rounded-full">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Oops! Something went wrong
            </h1>
            <p className="text-muted-foreground">
              We're sorry for the inconvenience. An error occurred while loading this page.
            </p>
          </div>

          {process.env.NODE_ENV === 'development' && error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
              <h3 className="font-medium text-red-800 mb-2">Error Details:</h3>
              <pre className="text-sm text-red-600 whitespace-pre-wrap break-words">
                {error.message}
              </pre>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={resetError}
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="w-full border border-border text-foreground py-3 px-6 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>If this problem persists, please contact our support team.</p>
          <Link href="/contact" className="text-primary hover:underline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

// Hook for functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: { componentStack?: string }) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // Track error for analytics
    if (typeof window !== 'undefined') {
      console.error('Error tracked:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo?.componentStack,
      });
    }
  };
}

export default ErrorBoundary;
