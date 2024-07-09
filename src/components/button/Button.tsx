import {ReactElement, useState} from "react";

export interface ButtonProps {
  label: string;
  icon?: ReactElement;
  onClick?: () => void;
  primary: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  primary,
  icon,
}) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    onClick?.();
  };

  return (
    <button
      onClick={onClick ? onClick : handleButtonClick}
      className={`${primary ? "btn-primary" : "btn-secondary"} btn `}
    >
      {icon && <span>{icon}</span>}
      {label + ` ${count}`}
    </button>
  );
};
