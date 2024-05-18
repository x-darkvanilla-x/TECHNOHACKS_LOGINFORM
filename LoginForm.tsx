import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

{
  /* 
Requires to install there dependencies to use material ui and icons

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
*/
}

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack
      sx={{
        minHeight: "100svh",
        width: "100%",
        bgcolor: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
      <Stack
        sx={{ minWidth: 300, padding: "30px", bgcolor: "#ffffff", borderRadius: "5px"}}
        gap={3}
      >
        <TextField
          required
          label="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <TextField
          required
          type={showPassword ? "text" : "password"}
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" color="success" type="submit">
          Login
        </Button>

        <FormControlLabel
          control={<Checkbox />}
          label="Remember Me"
        />

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="contained" color="error">
            Cancel
          </Button>
          <Button>Forgot Password?</Button>
        </Stack>
      </Stack>
      </form>
    </Stack>
  );
};
