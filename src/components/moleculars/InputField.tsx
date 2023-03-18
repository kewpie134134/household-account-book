import { Box, Typography } from "@mui/material";
import CustomTextField from "../atoms/CustomTextField";

type InputFieldProps = {
  label: string;
  type?: string;
};

const InputField = ({ label, type }: InputFieldProps) => {
  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Typography>{label}</Typography>
      <CustomTextField type={type} />
    </Box>
  );
};

export default InputField;
