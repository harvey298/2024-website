import * as tracking from '../tracking/pkg/tracking.js';
import * as wasm from '../project_render/pkg/project_render.js';

document.querySelector('#app').innerHTML = `
<div>
<div class="title">
  <h1>Loading Project!</h1>
</div>
<div class="card">
Loading Project!
</div>

<div class="sidebar">
<div class="tags">
<p id="tags_text">Tags</p>
<hr>
</div>
<hr>


</div>

</div>
`
await tracking.check_url_argument();
document.querySelector(".card").innerHTML = await wasm.render();
