import InputField from "../moleculars/InputField";

const InputComponent = () => {
  return (
    <>
      <InputField label="商品" />
      <InputField label="金額" type="number" />
      <InputField label="備考" />
    </>
  );
};

export default InputComponent;
