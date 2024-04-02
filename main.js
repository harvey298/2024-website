import './style.css'
import * as wasm from './tracking/pkg/tracking.js';

document.querySelector('#app').innerHTML = `
<div>
  <h1 class="title" >Marco's Hoovy.co.uk </h1>
  <div class="card">
    <h2>About Me</h2>
    <p>Hi! I'm Marco and I do programming</p>
    <p>For my projects, <a href="/projects/index.html" >click here</a></p>


  </div>

</div>
`;

await wasm.check_url_argument();