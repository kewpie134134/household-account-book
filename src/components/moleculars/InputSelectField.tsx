import { Box, Typography } from "@mui/material";
import CustomSelectField from "../atoms/CustomSelectField";

type InputSelectFieldProps = {
  label: string;
  lists?: string[];
};

const InputSelectField = ({ label, lists }: InputSelectFieldProps) => {
  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Typography>{label}</Typography>
      <CustomSelectField lists={lists} />
    </Box>
  );
};

export default InputSelectField;
