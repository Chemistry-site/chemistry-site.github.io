const elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
const elements_info = {
    "H": {
        "name": "Водород",
        "atomic_mass": 1.008
    },
    "He": {
        "name": "Гелий",
        "atomic_mass": 4.0026
    },
    "Li": {
        "name": "Литий",
        "atomic_mass": 6.94
    },
    "Be": {
        "name": "Бериллий",
        "atomic_mass": 9.0122
    },
    "B": {
        "name": "Бор",
        "atomic_mass": 10.81
    },
    "C": {
        "name": "Углерод",
        "atomic_mass": 12.011
    },
    "N": {
        "name": "Азот",
        "atomic_mass": 14.007
    },
    "O": {
        "name": "Кислород",
        "atomic_mass": 15.999
    },
    "F": {
        "name": "Фтор",
        "atomic_mass": 18.998
    },
    "Ne": {
        "name": "Неон",
        "atomic_mass": 20.180
    },
    "Na": {
        "name": "Натрий",
        "atomic_mass": 22.990
    },
    "Mg": {
        "name": "Магний",
        "atomic_mass": 24.305
    },
    "Al": {
        "name": "Алюминий",
        "atomic_mass": 26.982
    },
    "Si": {
        "name": "Кремний",
        "atomic_mass": 28.085
    },
    "P": {
        "name": "Фосфор",
        "atomic_mass": 30.974
    },
    "S": {
        "name": "Сера",
        "atomic_mass": 32.06
    },
    "Cl": {
        "name": "Хлор",
        "atomic_mass": 35.45
    },
    "Ar": {
        "name": "Аргон",
        "atomic_mass": 39.948
    },
    "K": {
        "name": "Калий",
        "atomic_mass": 39.098
    },
    "Ca": {
        "name": "Кальций",
        "atomic_mass": 40.078
    },
    "Sc": {
        "name": "Скандий",
        "atomic_mass": 44.956
    },
    "Ti": {
        "name": "Титан",
        "atomic_mass": 47.867
    },
    "V": {
        "name": "Ванадий",
        "atomic_mass": 50.942
    },
    "Cr": {
        "name": "Хром",
        "atomic_mass": 51.996
    },
    "Mn": {
        "name": "Марганец",
        "atomic_mass": 54.938
    },
    "Fe": {
        "name": "Железо",
        "atomic_mass": 55.845
    },
    "Co": {
        "name": "Кобальт",
        "atomic_mass": 58.933
    },
    "Ni": {
        "name": "Никель",
        "atomic_mass": 58.693
    },
    "Cu": {
        "name": "Медь",
        "atomic_mass": 63.546
    },
    "Zn": {
        "name": "Цинк",
        "atomic_mass": 65.38
    },
    "Ga": {
        "name": "Галлий",
        "atomic_mass": 69.723
    },
    "Ge": {
        "name": "Германий",
        "atomic_mass": 72.630
    },
    "As": {
        "name": "Мышьяк",
        "atomic_mass": 74.922
    },
    "Se": {
        "name": "Селен",
        "atomic_mass": 78.971
    },
    "Br": {
        "name": "Бром",
        "atomic_mass": 79.904
    },
    "Kr": {
        "name": "Криптон",
        "atomic_mass": 83.798
    },
    "Rb": {
        "name": "Рубидий",
        "atomic_mass": 85.468
    },
    "Sr": {
        "name": "Стронций",
        "atomic_mass": 87.62
    },
    "Y": {
        "name": "Иттрий",
        "atomic_mass": 88.906
    },
    "Zr": {
        "name": "Цирконий",
        "atomic_mass": 91.224
    },
    "Nb": {
        "name": "Ниобий",
        "atomic_mass": 92.906
    },
    "Mo": {
        "name": "Молибден",
        "atomic_mass": 95.96
    },
    "Tc": {
        "name": "Технеций",
        "atomic_mass": 98
    },
    "Ru": {
        "name": "Рутений",
        "atomic_mass": 101.07
    },
    "Rh": {
        "name": "Родий",
        "atomic_mass": 102.91
    },
    "Pd": {
        "name": "Палладий",
        "atomic_mass": 106.42
    },
    "Ag": {
        "name": "Серебро",
        "atomic_mass": 107.87
    },
    "Cd": {
        "name": "Кадмий",
        "atomic_mass": 112.41
    },
    "In": {
        "name": "Индий",
        "atomic_mass": 114.82
    },
    "Sn": {
        "name": "Олово",
        "atomic_mass": 118.71
    },
    "Sb": {
        "name": "Сурьма",
        "atomic_mass": 121.76
    },
    "Te": {
        "name": "Теллур",
        "atomic_mass": 127.60
    },
    "I": {
        "name": "Иод",
        "atomic_mass": 126.90
    },
    "Xe": {
        "name": "Ксенон",
        "atomic_mass": 131.29
    },
    "Cs": {
        "name": "Цезий",
        "atomic_mass": 132.91
    },
    "Ba": {
        "name": "Барий",
        "atomic_mass": 137.33
    },
    "La": {
        "name": "Лантан",
        "atomic_mass": 138.91
    },
    "Ce": {
        "name": "Церий",
        "atomic_mass": 140.12
    },
    "Pr": {
        "name": "Празеодим",
        "atomic_mass": 140.91
    },
    "Nd": {
        "name": "Неодим",
        "atomic_mass": 144.24
    },
    "Pm": {
        "name": "Прометий",
        "atomic_mass": 145
    },
    "Sm": {
        "name": "Самарий",
        "atomic_mass": 150.36
    },
    "Eu": {
        "name": "Европий",
        "atomic_mass": 151.96
    },
    "Gd": {
        "name": "Гадолиний",
        "atomic_mass": 157.25
    },
    "Tb": {
        "name": "Тербий",
        "atomic_mass": 158.93
    },
    "Dy": {
        "name": "Диспрозий",
        "atomic_mass": 162.50
    },
    "Ho": {
        "name": "Гольмий",
        "atomic_mass": 164.93
    },
    "Er": {
        "name": "Эрбий",
        "atomic_mass": 167.26
    },
    "Tm": {
        "name": "Тулий",
        "atomic_mass": 168.93
    },
    "Yb": {
        "name": "Иттербий",
        "atomic_mass": 173.05
    },
    "Lu": {
        "name": "Лютеций",
        "atomic_mass": 174.97
    },
    "Hf": {
        "name": "Гафний",
        "atomic_mass": 178.49
    },
    "Ta": {
        "name": "Тантал",
        "atomic_mass": 180.95
    },
    "W": {
        "name": "Вольфрам",
        "atomic_mass": 183.84
    },
    "Re": {
        "name": "Рений",
        "atomic_mass": 186.21
    },
    "Os": {
        "name": "Осмий",
        "atomic_mass": 190.23
    },
    "Ir": {
        "name": "Иридий",
        "atomic_mass": 192.22
    },
    "Pt": {
        "name": "Платина",
        "atomic_mass": 195.08
    },
    "Au": {
        "name": "Золото",
        "atomic_mass": 196.97
    },
    "Hg": {
        "name": "Ртуть",
        "atomic_mass": 200.59
    },
    "Tl": {
        "name": "Таллий",
        "atomic_mass": 204.38
    },
    "Pb": {
        "name": "Свинец",
        "atomic_mass": 207.2
    },
    "Bi": {
        "name": "Висмут",
        "atomic_mass": 208.98
    },
    "Po": {
        "name": "Полоний",
        "atomic_mass": 209
    },
    "At": {
        "name": "Астат",
        "atomic_mass": 210
    },
    "Rn": {
        "name": "Радон",
        "atomic_mass": 222
    },
    "Fr": {
        "name": "Франций",
        "atomic_mass": 223
    },
    "Ra": {
        "name": "Радий",
        "atomic_mass": 226
    },
    "Ac": {
        "name": "Актиний",
        "atomic_mass": 227
    },
    "Th": {
        "name": "Торий",
        "atomic_mass": 232.04
    },
    "Pa": {
        "name": "Протактиний",
        "atomic_mass": 231.04
    },
    "U": {
        "name": "Уран",
        "atomic_mass": 238.03
    },
    "Np": {
        "name": "Нептуний",
        "atomic_mass": 237
    },
    "Pu": {
        "name": "Плутоний",
        "atomic_mass": 244
    },
    "Am": {
        "name": "Америций",
        "atomic_mass": 243
    },
    "Cm": {
        "name": "Кюрий",
        "atomic_mass": 247
    },
    "Bk": {
        "name": "Берклий",
        "atomic_mass": 247
    },
    "Cf": {
        "name": "Калифорний",
        "atomic_mass": 251
    },
    "Es": {
        "name": "Эйнштейний",
        "atomic_mass": 252
    },
    "Fm": {
        "name": "Фермий",
        "atomic_mass": 257
    },
    "Md": {
        "name": "Менделевий",
        "atomic_mass": 258
    },
    "No": {
        "name": "Нобелий",
        "atomic_mass": 259
    },
    "Lr": {
        "name": "Лоуренсий",
        "atomic_mass": 266
    },
    "Rf": {
        "name": "Резерфордий",
        "atomic_mass": 267
    },
    "Db": {
        "name": "Дубний",
        "atomic_mass": 268
    },
    "Sg": {
        "name": "Сиборгий",
        "atomic_mass": 269
    },
    "Bh": {
        "name": "Борий",
        "atomic_mass": 270
    },
    "Hs": {
        "name": "Хассий",
        "atomic_mass": 277
    },
    "Mt": {
        "name": "Мейтнерий",
        "atomic_mass": 278
    },
    "Ds": {
        "name": "Дармштадтий",
        "atomic_mass": 281
    },
    "Rg": {
        "name": "Рентгений",
        "atomic_mass": 282
    },
    "Cn": {
        "name": "Коперниций",
        "atomic_mass": 285
    },
    "Nh": {
        "name": "Нихоний",
        "atomic_mass": 286
    },
    "Fl": {
        "name": "Флеровий",
        "atomic_mass": 289
    },
    "Mc": {
        "name": "Московий",
        "atomic_mass": 290
    },
    "Lv": {
        "name": "Ливерморий",
        "atomic_mass": 293
    },
    "Ts": {
        "name": "Теннессин",
        "atomic_mass": 294
    },
    "Og": {
        "name": "Оганесон",
        "atomic_mass": 294
    }
};
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
        if (electrons_count > 0) {
            document.getElementById("element_name").innerHTML = elements[electrons_count - 1];
            document.getElementById("element_name_ru").innerHTML = elements_info[elements[electrons_count - 1]].name;
            document.getElementById("element_mass").innerHTML = elements_info[elements[electrons_count - 1]].atomic_mass;
        } else {
            document.getElementById("element_name").innerHTML = "*";
            document.getElementById("element_name_ru").innerHTML = "*";
            document.getElementById("element_mass").innerHTML = "*";
        }
        await sleep(50);
    }
}
// </electrons>

for (let i = 0; i < 9; i++) create_orbit();
update();