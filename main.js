// app.js

document.addEventListener('DOMContentLoaded', function () {
    const classList = document.getElementById('classList');
    const teacherList = document.getElementById('teacherList');
    const studentList = document.getElementById('studentList');

    // Sample data (replace with your data retrieval logic)
    const classesData = [
        { id: 1, name: 'Mathematics' },
        { id: 2, name: 'Science' },
        // Add more classes as needed
    ];

   


   

 

   

    function renderApp() {
        renderClasses();
        renderTeachers();
        renderStudents();
    }

    renderApp();
});


