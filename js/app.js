function boot(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
        .then(data => {
            let template = '';
            data.forEach(artist => {
                //` not ' or "
                template += `<div class="card">${artist.name}</div>`                   
            })
            document.querySelector('#artists-list').innerHTML = template;
        }
    )
}
boot();