import * as tracking from '../tracking/pkg/tracking.js';

const GAMES = [
    {
        "name": "Tik-Tak-Toe",
        "id": "ttt",
    }
]

var game_data_buffer = "";

for (var i = 0; i < GAMES.length; i++) {

    game_data_buffer += `<div class="game-card">
    <a href="/games/game.html?g=${GAMES[i].id}"> <h2>${GAMES[i].name}</h2> </a>
    </div><br>`
}

document.querySelector('#app').innerHTML = `
<h1 class="title">Games</h1>

${game_data_buffer}

`;

await tracking.check_url_argument();
