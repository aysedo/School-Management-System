import { teachersData } from "./data.js"
import { getContentContainer } from "./dom.js"
import { modalFragmentTeacher } from "./modalTeacher.js";


// Funktion zum Hinzufügen eines neuen Lehrers
export function addNewTeacher(name, surName, profession) {
    const newTeacher = {
        name: name,
        surName: surName,
        profession: profession,
    };
    teachersData.push(newTeacher);
}


export function getTeacherContent() {

    const modalHtml = modalFragmentTeacher();

    const contentContainer = getContentContainer();
    contentContainer.innerHTML = `
    <h1 class="m-5">Teachers</h1>
    <div class="container text-center">
       <div class="row">
        ${teachersData.map(teacher => {
        return `
                    <div class="col-4">
                        <div class="card">
                            <a href="#" class="card-link" ><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="card-link delete-teacher" data-teacher-id="${teacher.id}><i class="bi bi-x-circle"></i></a>
                            <div class="card-body">
                                <h5 class="card-title">${teacher.name}   ${teacher.surName}</h5>
                                <h6 class="card-title">${teacher.profession}</h6>
                                <p class="card-text">An IT teacher is an education professional specialized in instructing information technology concepts.</p>
                                <a href="#" class="card-link">Students</a>
                                <a href="#" class="card-link">Class</a>
                            </div>
                        </div>
                    </div>`
    }).join(" ")

        }
        </div>
        <div class="row">
            <div class="col">
                <button class="m-5" data-bs-toggle="modal" data-bs-target="#addTeacherModal">Add new Teacher</button>
            </div>
        </div>
    </div>
    ${modalHtml}
    `;
}

        

export function removeTeacher(teacherId) {
    // Finde den Index des Lehrers in der teachersData-Liste
    const indexToRemove = teachersData.findIndex(teacher => teacher.id === teacherId);

    // Überprüfe, ob der Lehrer gefunden wurde
    if (indexToRemove !== -1) {
        // Entferne den Lehrer aus der Liste
        teachersData.splice(indexToRemove, 1);

        // Rufe die Funktion erneut auf, um die aktualisierte Liste anzuzeigen
        getTeacherContent();
    }
    // Andernfalls: Der Lehrer wurde nicht gefunden oder es gab ein Problem
    // Hier könntest du eine Fehlermeldung ausgeben oder andere Schritte unternehmen.
}


