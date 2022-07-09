const link_list = document.querySelector('#link_list');
const avatar = document.querySelector('#avatar');
const home = document.querySelector('#home');
const title = document.querySelector('#title');


function getDefinitons() {
    const form = new FormData();
    // form.append('name', 'linuxize'); //exemplo de dados via post

    fetch('./php/index.php', {
        method: 'POST',
        body: form
    }).then(function (res) {
        return res.json();
    }).then(function (definitions) {

        //avatar
        avatar.src = './img/' + definitions.avatar;

        //background
        home.style.backgroundImage = `url('./img/${definitions.background}')`;

        //title
        title.innerHTML = definitions.title;

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
            //hover
            element.style.backgroundColor = definitions.colors.secondary;

            element.addEventListener('mouseover', function () {
                // console.log(123)
                element.style.backgroundColor = definitions.colors.primary;
            });
            element.addEventListener('mouseout', function () {
                // console.log(123)
                element.style.backgroundColor = definitions.colors.secondary;
            });
        });

    });
}

getDefinitons();

/* Check External Source: bvambient.js */
document.addEventListener("DOMContentLoaded", function () {
    var demo1 = new BVAmbient({
        selector: "#ambient",
        fps: 60,
        max_transition_speed: 25000,
        min_transition_speed: 20000,
        particle_number: 30,
        particle_maxwidth: 30,
        particle_minwidth: 10,
        particle_radius: 50,
        particle_opacity: true,
        particle_colision_change: true,
        particle_background: "#b80606",
        particle_image: {
            image: true,
            src: "./img/avatar.jpeg"
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
});