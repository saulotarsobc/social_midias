const link_list = document.querySelector('#link_list');

function getLinks() {
    const form = new FormData();
    form.append('name', 'linuxize');
    form.append('email', 'linuxize@example.com');

    fetch('./php/index.php', {
        method: 'POST',
        body: form
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        link_list.innerHTML = '';
        json.forEach(link => {
            link_list.innerHTML += `<a href="${link.link}" target="_blank" rel="">
            <li class="link">
                <img class="icon" src="${link.icon}" alt="">
                <span class="link_title">
                    ${link.title}
                </span>
            </li>
        </a>`
        });
    });
}

getLinks();