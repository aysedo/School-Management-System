export function modalFragmentClass() {
    return `
        <!-- Modal for adding a new class -->
        <div class="modal" id="addClassModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal-Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Class</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal-Body -->
                    <div class="modal-body">
                        <!-- Form for adding a class -->
                        <form id="addClassForm">
                            <label for="className">Class Name:</label>
                            <input type="text" id="className" class="form-control" required>
                            <label for="classTeacher">Teacher Name:</label>
                            <input type="text" id="classTeacher" class="form-control" required>
                            <button class="btn btn-success mt-3">Add Class</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`
}