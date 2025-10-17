const elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];

const max_electrons_per_orbit = [2, 8, 18, 32, 50, 72, 98];

function to_radians(angle) {
    return angle * (Math.PI / 180);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function get_electron_orbit(el_num) {
    let total = 0;
    let orbit = 0;
    for (let i = 0; i < max_electrons_per_orbit.length; i++) {
        let max_els = max_electrons_per_orbit[i];
        total += max_els;
        if (total >= el_num) {
            return orbit;
        }
        orbit++;
    }
}

const orbit_percent_step = 10; // %
const atom_size = 450; // px
const electron_size = 15; // px
const start_orbit_size = 15; // %
const electron_angular_vel = 0.125; // radians

let atom = document.getElementById("atom");
let electrons_count = 0;
let electrons_starts = [];

let ang = 0;

atom.style.width = atom_size + "px";
atom.style.width = atom_size + "px";

// <orbits>
let orbit_last_level = 0;

function create_orbit() {
    if (orbit_last_level > 8) return;
    let new_orbit = document.createElement("div");
    new_orbit.className = "orbit";
    atom.appendChild(new_orbit);

    new_orbit.style.width  = (start_orbit_size + orbit_percent_step * orbit_last_level) / 100 * atom_size + "px";
    new_orbit.style.height = (start_orbit_size + orbit_percent_step * orbit_last_level) / 100 * atom_size + "px";

    orbit_last_level++;
}

function get_orbit_radius(level) {
    return (start_orbit_size + orbit_percent_step * level) / 100 * atom_size;
}
// </orbits>

// <electrons>
function add_electron() {
    let new_electron = document.createElement("div");
    new_electron.className = "electron";

    atom.appendChild(new_electron);
    new_electron.id = `electron_${electrons_count}`;

    new_electron.style.width  = electron_size + "px";
    new_electron.style.height = electron_size + "px";

    electrons_starts.push(electrons_count * to_radians(360 / max_electrons_per_orbit[get_electron_orbit(electrons_count + 1)]));
    electrons_count++;
}

function delete_electron() {
    let el = document.getElementById(`electron_${electrons_count - 1}`);
    el.remove();
    electrons_count--;
}

async function update() {
    while (true) {
        let electrons = atom.getElementsByClassName("electron");
        let electrons_count_el = document.getElementById("electron_amount");

        for (let i = 0; i < electrons.length; i++) {
            electrons[i].style.left = `${0.5 * atom_size + Math.sin(electrons_starts[i] + ang) * get_orbit_radius(get_electron_orbit(i + 1)) * 0.5}px`;
            electrons[i].style.top  = `${0.5 * atom_size + Math.cos(electrons_starts[i] + ang) * get_orbit_radius(get_electron_orbit(i + 1)) * 0.5}px`
        }
        ang += electron_angular_vel;
        electrons_count_el.innerHTML = electrons.length;
        if (electrons_count > 0) document.getElementById("element_name").innerHTML = elements[electrons_count - 1];
        else document.getElementById("element_name").innerHTML = "*"
        await sleep(50);
    }
}
// </electrons>

for (let i = 0; i < 9; i++) create_orbit();
update();