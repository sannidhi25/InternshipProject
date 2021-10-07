import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import UpdateIcon from "@material-ui/icons/Update";
import ClearIcon from "@material-ui/icons/Clear";
import { end } from "./Logged";

const EditProfile = () => {
  const person = localStorage.getItem("who");

  const [current, setCurrent] = useState({
    username: "",
    email: "",
    contact: 0,
    pass: "",
    conpass: "",
  });

  useEffect(() => {
    // inorder to show current user details in form
    const tmp = localStorage.getItem("profiles");
    let arr = JSON.parse(tmp);
    let yet = arr.filter((data) => {
      return data.username === person;
    });
    setCurrent(yet[0]);

    // inorder to delete the current user from profiles, later it will be added once update function clicked
    arr = arr.filter((data) => {
      return data.username !== person;
    });
    const wet = JSON.stringify(arr);
    localStorage.setItem("profiles", wet);
    alert("user has deleted");
    //alert(current.contact)
  }, []);

  const hai = (e) => {
    const { name, value } = e.target;
    setCurrent((others) => {
      return {
        ...others,
        [name]: value,
      };
    });
  };

  const update = () => {
    let yet = new Array();
    const txt = localStorage.getItem("profiles");
    yet = JSON.parse(txt);
    if (current.pass === current.conpass) {
      yet.push(current);
      const wet = JSON.stringify(yet);
      localStorage.setItem("profiles", wet);
      cancel();
      alert("Profile has updated");
      end();
      window.location.assign("/");
    } else {
      alert("Password mismatch");
    }
  };

  const cancel = () => {
    setCurrent(() => {
      return {
        username: "",
        contact: 0,
        email: "",
        pass: "",
        conpass: "",
      };
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-success display-5 text-center">Edit Profile</h1>
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
              value={current.username}
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
                value={current.contact}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                className="col"
                variant="outlined"
                onChange={hai}
                placeholder="Enter the email"
                name="email"
                value={current.email}
              />
            </div>
            <div className="row justify-content-start mb-3">
              <input
                type="password"
                placeholder="Choose password"
                className="col form-control"
                onChange={hai}
                name="pass"
                value={current.pass}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="col form-control"
                onChange={hai}
                name="conpass"
                value={current.conpass}
              />
            </div>
            <div className="row justify-content-around">
              <Button
                variant="outlined"
                color="primary"
                className="col-3"
                onClick={update}
              >
                <UpdateIcon color="primary"></UpdateIcon>
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="col-3"
                onClick={cancel}
              >
                <ClearIcon color="secondary"></ClearIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
