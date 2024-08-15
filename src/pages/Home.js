import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [task, setTasks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/api/tasks");
    setTasks(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/tasks/${id}`);
    loadTasks();
  };



  return (
    <div className="container-primary">

      
    
      <div className="py-4">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">UpdatedAt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((task, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.createdAt}</td>
                <td>{task.updatedAt}</td>

                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/viewtask/${task.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edittask/${task.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
