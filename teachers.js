
    export function renderTeachers() {
        const fragment = document.createDocumentFragment();
        teachersData.forEach(teacher => {
            const li = document.createElement('li');
            li.textContent = teacher.name;
            fragment.appendChild(li);
        });
        teacherList.innerHTML = '';
        teacherList.appendChild(fragment);
    }