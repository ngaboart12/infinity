import React, { ReactNode } from 'react';
import './globals.css'

interface MyComponentProps {
  children: ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default MyComponent;