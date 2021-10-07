import { useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";

const Wishlist = () => {
  const person = localStorage.getItem("who");

  let simple = new Array();

  //const iterate=()=>{
  const txt = localStorage.getItem("wishlist");
  let tmp = JSON.parse(txt);
  simple = tmp.filter((data) => {
    return data.user === person;
  });
  //}

  //useEffect(iterate(),[])

  const erase = (data) => {
    tmp = tmp.filter((each) => {
      return data !== each;
    });
    const txts = JSON.stringify(tmp);
    localStorage.setItem("wishlist", txts);
    alert("Item has removed from wishlist");
    window.location.assign("/");
  };

  const boxstyle = {
    minWidth: "300px",
    minHeight: "50px",
    marginBottom: "10px",
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center p-2">
          {simple.map((data) => (
            <div className="card col-4 p-2 text-center" style={boxstyle}>
              <img className="card-img w-100" src={data.item.pic} alt="shoe" />
              <div className="card-body">
                <h1 className="card-title text-primary">
                  {data.item.model} {data.item.brand}
                </h1>
                <p className="card-text text-success">
                  Colors {data.item.colors}
                </p>
                <p className="card-text text-warning">Type {data.item.type}</p>
                <p className="card-text text-danger">Price {data.item.cost}</p>
                <Button className="float-end" onClick={() => erase(data)}>
                  <DeleteForeverIcon
                    style={{ width: "70px", height: "50px" }}
                    color="secondary"
                  ></DeleteForeverIcon>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
