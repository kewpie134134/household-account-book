import { Box, Typography } from "@mui/material";
import CustomTextField from "../atoms/CustomTextField";

type InputTextFieldProps = {
  label: string;
  type?: string;
};

const InputTextField = ({ label, type }: InputTextFieldProps) => {
  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Typography>{label}</Typography>
      <CustomTextField type={type} />
    </Box>
  );
};

export default InputTextField;
