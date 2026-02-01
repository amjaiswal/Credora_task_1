import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  // This is where we store our list of students
  const [students, setStudents] = useState([]);

  // Handles adding a new student to the top of our list
  const addStudent = (newStudent) => {
    setStudents(prevStudents => [newStudent, ...prevStudents]);
  };

  // Filter out the student with the matching ID to 'delete' them
  const deleteStudent = (id) => {
    setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Student Manager</h1>
        <p>A simple way to manage student profiles for the Credora Internship</p>
      </header>

      <main>
        {/* The form stays at the top for easy access */}
        <section style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          <StudentForm onAddStudent={addStudent} />
        </section>

        {/* This section shows the count and the grid of profiles */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem' }}>Student Profiles</h2>
            <span style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.75rem',
              borderRadius: '1rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              {students.length} Total
            </span>
          </div>

          <div className="student-grid">
            <StudentList students={students} onDeleteStudent={deleteStudent} />
          </div>
        </section>
      </main>

      <footer style={{ marginTop: '5rem', textAlign: 'center', paddingBottom: '3rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Credora Internship Project
      </footer>
    </div>
  );
}

export default App;
