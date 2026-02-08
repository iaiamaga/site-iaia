import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'underline' | 'portal';
  children: React.ReactNode; // Pode ser texto, imagem, ou qualquer JSX
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'ghost', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ease-out outline-none overflow-hidden group";
  
  const variants = {
    ghost: "text-white/30 hover:text-white/70",
    underline: "text-white border-b border-white pb-1",
    portal: "px-8 py-4 border border-white/20 hover:border-white text-white hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Span de fundo para variante 'portal' */}
      {variant === 'portal' && (
        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
      )}
      
      {/* 
          O conteúdo do botão. 
          Adicionamos `flex items-center justify-center` para centralizar a imagem
          e `relative z-10 pointer-events-none` para que a imagem não capture cliques.
      */}
      <span className="relative z-10 pointer-events-none flex items-center justify-center h-full w-full">
        {children}
      </span>
    </button>
  );
};

