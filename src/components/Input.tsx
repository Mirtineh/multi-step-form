import { FunctionComponent } from "react";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: FunctionComponent<InputProps> = ({ label, placeholder }) => {
  return (
    <label>
      <p className="text-marine-blue">{label}</p>
      <input
        type="text"
        className="w-full p-3 border rounded-md border-cool-gray focus:border-marine-blue focus:outline-none"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
