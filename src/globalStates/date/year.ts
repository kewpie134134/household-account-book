import { atom } from "recoil";
import { RECOIL_KEYS } from "../RecoilKeys";

export const yearState = atom({
  key: RECOIL_KEYS.YEAR,
  default: "",
});
