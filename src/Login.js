import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useContext, useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import SignUp from "./SignUp";
import { user } from "./App";
import { begin } from "./Logged";
import { useHistory } from "react-router-dom";

const Login = () => {
  const hist = useHistory();

  //const[person,setPerson]=useContext(user)

  const [showPass, setShowPass] = useState(false);

  const [info, setInfo] = useState({
    username: "",
    pass: "",
  });

  const hai = (e) => {
    const { name, value } = e.target;
    setInfo((other) => {
      return {
        ...other,
        [name]: value,
      };
    });
  };

  const log = () => {
    const tmp = localStorage.getItem("profiles");
    const arr = JSON.parse(tmp);
    for (let pos in arr) {
      if (arr[pos].username === info.username && arr[pos].pass === info.pass) {
        //setPerson(info.username)
        //alert("Successful login "+person)
        begin(info.username);
        cancel();
        window.location.assign("/");
        //hist.push("/")
        return;
      }
    }
    alert("Invalid credentials");
    /* arr.map((data)=>{
            if(data.username===info.username&&data.pass===info.pass)
            {
                alert("Successful login")
                cancel()
                return;
            }
        }) 
        alert("Invalid credentials")*/
  };

  const cancel = () => {
    setInfo(() => {
      return {
        username: "",
        pass: "",
      };
    });
  };

  const handleClickShowPassword = () => {
    //setValues({ ...values, showPassword: !values.showPassword });
    setShowPass(true);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    setShowPass(false);
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="display-4 text-center text-primary">Login Yourself</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12 rounded shadow p-4">
            <TextField
              id="outlined-basic"
              label="Username"
              className="form-control mb-3"
              variant="outlined"
              placeholder="Enter the name"
              onChange={hai}
              name="username"
              value={info.username}
            />
            <OutlinedInput
              name="pass"
              value={info.pass}
              className="form-control mb-3"
              id="outlined-adornment-password"
              type={showPass ? "text" : "password"}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onChange={hai}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div className="row justify-content-around">
              <Button
                variant="outlined"
                color="primary"
                className="col"
                onClick={log}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="col"
                onClick={cancel}
              >
                Cancel
              </Button>
            </div>
            <a className="float-end" href="/signup">
              Create New User
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
