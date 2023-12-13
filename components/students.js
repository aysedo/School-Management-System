import { studentsData } from "./data.js"
import { getContentContainer } from "./dom.js"
import { modalFragmentStudent } from "./modalStudent.js";




// Funktion zum Hinzufügen eines neuen Schülers
export function addNewStudent(firstName, surName, classes, average) {
    const newStudent = {
        firstName: firstName,
        surName: surName,
        classes: classes,
        average: average
        
    };
    studentsData.push(newStudent);
}


export function getStudentContent() {

    const modalHtml= modalFragmentStudent();

    const contentContainer = getContentContainer();
    contentContainer.innerHTML = `
        <h1 class="m-5">Students</h1>
        <div class="container text-center">
          <div class="row">
          ${studentsData.map(student => {
          return `
                    <div class="col-4">
                      <div class="card">
                          <a href="#" class="card-link"><i class="bi bi-pencil-square"></i></a>
                          <a href="#" class="card-link"><i class="bi bi-x-circle"></i></a>
                          <div class="card-body">
                              <h5 class="card-title">${student.firstName}  ${student.surName}</h5>
                              <h6>${student.classes}</h6>
                              <p class="card-text">A cloud class focuses on teaching concepts related to cloud computing, covering topics such as virtualization, cloud infrastructure, deployment models, and cloud services.</p>
                              <a href="#" id="average">Average Grade: ${student.average}</a>
                          </div>
                      </div>
                    </div>
                `
    }).join(" ")
      }
      </div>
      <div class="row">
          <div class="col">
              <button class="m-5" data-bs-toggle="modal" data-bs-target="#addStudentModal">Add new Student</button>
          </div>
      </div>
    </div>
      ${modalHtml}
      `;
}






