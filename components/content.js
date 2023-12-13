import { teachersData, studentsData, classesData } from "./data.js"
import { addNewTeacher, getTeacherContent } from "./teachers.js"
import { getContentContainer } from "./dom.js"
import { getStudentContent } from "./students.js";




export function renderContent(pPage) {

  const contentContainer = getContentContainer();

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
      const teacherProfession = document.querySelector("#teacherProfession").value;
      addNewTeacher(teacherName, teacherSurname, teacherProfession);
      const addTeacherModal = document.querySelector('#addTeacherModal');
      const modal = bootstrap.Modal.getInstance(addTeacherModal);
      modal.hide();
      renderContent("teacher")
    });
    
  } else if (pPage === "student") {
    getStudentContent()
    document.querySelector("#addStudentForm").addEventListener('submit', function (event) {
      event.preventDefault();
      const studentName = document.querySelector("#studentName").value;
      const studentSurname = document.querySelector("#studentSurname").value;
      const studentAverage = document.querySelector("#studentAverage").value;
      const studentClass = document.querySelector("#studentClass").value;
      addNewStudent(studentName, studentSurname, studentAverage, studentClass);
      const addStudentModal = document.querySelector('#addStudentModal');
      const modal = bootstrap.Modal.getInstance(addStudentModal);
      modal.hide();
      renderContent("student")
    });
  }
}
