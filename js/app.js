const link_list = document.querySelector('#link_list');
const favicon = document.querySelector('#favicon');
const theme_page = document.querySelector('#theme_page');
const avatar = document.querySelector('#avatar');
const home = document.querySelector('#home');
const title = document.querySelector('#title');

const debug = false;

f_debug('search:', window.location.search);
f_debug('origin:', window.origin);
f_debug('pathname:', window.location.pathname);
f_debug('hostname:', window.location.hostname);
f_debug('href:', window.location.href);
f_debug('protocol:', window.location.protocol);

async function getDefinitonsRequest() {
    return new Promise((resolve, reject) => {
        fetch("./api/index.php", {
            method: 'POST',
            headers: {
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.49',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*',
                'X-Requested-With': 'XMLHttpRequest',
                'Connection': 'keep-alive'
            },
            body: new URLSearchParams({
                'target': getPppoeFromUrl(),
            })

        }).then(function (res) {
            return res.json();

        }).then(function (json) {
            resolve(json);

        }).catch(err => {
            reject(err);
        });
    });
}
async function getDefinitons() {
    let definitions = await getDefinitonsRequest();

    f_debug(definitions);

    //inicializar particulas
    initParticles(definitions.colors.primary);

    //titulo da aba
    document.title = definitions.title;

    //cor do tema
    theme_page.content = definitions.colors.primary;

    //background
    home.style.backgroundImage = `url('${definitions.background}')`;

    //favicon
    favicon.href = definitions.avatar;

    //titulo da pagina 
    title.innerHTML = definitions.title;

    //avatar
    avatar.src = definitions.avatar;

    //list
    link_list.innerHTML = '';
    definitions.list.forEach(link => {
        link_list.innerHTML += `<a href="${link.link}" target="_blank" rel="">
            <li class="link_iten">
            <img class="icon" src="${link.icon}">
            <span class="link_title">
            ${link.title}
            </span>
            </li>
            </a>`
    });

    //colors
    title.style.backgroundColor = definitions.colors.primary;

    //itens
    const link_iten = document.querySelectorAll('.link_iten');
    link_iten.forEach(element => {
        //define cor dos itens
        element.style.backgroundColor = definitions.colors.secondary;

        //hover
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = definitions.colors.primary;
        });

        //hover
        element.addEventListener('mouseout', () => {
            element.style.backgroundColor = definitions.colors.secondary;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getDefinitons();
});

function initParticles(color) {
    var particles = new BVAmbient({
        selector: "#ambient",
        fps: 30,
        max_transition_speed: 25000,
        min_transition_speed: 15000,
        particle_number: 30,
        particle_maxwidth: 50,
        particle_minwidth: 30,
        particle_radius: 50,
        particle_opacity: true,
        particle_colision_change: false,
        particle_background: color,
        particle_image: {
            image: false,
            src: ""
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                particle_number: "15"
            }
        },
        {
            breakpoint: 480,
            settings: {
                particle_number: "10"
            }
        }
        ]
    });
}

function getPppoeFromUrl() {
    // let target = location.pathname.replace("/", "");

    let target = location.search.replace("?", "");

    console.log(">>> ", target);

    if (target == "") {
        console.info(`Ausencia de parametros. Carregando definições de Conect`);
        return 'conect';
    } else {
        console.info(`Carregando definições de ${target}`);
        return target;
    }
}

function f_debug(tit, param) {
    if (debug) {
        console.log(tit, param);
    }
}

