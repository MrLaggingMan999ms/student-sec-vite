import { useContext } from "react";
import { StudentContext } from "./context/StudentProvider";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import { useSelector } from "react-redux";

function App() {
  //const { students } = useContext(StudentContext);
  const {students} = useSelector((state) => state.student);

  
  return (
    <>
      {/* <StudentForm/> */}
      <ul>
        {students && students.length > 0 ? (
          students.map((st) => 
          <li key ={st._id}>{st.name}</li>
          //<StudentCard key={st._id} student={st}/>
        )
        ) : (
          <p>No students available</p>
        )}
      </ul>
    </>
  );
}

export default App;