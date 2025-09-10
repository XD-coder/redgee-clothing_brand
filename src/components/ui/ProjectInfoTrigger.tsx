'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import ProjectInfoPopup from './ProjectInfoPopup';

export default function ProjectInfoTrigger() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button
        onClick={handleShowPopup}
        className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-40"
        title="Project Information"
      >
        <Info className="h-5 w-5" />
      </button>

      {/* Custom popup instance that can be manually triggered */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="bg-background rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 relative border border-border">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-full transition-colors"
            >
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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
                <a
                  href="/docs"
                  onClick={handleClosePopup}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Project Documentation</span>
                </a>
                
                <button
                  onClick={handleClosePopup}
                  className="w-full border border-border text-foreground py-2 px-6 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  Continue Exploring
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
