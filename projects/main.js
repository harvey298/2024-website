import '../style.css'
import './project_styles.css'


document.querySelector('#app').innerHTML = `
<div>
<div class="title">
  <h1>My Projects!</h1>
  <p>(Over the past 8 years)</p>
</div>
<div class="card">
  <a href="project1.html">
    <div class="project">
      <h2>Project 1</h2>
      <p>This is a brief summary of Project 1.</p>
    </div>
  </a>
  <a href="project2.html">
    <div class="project">
      <h2>Project 2</h2>
      <p>This is a brief summary of Project 2.</p>
    </div>
  </a>
  <!-- Add more projects as needed -->
</div>
</div>
`