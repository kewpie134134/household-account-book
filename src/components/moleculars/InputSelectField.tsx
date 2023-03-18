import { Box, Typography } from "@mui/material";
import CustomSelectField from "../atoms/CustomSelectField";

type InputSelectFieldProps = {
  label: string;
};

const InputSelectField = ({ label }: InputSelectFieldProps) => {
  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Typography>{label}</Typography>
      <CustomSelectField />
    </Box>
  );
};

export default InputSelectField;
