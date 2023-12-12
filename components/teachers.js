import { teachersData } from "./data.js"


// Funktion zum Hinzufügen eines neuen Lehrers
export function addNewTeacher(name, subject) {
    const newTeacher = {
        name: name,
        subject: subject
    };
    teachersData.push(newTeacher);

}
