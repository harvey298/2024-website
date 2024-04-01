import '../style.css'
import './project_styles.css'
import {addProject} from './projects.js'

document.querySelector('#app').innerHTML = `
<div>
<div class="title">
  <h1>My Projects!</h1>
  <p>(Over the past 8 years)</p>
</div>

<input type="number" min="1" id="width_selector" placeholder="Rows"></input>

<div class="card">


</div>
</div>
`

addProject(4);

document.querySelector('#width_selector').addEventListener('change', (event) => {

  addProject(Number(event.target.value));
})