import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-full md:max-w-[88%] pr-10 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
