import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'underline' | 'portal';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'ghost', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-500 ease-out outline-none focus-visible:ring-1 focus-visible:ring-white/50";
  
  const variants = {
    ghost: "text-white/40 hover:text-white",
    underline: "text-white/60 hover:text-white border-b border-white/10 hover:border-white/40 pb-1",
    portal: "px-8 py-3 border border-white/20 hover:border-white text-white hover:text-black overflow-hidden group"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {variant === 'portal' && (
        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};