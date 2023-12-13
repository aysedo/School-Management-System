import { teachersData } from "./data.js"
import { contentContainer } from "./dom.js"


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
      ${teachersData.map(teacher => {
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
      </div>
        <div class="row">
          <div class="col">
            <button class="m-5" data-bs-toggle="modal" data-bs-target="#addTeacherModal">Add new Teacher</button>
          </div>
        </div>
      </div>
      <!-- Modal for adding a new teacher -->
      <div class="modal" id="addTeacherModal">
          <div class="modal-dialog">
              <div class="modal-content">
                  <!-- Modal-Header -->
                  <div class="modal-header">
                      <h4 class="modal-title">Add New Teacher</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <!-- Modal-Body -->
                  <div class="modal-body">
                      <!-- Form for adding a teacher -->
                      <form id="addTeacherForm">
                          <label for="teacherName">Name:</label>
                          <input type="text" id="teacherName" class="form-control" required>
                          <label for="teacherSurname">Surname:</label>
                          <input type="text" id="teacherSurname" class="form-control" required>
                          <label for="teacherProfession">Profession:</label>
                          <input type="text" id="teacherProfession" class="form-control" required>
                          <button class="btn btn-success mt-3">Add Teacher</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>`
  }
