export function modalFragmentStudent() {
    return `
        <!-- Modal for adding a new student -->
        <div class="modal" id="addStudentModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal-Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Student</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal-Body -->
                    <div class="modal-body">
                        <!-- Form for adding a student -->
                        <form id="addStudentForm">
                            <label for="studentFirstName">Firstname:</label>
                            <input type="text" id="studentFirstName" class="form-control" required>
                            <label for="studentSurname">Surname:</label>
                            <input type="text" id="studentSurname" class="form-control" required>
                            <label for="studentClass">Class:</label>
                            <input type="text" id="studentClass" class="form-control" required>
                            <label for="studentAverage">Average:</label>
                            <input type="text" id="studentAverage" class="form-control" required>
                            <button class="btn btn-success mt-3">Add Student</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`
}