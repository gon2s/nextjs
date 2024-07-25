import React, { HTMLAttributes, ReactElement } from "react";

interface IconButtonProps {
  onClick: () => void;
  children: ReactElement;
  className?: HTMLAttributes<HTMLDivElement>;
}

const IconButton = ({ onClick, children, className }: IconButtonProps) => {
  return (
    <div
      className={`${"cursor-pointer flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full"} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
