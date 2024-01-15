import { useNIKValidator } from "@/hooks/useNIKValidation";

const InputNIK = ({ customClassName }: { customClassName: string }) => {
  const { nik, isValidNIK, handleNIKChange } = useNIKValidator();
  return (
    <div>
      <input
        type="text"
        className={customClassName}
        placeholder="NIK"
        value={nik}
        onChange={(e) => handleNIKChange(e.target.value)}
      />
      {isValidNIK ? null : (
        <p className="text-red-600 text-sm ml-1">NIK Harus Angka 16 digit</p>
      )}
    </div>
  );
};

export default InputNIK;
