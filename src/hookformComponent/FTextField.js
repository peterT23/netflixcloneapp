import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          sx={{
            // Root class for the input field
            "& .MuiFilledInput-root": {
              color: "white",
              fontFamily: "Arial",
              fontWeight: "bold",

              borderTopLeftRadius: "7px",
              borderTopRightRadius: "7px",
              textDecoration: "none",
            },
            // Class for the label of the filled input field
            "& .MuiInputLabel-filled": {
              color: "white",
              fontWeight: "bold",
            },
          }}
          variant="filled"
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}

export default FTextField;
