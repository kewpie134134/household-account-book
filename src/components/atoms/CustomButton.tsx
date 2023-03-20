import { Button } from "@mui/material";

type CustomButtonProps = {
  label: string;
};

const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <Button fullWidth variant="contained">
      {label}
    </Button>
  );
};

export default CustomButton;
