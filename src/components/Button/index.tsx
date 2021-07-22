import React from "react";

interface Props {
  size?: string;
  textColor?: string;
  bgColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ 
    size,
    textColor,
    bgColor,
    children,
    onClick
  }) => { 

  return (
    <button 
      onClick={onClick}
      className={`text-${size} bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded hover:bg-blue-900`}
    >
    {children}
    </button>
  );
}

export default Button;