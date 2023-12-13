import { teachersData, studentsData, classesData } from "./data.js"
import { addNewTeacher, getTeacherContent } from "./teachers.js"
import { getContentContainer } from "./dom.js"
import { addNewStudent, getStudentContent } from "./students.js";
import { addNewClass, getClassContent } from "./classes.js";



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
    getClassContent()
    // Event-Listener für das Einreichen des Formulars
    document.querySelector("#addClassForm").addEventListener('submit', function (event) {
      event.preventDefault();
      const className = document.querySelector("#className").value;
      const classTeacher = document.querySelector("#classTeacher").value;
      addNewClass(className, classTeacher);
      const addClassModal = document.querySelector('#addClassModal');
      const modal = bootstrap.Modal.getInstance(addClassModal);
      modal.hide();
      renderContent("class")
    });
      
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
      const studentFirstName = document.querySelector("#studentFirstName").value;
      const studentSurname = document.querySelector("#studentSurname").value;
      const studentClass = document.querySelector("#studentClass").value;
      const studentAverage = document.querySelector("#studentAverage").value;
      console.log('sa', studentAverage)
      addNewStudent(studentFirstName, studentSurname, studentClass, studentAverage);
      const addStudentModal = document.querySelector('#addStudentModal');
      const modal = bootstrap.Modal.getInstance(addStudentModal);
      modal.hide();
      renderContent("student")
    });
  }
}
