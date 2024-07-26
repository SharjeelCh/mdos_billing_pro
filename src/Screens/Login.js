// src/SignIn.js
import React from 'react';
import {
  Container, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import google from '../assets/google.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme();

function Login() {
  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              startIcon={<img src={google} alt="Google" style={{ width: '20px', height: '20px' }} />}
            >
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '20px', height: '20px' }} />}
            >
              Sign in with Facebook
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="#" variant="body2" style={{color:'blue',textDecoration:'none'}}>
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to='/SignUp' style={{color:'blue',textDecoration:'none'}}>
                  Don't have an account? Sign Up
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;