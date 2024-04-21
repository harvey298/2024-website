// Do not edit this file. Edit projects.toml instead.

const PRIORITIES = [15,];

const START_PRIORITIES_AFTER = 2;

const PROJECTS = [
    `<td>
        <a href="project.html?p=website">
            <div class="project">
                
                <h2 class="project-title"><b>Website</b></h2>
                <p>This website.</p><a class="badge open-source" href="https://github.com/marcohoovy/2024-website" target="_blank">Open Source</a> <div class="badge alpha">Alpha</div> <div class="badge active">Active Development</div> <div class="badge js">Language: js</div><div class="badge html">Language: html</div><div class="badge css">Language: css</div><div class="badge rust">Language: rust</div><div class="badge blank-language">Language: wasm</div> <div class="badge framework">Framework: Vite</div>
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=olympus">
            <div class="project">
                
                <h2 class="project-title"><b>Olympus</b></h2>
                <p>Machine Learning powered stock trading algorithm.</p><div class="badge closed-source">Closed Source</div> <div class="badge stable">Stable</div> <div class="badge maintenance">In Maintenance</div> <div class="badge rust">Language: rust</div> <div class="badge framework">Tool: pytorch</div>
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=avaritia">
            <div class="project">
                
                <h2 class="project-title"><b>Avaritia</b></h2>
                <p>Cryptocurrency trading bot.</p><div class="badge closed-source">Closed Source</div> <div class="badge stable">Stable</div> <div class="badge deprecated">Deprecated</div> <div class="badge rust">Language: rust</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=vigil">
            <div class="project">
                
                <h2 class="project-title"><b>Vigil</b></h2>
                <p>bee-hive health.</p><div class="badge closed-source">Closed Source</div> <div class="badge alpha">Alpha</div> <div class="badge active">Active Development</div> <div class="badge rust">Language: rust</div><div class="badge python">Language: python</div> <div class="badge framework">Tool: pytorch</div>
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=steam.rs">
            <div class="project">
                
                <h2 class="project-title"><b>Steam.rs</b></h2>
                <p>Steamworks api in Rust-lang.</p><a class="badge open-source" href="https://github.com/garhow/steam-rs" target="_blank">Open Source</a> <div class="badge beta">Beta</div> <div class="badge active">Active Development</div> <div class="badge rust">Language: rust</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=passenger">
            <div class="project">
                
                <h2 class="project-title"><b>Passenger</b></h2>
                <p>Machine Learning powered computer assistant.</p><div class="badge planned-open-source">Planned to be Open Source</div> <div class="badge stable">Stable</div> <div class="badge maintenance">In Maintenance</div> <div class="badge rust">Language: rust</div><div class="badge html">Language: html</div><div class="badge css">Language: css</div><div class="badge js">Language: js</div> <div class="badge framework">Framework: tauri</div>
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=secret-santa">
            <div class="project">
                
                <h2 class="project-title"><b>Secret-Santa</b></h2>
                <p>Web based Secret Santa used in 2023.</p><div class="badge planned-open-source">Planned to be Open Source</div> <div class="badge stable">Stable</div> <div class="badge deprecated">Deprecated</div> <div class="badge rust">Language: rust</div><div class="badge html">Language: html</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=hoover_api">
            <div class="project">
                
                <h2 class="project-title"><b>Hoover Api</b></h2>
                <p>The secret backend for this website.</p><div class="badge closed-source">Closed Source</div> <div class="badge stable">Stable</div> <div class="badge active">Active Development</div> <div class="badge rust">Language: rust</div><div class="badge python">Language: python</div> <div class="badge framework">Tool: robyn</div>
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=venture">
            <div class="project">
                
                <h2 class="project-title"><b>Venture</b></h2>
                <p>Job search engine.</p><div class="badge closed-source">Closed Source</div> <div class="badge stable">Stable</div> <div class="badge deprecated">Deprecated</div>  
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=aurpm">
            <div class="project">
                
                <h2 class="project-title"><b>Aurpm</b></h2>
                <p>Arch User Repository Package Manager.</p><a class="badge open-source" href="https://github.com/marcohoovy/aurpm" target="_blank">Open Source</a> <div class="badge stable">Stable</div> <div class="badge deprecated">Deprecated</div> <div class="badge rust">Language: rust</div><div class="badge python">Language: python</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=rust.rs">
            <div class="project">
                
                <h2 class="project-title"><b>Rust.rs</b></h2>
                <p>Unofficial Rust+ for the desktop.</p><div class="badge closed-source">Closed Source</div> <div class="badge beta">Beta</div> <div class="badge deprecated">Deprecated</div> <div class="badge rust">Language: rust</div><div class="badge python">Language: python</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=mpd_mc">
            <div class="project">
                
                <h2 class="project-title"><b>Mpd Mc</b></h2>
                <p>Music Player Daemon event based client for Minecraft.</p><a class="badge open-source" href="https://github.com/marcohoovy/mpd_controller" target="_blank">Open Source</a> <div class="badge stable">Stable</div> <div class="badge maintenance">In Maintenance</div> <div class="badge blank-language">Language: java</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=league_of_music_2">
            <div class="project">
                
                <h2 class="project-title"><b>League Of Music 2</b></h2>
                <p>League of Legeneds Compatible sound board.</p><div class="badge planned-open-source">Planned to be Open Source</div> <div class="badge stable">Stable</div> <div class="badge maintenance">In Maintenance</div> <div class="badge rust">Language: rust</div> <div class="badge framework">Tool: slint</div>
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=league_of_music">
            <div class="project">
                
                <h2 class="project-title"><b>League Of Music</b></h2>
                <p>League of Legeneds Compatible sound board.</p><a class="badge open-source" href="https://github.com/marcohoovy/league-of-music.git" target="_blank">Open Source</a> <div class="badge stable">Stable</div> <div class="badge deprecated">Deprecated</div> <div class="badge rust">Language: rust</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=ultrabot">
            <div class="project">
                
                <h2 class="project-title"><b>Ultrabot</b></h2>
                <p>Ultrakill Ai.</p><div class="badge closed-source">Closed Source</div> <div class="badge alpha">Alpha</div> <div class="badge active">Active Development</div> <div class="badge blank-language">Language: C#</div> 
            </div>
        </a></td>`,`<td>
        <a href="project.html?p=archivist">
            <div class="project">
                <div class="badge new" title="New means new to Archivist" >New</div>
                <h2 class="project-title"><b>Archivist</b></h2>
                <p>Project Sorter & Archiver.</p><a class="badge open-source" href="https://github.com/marcohoovy/archivist.git" target="_blank">Open Source</a> <div class="badge stable">Stable</div> <div class="badge active">Active Development</div>  
            </div>
        </a></td>`,
]

export function addProject(width_selector) {

    var contain = document.querySelector('.card');

    var footer = document.querySelector('footer');
    var buffer = "";
    var loops = 0;

    for (;;) {
    
        if (loops > 5) {
            width_selector = 1;
        }
        buffer = '<table><tr>';
        for (let i = 0; i < PROJECTS.length; i++) {

            if (i % width_selector === 0) {
                buffer += '</tr><tr>';
            }

            buffer += `${PROJECTS[i]}`;
        }

        buffer += '</tr></table>';
        contain.innerHTML = buffer;

        if (loops > 5) { break; }

        // var screenWidth = window.screen.width;

        if (contain.clientWidth > footer.scrollWidth-100) {
            width_selector--;
        } else { break }

        loops++;
    }

}