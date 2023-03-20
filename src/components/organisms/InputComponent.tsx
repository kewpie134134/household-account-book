import CustomButton from "../atoms/CustomButton";
import InputSelectField from "../moleculars/InputSelectField";
import InputTextField from "../moleculars/InputTextField";

const stores = [
  "ヨーカドー",
  "ヨークマート",
  "イオン",
  "マックスバリュー",
  "マルエツ",
  "カスミ",
];

const expenses = [
  "食品",
  "雑貨",
  "飲食費",
  "美容品",
  "衣服費",
  "病院",
  "病院薬代",
];

const payments = [
  "現金",
  "VISA",
  "JCB",
  "Master",
  "WAON",
  "nanaco",
  "ゆうちょ",
];

const InputComponent = () => {
  return (
    <>
      <InputSelectField label="分類" lists={expenses} />
      <InputSelectField label="店舗" lists={stores} />
      <InputTextField label="商品" />
      <InputTextField label="金額" type="number" />
      <InputSelectField label="支払い方法" lists={payments} />
      <InputTextField label="備考" />
      <CustomButton label="登録" />
    </>
  );
};

export default InputComponent;
