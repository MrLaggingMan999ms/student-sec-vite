import React, { createContext, useEffect, useState } from "react";
import "dotenv";

export const StudentContext = createContext(null);

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  
  const fetchStudents = async (signal) => {
    try {
      const res = await fetch(
        "https://student-api-test.vercel.app/api/v1/students",
        {
          method: "GET",
          headers: {
            key: "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
          },
          signal,
        }
      );

      const data = await res.json();
      console.log(data);
      setStudents([...data.students]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchStudents(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const deleteStudent = async (id) => {
    const res = await fetch(
      `https://student-api-test.vercel.app/api/v1/students/${id}`,
      {
        method: "DELETE",
        headers: {
          key:
          "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
        },
      }
    );

    const data = await res.json();
    console.log(data);
    const filterStudent = students.filter((st) => st._id !== data.student._id);
    setStudents([...filterStudent]);
  };

  const createStudent = async (newStudent) => {
    const res = await fetch(
      `https://student-api-test.vercel.app/api/v1/students/`,
      {
        method: "POST",
        headers: {
          key:
          "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      }
    );

    const data = await res.json();
    console.log(data);
    setStudents([...students, data.student]);
  };
  
  return (
    <StudentContext.Provider value={{ students, deleteStudent, createStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
