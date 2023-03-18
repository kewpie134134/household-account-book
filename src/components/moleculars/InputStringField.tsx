import { Box, Typography } from "@mui/material";
import CustomStringTextField from "../atoms/CustomStringTextField";

type InputFieldProps = {
  label: string;
};

const InputStringField = ({ label }: InputFieldProps) => {
  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Typography>{label}</Typography>
      <CustomStringTextField />
    </Box>
  );
};

export default InputStringField;
