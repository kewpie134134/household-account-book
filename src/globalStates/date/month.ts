import { atom } from "recoil";
import { RECOIL_KEYS } from "../RecoilKeys";

export const monthState = atom({
  key: RECOIL_KEYS.MONTH,
  default: "",
});
