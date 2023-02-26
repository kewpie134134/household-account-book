import { yearState } from "@/globalStates/date/year";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRecoilState } from "recoil";

const YearSelector = () => {
  const [year, setYear] = useRecoilState(yearState);

  const handleYearSelectorChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>年</InputLabel>
      <Select value={year} label="Year" onChange={handleYearSelectorChange}>
        <MenuItem value={2021}>2021月</MenuItem>
        <MenuItem value={2022}>2022月</MenuItem>
        <MenuItem value={2023}>2023月</MenuItem>{" "}
      </Select>
      {/* <FormHelperText>With label + helper text</FormHelperText> */}
    </FormControl>
  );
};

export default YearSelector;
