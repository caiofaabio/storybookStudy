import {useEffect, useState} from "react";

export interface ToggleSwitchProps {
  isChecked?: boolean;
  onToggle: (isChecked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked = false,
  onToggle,
}) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleToggle = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    onToggle(newCheckedState);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={handleToggle} />
      <span className="switch"></span>
    </label>
  );
};
