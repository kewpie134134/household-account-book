import { Box, Typography } from "@mui/material";
import CustomStringTextField from "../atoms/CustomStringTextField";

type InputFieldProps = {
  label: string;
};

const InputStringField = ({ label }: InputFieldProps) => {
  return (
    <Box>
      <Typography>{label}</Typography>
      <CustomStringTextField />
    </Box>
  );
};

export default InputStringField;
