import React from 'react';

const StudentList = ({ students, onDeleteStudent }) => {
    // If there's nobody in the list yet, let's show a friendly message
    if (students.length === 0) {
        return (
            <div className="glass-card" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    No student profiles yet. Try adding one above!
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Mapping through our students array to create a card for each one */}
            {students.map((student) => (
                <div key={student.id} className="glass-card student-card">
                    <div className="student-info">
                        <h3>{student.name}</h3>
                        <p>{student.email}</p>
                        <div className="course-tag">{student.course}</div>
                    </div>

                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            className="delete"
                            onClick={() => onDeleteStudent(student.id)}
                        >
                            Delete Profile
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default StudentList;
