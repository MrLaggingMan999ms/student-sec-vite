import { useContext } from "react";
import { StudentContext } from "./context/StudentProvider";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  const { students } = useContext(StudentContext);

  return (
    <>
      <StudentForm/>
      <ul>
        {students && students.length > 0 ? (
          students.map((st) => <StudentCard key={st._id} student={st}/>)
        ) : (
          <p>No students available</p>
        )}
      </ul>
    </>
  );
}

export default App;