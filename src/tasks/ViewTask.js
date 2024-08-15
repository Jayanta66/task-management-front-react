import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/tasks/${id}`);
    setTask(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Task Details</h2>

          <div className="card">
            <div className="card-header">
              Task id : {task.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>TITLE : </b>
                  {task.title}
                </li>
                <li className="list-group-item">
                  <b>DESCRIPTION : </b>
                  {task.description}
                </li>
                <li className="list-group-item">
                  <b>STATUS : </b>
                  {task.status}
                </li>
                <li className="list-group-item">
                  <b>CreatedAt : </b>
                  {task.createdAt}
                </li>
                <li className="list-group-item">
                  <b>UpdatedAt : </b>
                  {task.updatedAt}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
