import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

const StudentCard = ({ student }) => {
  const { deleteStudent } = useContext(StudentContext);

  const deleteHandler = () => {
    deleteStudent(student._id);
  };

  return (
    <li style={{ marginBottom: "2rem" }}>
      <span style={{ marginRight: "1rem" }}>{student.name}</span>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default StudentCard;
