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

    const teachersData = [
        { id: 101, name: 'John Doe' },
        { id: 102, name: 'Jane Smith' },
        // Add more teachers as needed
    ];

    const studentsData = [
        { id: 1001, name: 'Alice Johnson' },
        { id: 1002, name: 'Bob Williams' },
        // Add more students as needed
    ];

    function renderClasses() {
        classList.innerHTML = '';
        classesData.forEach(classItem => {
            const li = document.createElement('li');
            li.textContent = classItem.name;
            classList.appendChild(li);
        });
    }

    function renderTeachers() {
        teacherList.innerHTML = '';
        teachersData.forEach(teacher => {
            const li = document.createElement('li');
            li.textContent = teacher.name;
            teacherList.appendChild(li);
        });
    }

    function renderStudents() {
        studentList.innerHTML = '';
        studentsData.forEach(student => {
            const li = document.createElement('li');
            li.textContent = student.name;
            studentList.appendChild(li);
        });
    }

    function initialize() {
        renderClasses();
        renderTeachers();
        renderStudents();
    }

    initialize();
});


