import { beanbags, laptops, mobiles, shoes } from "./Items";
import Helmet from "react-helmet";

<Helmet bodyAttributes={{ style: "background-color : #EC3109" }} />;

const Home = () => {
  const person = localStorage.getItem("who");

  const wishing = (obj) => {
    //alert("about to add in wishlist "+obj.brand)

    if (person !== "") {
      let txt = localStorage.getItem("wishlist");
      let lists = JSON.parse(txt);
      lists.push({
        item: obj,
        user: person,
      });
      txt = JSON.stringify(lists);
      localStorage.setItem("wishlist", txt);
      alert(person + " has added " + obj.brand + " to their wishlist");
    } else {
      alert("Please login first");
      window.location.assign("/login");
    }
  };

  const karting = (obj) => {
    alert("about to add in kart " + obj.brand);
  };

  const boxstyle = {
    minWidth: "300px",
    minHeight: "300px",
    marginRight: "10px",
  };

  return (
    <>
      <div className="container">
        <h1 className="display-4 text-primary">Shoe's</h1>
        <div className="d-flex flex-row overflow-auto flex-nowrap">
          {shoes.map((data) => (
            <div className="card col-3 p-2 text-center" style={boxstyle}>
              <img className="card-img" src={data.pic} alt="shoe" />
              <div className="card-body">
                <h1 className="card-title text-primary">
                  {data.model} {data.brand}
                </h1>
                <p className="card-text text-success">Colors {data.colors}</p>
                <p className="card-text text-warning">Type {data.type}</p>
                <p className="card-text text-danger">Price {data.cost}</p>
                <input
                  type="button"
                  className="btn btn-danger float-start"
                  onClick={() => wishing(data)}
                  value="To wishlist"
                />
                <input
                  type="button"
                  className="btn btn-danger float-end"
                  onClick={() => karting(data)}
                  value="To kart"
                />
              </div>
            </div>
          ))}
        </div>

        <h1 className="display-4 text-primary">Bean Bags</h1>
        <div className="d-flex flex-row overflow-auto flex-nowrap">
          {beanbags.map((data) => (
            <div className="card col-3 p-2 text-center" style={boxstyle}>
              <img className="card-img" src={data.pic} alt="shoe" />
              <div className="card-body">
                <h1 className="card-title text-primary">
                  {data.model} {data.brand}
                </h1>
                <p className="card-text text-success">Colors {data.colors}</p>
                <p className="card-text text-warning">Type {data.type}</p>
                <p className="card-text text-danger">Price {data.cost}</p>
                <input
                  type="button"
                  className="btn btn-danger float-start"
                  onClick={() => wishing(data)}
                  value="To wishlist"
                />
                <input
                  type="button"
                  className="btn btn-danger float-end"
                  onClick={() => karting(data)}
                  value="To kart"
                />
              </div>
            </div>
          ))}
        </div>

        <h1 className="display-4 text-success">Mobiles</h1>
        <div className="d-flex flex-row overflow-auto flex-nowrap">
          {mobiles.map((data) => (
            <div className="card col-3 p-2 text-center" style={boxstyle}>
              <img className="card-img" src={data.pic} alt="shoe" />
              <div className="card-body">
                <h1 className="card-title text-primary">{data.brand}</h1>
                <p className="card-text text-success">Colors {data.size}</p>
                <p className="card-text text-danger">Price {data.cost}</p>
                <input
                  type="button"
                  className="btn btn-danger float-start"
                  onClick={() => wishing(data)}
                  value="To wishlist"
                />
                <input
                  type="button"
                  className="btn btn-danger float-end"
                  onClick={() => karting(data)}
                  value="To kart"
                />
              </div>
            </div>
          ))}
        </div>

        <h1 className="display-4 text-success">Laptops</h1>
        <div className="d-flex flex-row overflow-auto flex-nowrap">
          {laptops.map((data) => (
            <div className="card col-3 p-2 text-center" style={boxstyle}>
              <img className="card-img" src={data.pic} alt="shoe" />
              <div className="card-body">
                <h1 className="card-title text-primary">{data.brand}</h1>
                <p className="card-text text-success">Colors {data.size}</p>
                <p className="card-text text-danger">Price {data.cost}</p>
                <input
                  type="button"
                  className="btn btn-danger float-start"
                  onClick={() => wishing(data)}
                  value="To wishlist"
                />
                <input
                  type="button"
                  className="btn btn-danger float-end"
                  onClick={() => karting(data)}
                  value="To kart"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
