# React Student Profile Manager

Hey! This is my submission for the Credora React Internship task. I've built a simple but modern application to manage student profiles where you can add, view, and delete records easily.

## 🚀 What's inside?

- **Add Students**: A quick form to grab a student's name, email, and the course they're taking.
- **Student Gallery**: All the profiles show up in a clean grid layout.
- **Easy Cleanup**: Every profile has a delete button if you need to remove someone.
- **Cool Design**: I used a "glassmorphism" style (that trendy blurred look) to make it look a bit more premium.
- **Fully Responsive**: It should look good whether you're on a big monitor or a phone.

## 🛠️ How to get it running

If you want to check it out locally, follow these steps:

1. **Grab the code**:
   ```bash
   git clone <your-repo-link>
   cd student-profile-manager
   ```

2. **Install the stuff it needs**:
   ```bash
   npm install
   ```

3. **Fire it up**:
   ```bash
   npm start
   ```

It should automatically open in your browser at `http://localhost:3000`.

## 📁 How I organized the project

I kept things pretty simple and modular:
- `src/components/StudentForm.jsx`: Handles all the logic for adding a new person.
- `src/components/StudentList.jsx`: Takes care of displaying the cards and the delete button.
- `src/App.jsx`: This is the main hub where I manage the "state" (basically the list of students).
- `src/index.css`: Where all the styling lives.

## 🧠 What I learned/used

In this project, I made sure to use:
- **JSX** for the structure.
- **Functional Components** (the modern way to write React).
- **useState Hook** to handle the student data and form inputs.
- **Props** to pass data between the parents and children components.
- **Standard Form Handling** with simple validation.

---
*Built for the Credora Internship - React Starter Project.*
