
    
     const teachersData = [
        { id: 101, name: 'John Doe' },
        { id: 102, name: 'Jane Smith' },
        // Add more teachers as needed
    ];
    
    
    
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