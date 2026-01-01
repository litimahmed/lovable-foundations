import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const LoadingSpinner = ({ onComplete, minDuration = 2000 }: LoadingSpinnerProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 300);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-accent flex items-center justify-center rounded">
            <span className="text-accent-foreground font-display text-2xl font-bold">A</span>
          </div>
          <span className="text-2xl font-display text-light tracking-wider">AVERIX</span>
        </div>
      </div>

      {/* Spinning Circle */}
      <div className="relative w-24 h-24 mb-8">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${progress * 2.83} 283`}
            className="transition-all duration-100"
          />
        </svg>
        {/* Center percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-light font-display text-lg">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Loading text with dots animation */}
      <div className="flex items-center gap-1">
        <span className="text-light/60 text-sm tracking-[0.3em] uppercase font-display">Loading</span>
        <span className="flex gap-1">
          <span className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      </div>
    </div>
  );
};
