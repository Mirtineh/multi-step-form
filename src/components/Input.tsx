import { FunctionComponent } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: any;
  onChange: (value: any) => void;
}

const Input: FunctionComponent<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <label>
      <p className="text-marine-blue">{label}</p>
      <input
        type="text"
        className="w-full p-3 border rounded-md border-cool-gray focus:border-marine-blue focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default Input;
