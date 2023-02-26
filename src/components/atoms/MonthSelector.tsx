import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const MonthSelector = () => {
  const [month, setMonth] = useState("");

  const handleMonthSelectorChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>月</InputLabel>
      <Select value={month} label="Month" onChange={handleMonthSelectorChange}>
        <MenuItem value={1}>1月</MenuItem>
        <MenuItem value={2}>2月</MenuItem>
        <MenuItem value={3}>3月</MenuItem>
        <MenuItem value={4}>4月</MenuItem>
        <MenuItem value={5}>5月</MenuItem>
        <MenuItem value={6}>6月</MenuItem>
        <MenuItem value={7}>7月</MenuItem>
        <MenuItem value={8}>8月</MenuItem>
        <MenuItem value={9}>9月</MenuItem>
        <MenuItem value={10}>10月</MenuItem>
        <MenuItem value={11}>11月</MenuItem>
        <MenuItem value={12}>12月</MenuItem>
      </Select>
      {/* <FormHelperText>With label + helper text</FormHelperText> */}
    </FormControl>
  );
};

export default MonthSelector;
