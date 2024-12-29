import { useContext, useState } from "react";
import StudentProvider, { StudentContext } from "./context/StudentProvider";
import StudentCard from "./components/StudentCard";

function App() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <ul>
        {students && students.length > 0 ? (
          students.map((st) => <StudentCard key={st._id} student={st}/>)
        ) : (
          <p>No students available</p>
        )}
      </ul>
    </div>
  );
}

export default App;