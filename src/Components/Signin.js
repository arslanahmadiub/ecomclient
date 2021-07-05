import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { login } from "../Services/authService";
import Alert from "@material-ui/lab/Alert";
import { saveUser, login } from "../Services/productService";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  let { userName, password } = data;

  let createUser = () => {
    try {
      let { data } = saveUser({
        email: "admin@lifemenu.com",
        password: "zeeshanlifemenu12345",
      });
    } catch (error) {}
  };

  useEffect(() => {
    createUser();
  }, []);

  let handelSignin = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage(null);
      setLoading(true);
      let result = await login(userName, password);

      if (result.status === 200) {
        sessionStorage.setItem("token", result.data);
        setLoading(false);
        history.push("/admin");
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.response.data);
      setLoading(false);
    }

    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  };

  let handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handelChange}
            label="User Name"
            name="userName"
            value={userName}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handelChange}
            label="Password"
            value={password}
            type="password"
            id="password"
          />
          <Alert
            variant="filled"
            severity="error"
            style={{ display: errorMessage ? "flex" : "none" }}
          >
            {errorMessage && errorMessage}
          </Alert>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className={classes.submit}
            onClick={handelSignin}
            startIcon={
              <CircularProgress
                disableShrink
                style={{
                  color: "white",
                  width: "20px",
                  height: "20px",
                  display: loading ? "flex" : "none",
                }}
              />
            }
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
