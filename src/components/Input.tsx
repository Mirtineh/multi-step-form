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
      <span className="flex justify-between">
        <span className="text-marine-blue">{label}</span>
        {errors?.[type] ? (
          <p className="text-strawberry-red">{errors?.[type]}</p>
        ) : null}
      </span>
      <input
        type="text"
        className={
          "w-full p-3 border rounded-md focus:border-purplish-blue focus:outline-none hover:cursor-pointer hover:border-purplish-blue " +
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
