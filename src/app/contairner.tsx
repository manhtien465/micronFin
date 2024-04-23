import React, { ReactNode } from 'react';

interface ContairnerProps {
  children: ReactNode;
}

const Contairner: React.FC<ContairnerProps> = ({ children }) => {
  return (
    <section className="mx-auto max-w-7xl px-1">
      {children}
    </section>
  );
};

export default Contairner;