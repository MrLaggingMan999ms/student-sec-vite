import React, { createContext, useEffect, useState } from "react";

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

  return (
    <StudentContext.Provider value={{ students }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;