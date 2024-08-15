import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [task, setUser] = useState({
    title: "",
    description: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  });

  const { title, description, status, createdAt, updatedAt} = task;

  const onInputChange = (e) => {
    setUser({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/tasks", task);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add New Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              TITLE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter TITLE"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
              DESCRIPTION
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter DESCRIPTION"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
              STATUS
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter STATUS"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
              CreatedAt
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter CreatedAt"
                name="createdAt"
                value={createdAt}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="updatedAt" className="form-label">
              UpdatedAt
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter UpdatedAt"
                name="updatedAt"
                value={updatedAt}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
