const footer = document.querySelector('#footer-container')

export function renderFooter() {

    footer.innerHTML = `

<footer class="navbar navbar-expand-lg bg-body-tertiary fixed-bottom">
<div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
          </li>
    </div>
</footer>
`
}