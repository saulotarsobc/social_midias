function getLinks() {
    const form = new FormData();
    form.append('name', 'linuxize');
    form.append('email', 'linuxize@example.com');
    
    fetch('./php/index.php', {
        method: 'POST',
        body: form
    });
}

getLinks();