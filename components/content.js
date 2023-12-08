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
</div>
    

    

  

    `

  }

  else if (pPage === "class") {
    contentContainer.innerHTML = `
    <h1>Welcome Mirijam</h1>
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`
  }

  else if (pPage === "teacher") {
    contentContainer.innerHTML = `teachers`
  }
  else if (pPage === "student") {
    contentContainer.innerHTML = `students`
  }


}