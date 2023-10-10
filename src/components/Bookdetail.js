import React from "react";

const Bookdetail = (props) => {
  const { books } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{books.field}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{books.genre} </h6>
          <p className="card-text">this is a text</p>
          <div>
            <i className="fa fa-trash-o mx-1"></i>
            <i className="fa fa-edit mx-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetail;
