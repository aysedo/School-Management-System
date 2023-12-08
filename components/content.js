
const contentContainer = document.querySelector('#content-container')



export function renderContent(pPage) {
  if (pPage === "home") {
    contentContainer.innerHTML = `
    `

  }

  else if (pPage === "class") {
    contentContainer.innerHTML = `classes`
  }

  else if (pPage === "teacher") {
    contentContainer.innerHTML = `teachers`
  }
  else if (pPage === "student") {
    contentContainer.innerHTML = `students`
  }


}