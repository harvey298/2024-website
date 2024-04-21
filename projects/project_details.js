import * as tracking from '../tracking/pkg/tracking.js';
import * as wasm from '../project_render/pkg/project_render.js';

await tracking.check_url_argument();

var data = await wasm.render();

if (data === undefined) {
  document.querySelector("#title-content").innerHTML = "Loading Failed! :(";
  document.querySelector(".card").innerHTML = "My request to my backend failed! There is a high chance my servers are down or there is a mistake in the WASM. Please try again later.";
} else {
  document.querySelector(".card").innerHTML = data;
}


