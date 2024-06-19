import { neonCursor } from "http://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js";

const root = document.getElementById("cursor");

const options = {
    el: root,
    shaderPoints: 4,
    curvePoints: 40,
}
neonCursor(options)