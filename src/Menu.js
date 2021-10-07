import { Container } from "@material-ui/core";
import { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import HomeIcon from "@material-ui/icons/Home";
import InputIcon from "@material-ui/icons/Input";
import PersonIcon from "@material-ui/icons/Person";
import { end } from "./Logged";

const Menu = () => {
  //const history=useHistory()
  //const[person,setPerson]=useContext(user)
  const person = localStorage.getItem("who");

  const check = () => {
    //alert("logged out")
    end();
    window.location.assign("/");
    //history.push("/")
  };

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#">Dlithe Kart</Navbar.Brand>
          <Navbar.Toggle aria-control="logitems"></Navbar.Toggle>
          <Navbar.Collapse id="logitems">
            <Nav className="ms-auto">
              {person !== "" ? (
                <>
                  <h1 className="me-3 float-end text-danger">
                    Welcome {person}
                  </h1>
                  <Nav.Link
                    href="/kart"
                    className="me-3 text-dark btn btn-outline-primary"
                  >
                    <ShoppingBasketIcon color="secondary"></ShoppingBasketIcon>
                  </Nav.Link>
                  <Nav.Link
                    href="/wish"
                    className="me-3 text-dark btn btn-outline-primary"
                  >
                    <FavoriteIcon color="secondary"></FavoriteIcon>
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    onClick={check}
                    className="me-3 text-dark btn btn-outline-primary"
                  >
                    <MeetingRoomIcon color="secondary"></MeetingRoomIcon>
                  </Nav.Link>
                  <Nav.Link
                    href="/editpro"
                    className="me-3 text-dark btn btn-outline-primary"
                  >
                    <PersonIcon color="secondary"></PersonIcon>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    href="/login"
                    className="me-3 text-dark btn btn-outline-primary"
                  >
                    <InputIcon color="secondary"></InputIcon>
                  </Nav.Link>
                </>
              )}
              <Nav.Link
                href="/"
                className="me-3 text-dark btn btn-outline-primary"
              >
                <HomeIcon color="secondary"></HomeIcon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
