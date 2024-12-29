import React from 'react'

const StudentCard = ({ student }) => {

  return (
    <li style = {{marginBottom: "2rem"}}>
      <span style = {{marginRight:"1rem"}}>{student.name}</span>
      <button>Delete</button>
    </li>
  );
};

export default StudentCard