import { app } from "./dashboard.js"

export
const students = [{
    name: "Max",
    surName: "Hermann",
    average: " ",
    class: "Fullstack Class"
},
{
    name: "Alice",
    surName: "Müller",
    average: " ",
    class: "Cloud Class"
},
{
    name: "Peter",
    surName: "Pan",
    average: " ",
    class:"Development"
}

]





export function renderStudents() {
    const fragment = document.createDocumentFragment();
    studentsData.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student.name;
        fragment.appendChild(li);
    });
    studentList.innerHTML = '';
    studentList.appendChild(fragment);
}