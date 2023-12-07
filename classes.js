export function renderClasses() {
    const fragment = document.createDocumentFragment();
    classesData.forEach(classItem => {
        const li = document.createElement('li');
        li.textContent = classItem.name;
        fragment.appendChild(li);
    });
    classList.innerHTML = '';
    classList.appendChild(fragment);
}