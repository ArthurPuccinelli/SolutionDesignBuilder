import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  const baseStyles = "px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500",
  };

  return (
    <button
      type="submit" // Default to submit for forms
      {...rest}
      className={`${baseStyles} ${variantStyles[variant]} ${rest.className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
