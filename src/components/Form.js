import React, { useContext } from "react";
import Contextbook from "../context/contextbook";
import Bookdetail from "./Bookdetail";
function Form() {
  const context = useContext(Contextbook);
  const { book, setBook } = context;

  return (
    <>
      <form>
        <div className="container">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <h1>All Notes</h1>
      <div className="container">
        <div className="row">
          {book.map((books) => {
            return <Bookdetail books={books} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Form;
