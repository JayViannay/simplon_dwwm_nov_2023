console.log('Hello World');

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let ul = document.getElementById('list');
            json.forEach(el => {
                let li = document.createElement('li')
                li.innerHTML = el.name
                ul.appendChild(li)
            });
        });
}

getUsers();