import React from "react";

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  fixedRate: number;
}

const Slider: React.FC<SliderProps> = ({
  label,
  value,
  onChange,
  fixedRate,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="range"
        min="0"
        max="500"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span> (Rate: {fixedRate.toFixed(2)})</span>
    </div>
  );
};

export default Slider;
