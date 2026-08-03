import "./styles/main.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="wavelab">

    <header id="topbar">

        <div class="logo">
            🌊 WaveLab
        </div>

        <nav>

            <button>File</button>
            <button>View</button>
            <button>Experiment</button>
            <button>Tools</button>
            <button>Help</button>

        </nav>

        <div id="fps">

            FPS ---

        </div>

    </header>

    <div id="workspace">

        <aside id="sidebar">

            <h2>Experiments</h2>

            <ul>

                <li>▶ Plane Wave</li>
                <li>▶ Two Plane Waves</li>
                <li>▶ Spherical Wave</li>

            </ul>

        </aside>

        <main id="viewport">

            <canvas id="canvas"></canvas>

        </main>

    </div>

    <footer id="statusbar">

        Ready

    </footer>

</div>
`;