import { teachersData } from "./data.js"
import { contentContainer } from "./dom.js"
import { modal } from "./modal.js";


// Funktion zum Hinzufügen eines neuen Lehrers
export function addNewTeacher(name, surName, profession) {
    const newTeacher = {
        name: name,
        surName: surName,
        profession: profession,
    };
    teachersData.push(newTeacher);
}


export function getTeacherContent(){
    contentContainer.innerHTML = `
    <h1 class="m-5">Teachers</h1>
    <div class="container text-center">
      <div class="row">
      ${
        teachersData.map(teacher => {
            return `
                <div class="col-4">
                    <div class="card">
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-x-circle"></i>
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
        `
        modal()
    }        



