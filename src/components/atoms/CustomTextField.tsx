import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  defaultValue?: string;
  error?: boolean;
  type?: string;
};

const CustomTextField = ({
  label,
  placeholder,
  helperText,
  defaultValue,
  error,
  type,
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
      type={type}
    />
  );
};

export default CustomTextField;
