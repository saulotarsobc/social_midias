const link_list = document.querySelector('#link_list');
const favicon = document.querySelector('#favicon');
const avatar = document.querySelector('#avatar');
const home = document.querySelector('#home');
const title = document.querySelector('#title');

const debug = true;

function getDefinitons() {
    const form = new FormData();
    form.append('pathname', window.location.pathname);

    fetch('./php/index.php', {
        method: 'POST',
        body: form
    }).then(function (res) {
        return res.json();
    }).then(function (definitions) {

        if (debug) {
            console.log(definitions);
        }

        //inicializar particulas
        initParticles(definitions.colors.primary);

        //titulo da aba
        document.title = definitions.title;

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
    });
}


function initParticles(color) {
    var particles = new BVAmbient({
        selector: "#ambient",
        fps: 30,
        max_transition_speed: 25000,
        min_transition_speed: 15000,
        particle_number: 30,
        particle_maxwidth: 30,
        particle_minwidth: 10,
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


document.addEventListener("DOMContentLoaded", () => {
    getDefinitons();
});