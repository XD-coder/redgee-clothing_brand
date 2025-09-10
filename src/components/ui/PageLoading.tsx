import { ReactNode } from 'react';

interface PageLoadingProps {
  children?: ReactNode;
  isLoading?: boolean;
}

export default function PageLoading({ children, isLoading = true }: PageLoadingProps) {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        {/* Animated logo */}
        <div className="animate-pulse">
          <img 
            src="/logo/logo.webp" 
            alt="Stitches Logo" 
            className="h-16 w-16 mx-auto opacity-60" 
          />
        </div>
        
        {/* Loading spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-border border-t-primary"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-muted-foreground text-sm animate-pulse">
          Loading your premium experience...
        </p>
      </div>
    </div>
  );
}
