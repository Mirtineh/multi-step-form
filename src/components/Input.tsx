import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectErrors } from "../store/plans";
import { ErrorType } from "../validation";

interface InputProps {
  label: string;
  placeholder: string;
  value: any;
  onChange: (value: any) => void;
  type: keyof ErrorType;
}

const Input: FunctionComponent<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
}) => {
  const errors = useAppSelector(selectErrors);
  return (
    <label>
      <div className="flex justify-between">
        <p className="text-marine-blue">{label}</p>
        {errors?.[type] ? (
          <p className="text-strawberry-red">{errors?.[type]}</p>
        ) : null}
      </div>
      <input
        type="text"
        className={
          "w-full p-3 border rounded-md focus:border-marine-blue focus:outline-none " +
          (errors?.[type] ? "border-strawberry-red" : "border-cool-gray")
        }
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default Input;
