import { teachersData } from "./data.js"
import { studentsData } from "./data.js"
import { classesData } from "./data.js"
import { addNewTeacher} from "./teachers.js"
import { getTeacherContent} from "./teachers.js"
import { contentContainer } from "./dom.js"



export function renderContent(pPage) {
  if (pPage === "home") {
    contentContainer.innerHTML = `
        <h1 class="m-5">Welcome Mirijam</h1>
        <div class="container text-center">
          <div class="row">
              <div class="col-4" id="div-container">
                  ${studentsData.length}
                <p>number of students</p>
              </div>
              <div class="col-4" id="div-container">
                  ${teachersData.length}
                <p>number of teachers</p>
              </div>
              <div class="col-4" id="div-container">
                  ${classesData.length}
                <p>number of classes</p>
              </div>
          </div>
        </div>
    `
  } else if (pPage === "class") {
    contentContainer.innerHTML = `
    <h1 class="m-5">Classes</h1>
    <div class="container text-center">
      <div class="row">
      ${classesData.map(classcontent => {
      return `
            <div class="col-4">
              <div class="card">
                  <a href="#" class="card-link" ><i class="bi bi-pencil-square"></i></a>
                  <a href="#" class="card-link" ><i class="bi bi-x-circle"></i></a>
                  <div class="card-body">
                      <h5 class="card-title">${classcontent.class}</h5>
                      <h6>${classcontent.teacher}</h6>
                      <p class="card-text">The classes in an IT school encompass various levels from beginners to advanced.</p>
                       <a href="#" class="card-link" >Students</a>
                       <a href="#" class="card-link">Teachers</a>
                  </div>
              </div>
            </div>
        `
    }).join(" ")
      }
      </div>
        <div class="row">
          <div class="col">
            <button class="m-5">Add new Class</button>
          </div>
        </div>
      </div
      `
  } else if (pPage === "teacher") {
    getTeacherContent()
    // Event-Listener für das Einreichen des Formulars
    document.querySelector("#addTeacherForm").addEventListener('submit', function (event) {
      event.preventDefault();
      const teacherName = document.querySelector("#teacherName").value;
      const teacherSurname = document.querySelector("#teacherSurname").value;
      const teacherProfession= document.querySelector("#teacherProfession").value;
      addNewTeacher(teacherName, teacherSurname,teacherProfession);
      const addTeacherModal = document.querySelector('#addTeacherModal');
      const modal = bootstrap.Modal.getInstance(addTeacherModal);
      modal.hide();
      renderContent("teacher")
    });
  } else if (pPage === "student") {
    contentContainer.innerHTML = `
        <h1 class="m-5">Students</h1>
        <div class="container text-center">
          <div class="row">${studentsData.map(student => {
      return `
                    <div class="col-4">
                      <div class="card">
                          <i class="bi bi-pencil-square"></i>
                          <i class="bi bi-x-circle"></i>
                          <div class="card-body">
                              <h5 class="card-title">${student.name}  ${student.surName}</h5>
                              <h6>${student.class}</h6>
                              <p class="card-text">A cloud class focuses on teaching concepts related to cloud computing, covering topics such as virtualization, cloud infrastructure, deployment models, and cloud services.</p>
                              <a href="#" id="average-grade">Average Grade:4.9</a>
                          </div>
                      </div>
                    </div>
                `
    }).join(" ")
      }
      </div>
        <div class="row">
          <div class="col">
            <button class="m-5">Add new Student</button>
          </div>
        </div>
      </div>`
  }
}
