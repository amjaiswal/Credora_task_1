import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
    // Keeping track of what the user types in the form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: ''
    });

    // Just a simple way to update our state whenever a field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Making sure they don't leave anything blank
        if (!formData.name || !formData.email || !formData.course) {
            alert("Oops! Looks like some fields are empty. Please fill them all out.");
            return;
        }

        // Giving the student a unique ID using the timestamp so we can find/delete them later
        const newStudent = {
            ...formData,
            id: Date.now()
        };

        // Sending the new student back up to the main App
        onAddStudent(newStudent);

        // Clearing the form so it's ready for the next entry
        setFormData({
            name: '',
            email: '',
            course: ''
        });
    };

    return (
        <div className="glass-card">
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Student Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Student Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        placeholder="e.g. Web Development"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="primary">
                    Add Student Profile
                </button>
            </form>
        </div>
    );
};

export default StudentForm;
