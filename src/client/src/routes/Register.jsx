import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      position: ""
    };
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, name, position } = this.state;
    const data = {
      email,
      password,
      name,
      position
    };
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          className="mt-5"
          style={{
            display: "flex",
            marginTop: "100px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar className="m-1" style={{ backgroundColor: "#f44336" }} />
          <Typography component="h1" variant="h5">
            Student Login
          </Typography>
          <form
            className=" "
            style={{
              width: "100%", // Fix IE 11 issue.
              marginTop: "20px"
            }}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              onChange={e => this.handleChange(e)}
              label="Name"
              type="text"
              id="name"
              autoComplete="current-name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={e => this.handleChange(e)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={e => this.handleChange(e)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">
                Register As
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="position"
              >
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
              <FormHelperText>
                Please Select the Applicable Option
              </FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <br />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={this.handlSubmit}
              color="primary"
              className=" "
              style={{ margin: (3, 0, 2) }}
            >
              REGISTER
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2" className="mt-5">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item className="mt-5">
                <Link to="/loginTeacher" variant="body2">
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
