import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    title: "",
    description: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  });

  const { title, description, status, createdAt, updatedAt } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/tasks/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/tasks/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="TITLE" className="form-label">
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
              <label htmlFor="DESCRIPTION" className="form-label">
                DESCRIPTION
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your DESCRIPTION"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="STATUS" className="form-label">
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
              <label htmlFor="createdAt" className="form-label">
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
              <label htmlFor="UpdatedAt" className="form-label">
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
