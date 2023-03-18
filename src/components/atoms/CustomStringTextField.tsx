import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  defaultValue?: string;
  error?: boolean;
};

const CustomStringTextField = ({
  label,
  placeholder,
  helperText,
  defaultValue,
  error,
}: CustomTextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="standard"
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      defaultValue={defaultValue}
      error={error}
    />
  );
};

export default CustomStringTextField;
