import { employeesData } from ".studentsComponent.js";
import { header } from "./components/header.js";
import { layout } from "./components/layout.js";
import { render } from "./function.js";

render('#app',header+layout)






document.querySelector("#employees-link").addEventListener("click",()=>{render("#content",employeesData.content)})
document.querySelector("#hr-link").addEventListener("click",()=>{render("#content",employeesData.name)})
document.querySelector("#settings-link").addEventListener("click",()=>{render("#content","settings")})



