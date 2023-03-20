import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

type CustomSelectFieldProps = {
  lists?: string[];
};

const CustomSelectField = ({ lists }: CustomSelectFieldProps) => {
  const [kind, setKind] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setKind(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select value={kind} variant="standard" onChange={handleChange}>
          {lists?.map((list, index) => (
            <MenuItem key={index} value={list}>
              {list}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelectField;
