import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const Card = ({ email, first_name, last_name, avatar, id, deleteusers }) => {
  return (
    <div>
      <div className="card">
        <img src={avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <strong>
              {first_name} {last_name}
            </strong>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Email</strong> : {email}
          </li>
          <li className="list-group-item">
            <strong>First name</strong> : {first_name}
          </li>
          <li className="list-group-item">
            <strong>Last name</strong> : {last_name}
          </li>
        </ul>
        <div className="card-body">
          <button
            className="btn btn-danger"
            onClick={() => deleteusers({ id })}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
