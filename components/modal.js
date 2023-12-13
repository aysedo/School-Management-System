import { contentContainer } from "./dom.js"

export function modal(){
    contentContainer.innerHTML=
    `</div>
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