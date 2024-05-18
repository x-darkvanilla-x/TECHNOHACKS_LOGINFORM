```markdown
# LoginForm Component

This repository contains a `LoginForm` component built using React and Material UI. The component includes username and password fields, a toggle for showing/hiding the password, a "Remember Me" checkbox, and buttons for login, cancel, and forgotten password functionality.

## Installation

To use this component, you need to install the required dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

## Usage

Import the `LoginForm` component into your React application and include it in your JSX.

```jsx
import React from 'react';
import { LoginForm } from './LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
```

## Component Details

The `LoginForm` component consists of:

- **Username Field:** A text field with an account icon.
- **Password Field:** A password field with a lock icon and a toggle button to show/hide the password.
- **Remember Me Checkbox:** A checkbox for the "Remember Me" option.
- **Buttons:** Buttons for login, cancel, and forgotten password functionality.

### Example

```jsx
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
          sx={{ minWidth: 300, padding: "30px", bgcolor: "#ffffff", borderRadius: "5px" }}
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
          />

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
```
