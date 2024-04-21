import {addProject} from './projects.js'
import * as wasm from '../tracking/pkg/tracking.js';

document.querySelector('#app').innerHTML = `
<div>
<div class="title">
  <h1>My Projects!</h1>
  <p>(Over the past 8 years)</p>
  <p>This list isn't complete as Archivist can only process Rust Projects currently (100 more to go)</p>
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

await wasm.check_url_argument();
