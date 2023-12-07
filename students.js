import { app } from "./dashboard.js"

export
const students = [{
    name: "Max",
    surName: "Hermann",
    average: " ",
    class: "Fullstack Class"
},
{
    name: "Alice",
    surName: "Müller",
    average: " ",
    class: "Cloud Class"
},
{
    name: "Peter",
    surName: "Pan",
    average: " ",
    class:"Development"
}

]





  ${students.map((student) =>


function renderContent() {
    const studentCArd=document.querySelector('#app')
    studentCArd.innerHTML += `
    <div class="card" style="width: 18rem;">
  
        <div class="card m-5" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title ">${students.length}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>`
    
    
    
}