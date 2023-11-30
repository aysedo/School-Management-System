import {renderApp} from "./dashboard.js"


export function renderApp (){
    renderNav();
    renderContent(getStudent());
    renderContent(getTeacher());
    renderContent(getClasses());
    renderFooter()

};

