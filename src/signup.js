import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const SignUp = () => {
  const [account, setAccount] = useState({
    username: "",
    contact: 0,
    email: "",
    pass: "",
    conpass: "",
  });

  const hai = (e) => {
    const { name, value } = e.target;
    setAccount((others) => {
      return {
        ...others,
        [name]: value,
      };
    });
  };

  const create = () => {
    let yet = new Array();
    const txt = localStorage.getItem("profiles");
    yet = JSON.parse(txt);
    if (account.pass === account.conpass) {
      yet.push(account);
      const wet = JSON.stringify(yet);
      localStorage.setItem("profiles", wet);
      cancel();
      alert("Profile has created");
    } else {
      alert("Password mismatch");
    }
  };

  const cancel = () => {
    setAccount(() => {
      return {
        username: "",
        contact: 0,
        email: "",
        pass: "",
        conpass: "",
      };
    });
  };

  /* const listUsers=()=>{
        let yet=new Array();
        const txt=localStorage.getItem("profiles")
        yet=JSON.parse(txt)
        yet.map((data)=>{
            alert(data.username)
        })
    } */

  return (
    <>
      <div className="container-fluid">
        <h1 className="display-4 text-center text-primary">
          SignUp for New User
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 rounded shadow p-4">
            <TextField
              id="outlined-basic"
              label="Username"
              className="form-control mb-3"
              variant="outlined"
              placeholder="Enter the name"
              onChange={hai}
              name="username"
              value={account.username}
            />
            <div className="row justify-content-end mb-3">
              <TextField
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                placeholder="Enter the contact"
                className="col"
                onChange={hai}
                name="contact"
                value={account.contact}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                className="col"
                variant="outlined"
                onChange={hai}
                placeholder="Enter the email"
                name="email"
                value={account.email}
              />
            </div>
            <div className="row justify-content-start mb-3">
              <input
                type="password"
                placeholder="Choose password"
                className="col form-control"
                onChange={hai}
                name="pass"
                value={account.pass}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="col form-control"
                onChange={hai}
                name="conpass"
                value={account.conpass}
              />
            </div>
            <div className="row justify-content-around">
              <Button
                variant="outlined"
                color="primary"
                className="col"
                onClick={create}
              >
                SignUp
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="col"
                onClick={cancel}
              >
                Cancel
              </Button>
              {/* <Button variant="outlined" color="secondary" className="col" onClick={listUsers}>
                                List
                            </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
