import './style.css'

var content = "";
var title_extra = "";

if (window.location.pathname === "/projects/404.html" || window.location.pathname === "/projects/404") {
    content = "<p>Sorry details for this project aren't available!</p> <p>Try going back to the <a href='/projects/'>projects page</a></p>"
    title_extra = "<p>Project Details aren't currently public!</p>";
} else {
    content = "<p>Sorry this page isn't available or doesn't exist!</p> <p>Try going back to the <a href='/'>home page</a></p>"
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="title" >404! Your lost!${title_extra}</h1>
    <div class="card">
        ${content}
    </div>

  </div>
`

