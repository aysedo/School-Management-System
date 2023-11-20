const app = document.getElementById("app");


const renderNav = () => {
    app.innerHTML += `
        <div class="navbar">
         <a href="#" class="lms">LMS</a>
            <a href="#" class="home">Home</a>
            <a href="#" class="teachers">Teachers</a>
            <a href="#" class="students">Students</a>
            <a href="#" class="user">User</a>
            <div>
              <i class="fa-regular fa-user"></i>
            </div>
        </div>

        <h1 id="greeting">Welcome Mirijam</h1>
        
        <section id="section_one">
            <div class="students-container">numbers of students</div>
            <div class="teachers-container">numbers of teachers</div>
            <div class="classes-container">numbers of classes</div>
        </section>




       <footer id="footer-container">
            <a a href="#" class="About us">About us</a>
            <a href="#" class="contact">Contact</a>
       </footer>
        
        `;
};





const renderApp = () => {
    renderNav();

};
export { renderApp };