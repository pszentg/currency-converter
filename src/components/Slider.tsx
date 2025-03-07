import React from "react";

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  width?: string; // Optional width prop
}

const Slider: React.FC<SliderProps> = ({
  label,
  value,
  onChange,
  width = "100%",
}) => {
  return (
    <div style={{ width, padding: "15px 0" }}>
      <label>{label}</label>
      <input
        type="range"
        min="0"
        max="500"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: "100%" }} // Make the slider full width
      />
      <input
        type="number"
        value={value.toFixed(2)} // Round to 2 decimal places
        onChange={(e) => {
          const roundedValue = parseFloat(
            parseFloat(e.target.value).toFixed(2)
          ); // Round input to 2 decimal places
          onChange(roundedValue);
        }}
        style={{ width: "65px", marginLeft: "10px" }} // Wider input field
      />
    </div>
  );
};

export default Slider;
