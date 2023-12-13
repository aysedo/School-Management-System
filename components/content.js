import { teachersData } from "./data.js"
import { studentsData } from "./data.js"
import { classesData } from "./data.js"

const contentContainer = document.querySelector('#content-container')

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
   }else if (pPage === "class") {
      contentContainer.innerHTML = `
    <h1 class="m-5">Classes</h1>
    <div class="container text-center">
      <div class="row">
      ${classesData.map(classcontent => {
        return `
            <div class="col-4">
              <div class="card">
                  <i class="bi bi-pencil-square"></i>
                  <i class="bi bi-x-circle"></i>
                  <div class="card-body">
                      <h5 class="card-title">${classcontent.class}</h5>
                      <h6>${classcontent.teacher}</h6>
                      <p class="card-text">Bazı hızlı örnek metinler kartın içeriğini oluşturmak için buraya yerleştirilebilir.</p>
                       <a href="#" class="card-link">Students</a>
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
          <button id="add-students-btn">Add Class</button>
        </div>
      </div>
    </div
      `
    }

    else if (pPage === "teacher") {
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
                    <p class="card-text">Bazı hızlı örnek metinler kartın içeriğini oluşturmak için buraya yerleştirilebilir.</p>
                    <a href="#" class="primary m-5">Students</a>
                    <a href="#" class="primary">Class</a>
                </div>
              </div>
          </div>`
      }).join(" ")
        }
      </div>
    </div>  
      `
    }

    else if (pPage === "student") {

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
                          <p class="card-text">Bazı hızlı örnek metinler kartın içeriğini oluşturmak için buraya yerleştirilebilir.</p>
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
          <button id="add-students-btn">Add Student</button>
        </div>
      </div>
    </div>`

      document.querySelector('#add-students-btn').addEventListener('click', function () {
        console.log('clicked')
      })
    }


  }
