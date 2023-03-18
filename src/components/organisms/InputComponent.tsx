import InputTextField from "../moleculars/InputTextField";

const InputComponent = () => {
  return (
    <>
      <InputTextField label="商品" />
      <InputTextField label="金額" type="number" />
      <InputTextField label="備考" />
    </>
  );
};

export default InputComponent;
