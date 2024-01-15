import { FC } from "react";

interface InputFieldProps {
  style: string;
  value: string;
  validation: boolean;
  handle: (val: string) => void;
  warning: string;
  type: string;
  placeholder: string;
}

const InputPassword: FC<InputFieldProps> = ({
  style,
  value,
  validation,
  handle,
  warning,
  type,
  placeholder,
}) => {
  return (
    <div>
      <input
        type={type}
        name=""
        id=""
        className={style}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handle(e.target.value)}
      />
      {validation ? null : (
        <p className="text-red-600 text-sm ml-1">{warning}</p>
      )}
    </div>
  );
};

export default InputPassword;
