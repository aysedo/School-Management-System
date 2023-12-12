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
        <div class="col">
        <div class="card ml-10" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card ml-10" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
      <div class="col">
      <div class="card ml-10" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
    </div>
  </div>
</div> `

  }

  else if (pPage === "class") {
    contentContainer.innerHTML = `
    <h1 class="m-5">Classes</h1>
    <div class="container text-center">
      <div class="row">
      ${contentContainer.innerHTML += classesData.map(classcontent => {
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
          <button>Add Student</button>
        </div>
      </div>
    </div>`
  }

  else if (pPage === "teacher") {
    contentContainer.innerHTML = `
    <h1 class="m-5">Teachers</h1>
    <div class="container text-center">
      <div class="row">`
    contentContainer.innerHTML += teachersData.map(teacher => {
      return `<div class="col-4">
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
  else if (pPage === "student") {

    contentContainer.innerHTML = `
    <h1 class="m-5">Students</h1>
    <div class="container text-center">
      <div class="row">
      ${contentContainer.innerHTML += studentsData.map(student => {
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
          <button>Add Student</button>
        </div>
      </div>
    </div>`
  }


}
