import { useContext, useState } from "react";
import StudentProvider, { StudentContext } from "./context/StudentProvider";

function App() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <ul>
        {students && students.length > 0 ? (
          students.map((st) => <li key={st._id}>{st.name}</li>)
        ) : (
          <p>No students available</p>
        )}
      </ul>
    </div>
  );
}

export default App;