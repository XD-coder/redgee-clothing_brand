'use client';

import { useState, useEffect } from 'react';
import { X, Info, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ProjectInfoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if user hasn't seen it
    const hasSeenProjectInfo = localStorage.getItem('project-info-seen');
    
    if (!hasSeenProjectInfo) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('project-info-seen', 'true');
  };

  const handleVisitDocs = () => {
    localStorage.setItem('project-info-seen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-background rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 relative border border-border">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="text-center space-y-4">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <Info className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Demo Project
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Welcome to <span className="font-semibold text-primary">Stitches</span>! 
              This is a demonstration e-commerce website created to showcase modern web development skills.
            </p>
          </div>

          {/* Content */}
          <div className="bg-secondary rounded-lg p-4 text-left space-y-2">
            <div className="text-sm">
              <h4 className="font-medium text-foreground mb-2">Project Features:</h4>
              <ul className="text-muted-foreground space-y-1 text-xs">
                <li>• Premium e-commerce experience</li>
                <li>• Next.js 14 with TypeScript</li>
                <li>• Responsive design & animations</li>
                <li>• Complete shopping functionality</li>
              </ul>
            </div>
          </div>

          {/* Creator Info */}
          <div className="text-sm text-muted-foreground">
            <p>Created by <span className="font-semibold text-primary">Kartikey Mishra</span></p>
            <p className="text-xs">
              <a 
                href="mailto:kartikay.m1210@gmail.com" 
                className="text-primary hover:underline"
              >
                kartikay.m1210@gmail.com
              </a>
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <Link
              href="/docs"
              onClick={handleVisitDocs}
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>View Project Documentation</span>
            </Link>
            
            <button
              onClick={handleClose}
              className="w-full border border-border text-foreground py-2 px-6 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors text-sm"
            >
              Continue Exploring
            </button>
          </div>

          {/* Note */}
          <p className="text-xs text-muted-foreground pt-2">
            This popup will only appear once. You can always visit the documentation page from the navigation menu.
          </p>
        </div>
      </div>
    </div>
  );
}
