import { studentsData } from ".studentsComponent.js";
import { header } from "./components/header.js";
import { render } from "./function.js";

render('#app',header +layout)






document.querySelector("#employees-link").addEventListener("click",()=>{render("#content",studentsData.content)})
document.querySelector("#hr-link").addEventListener("click",()=>{render("#content",teachersData.name)})
document.querySelector("#settings-link").addEventListener("click",()=>{render("#content","settings")})



