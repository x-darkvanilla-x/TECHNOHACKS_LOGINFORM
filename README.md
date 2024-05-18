# LoginForm Component

## Overview
This repository contains a simple login form component built with React and Material UI. The component includes fields for entering a username and password, with options to show/hide the password, remember the user, and buttons for login, cancel, and password recovery.

## Installation

To use this component in your project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/login-form-component.git
```

2. Navigate to the project directory:

```bash
cd login-form-component
```

3. Install the required dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

## Usage

To use the `LoginForm` component in your React application, import and include it in your component tree:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { LoginForm } from './LoginForm';

const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Code Explanation

### `LoginForm` Component

```javascript
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

          <FormControlLabel control={<Checkbox />} label="Remember Me" />

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

### Key Features

- **Username Field**: Text input with an icon.
- **Password Field**: Password input with show/hide functionality.
- **Login Button**: Submits the form.
- **Remember Me Checkbox**: Allows the user to be remembered.
- **Cancel Button**: Cancels the login process.
- **Forgot Password Button**: Link to recover the password.

## Contributions

Contributions are welcome! Please fork this repository and submit a pull request for any improvements.

## Contact

For questions or suggestions, please contact [Dipesh Adelkar](https://github.com/x-darkvanilla-x).

