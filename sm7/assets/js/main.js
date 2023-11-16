const userEl = document.querySelector('.user-container')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        // console.log(users);

        for (let i = 0; i < 10; i++) {
            userEl.insertAdjacentHTML('beforeend', `
        
                <div class="user">
                    <p>${users[i].title}</p>
                    <p>${users[i].body}</p>
                </div>
            `)
        }
        /* users.forEach(user => {
            let limit = 1;
            if (limit < 10) {
                userEl.insertAdjacentHTML('beforeend', `
        
                <div class="user">
                    <p>${user.title}</p>
                    <p>${user.body}</p>
                </div>
            `)
            } else {
                userEl.insertAdjacentHTML('beforeend', `
        
                <div class="user">
                    <p>1111}</p>
                    <p>22222</p>
                </div>
            `)
            }
        });
 */

    })
    .catch(error => {
        userEl.insertAdjacentHTML('beforeend', `
            <h2 class="error"> Ошибка: ${error} <h2>
        `)
    })


/* function Limit(lim, el) {
    for (let i = 0; i < lim; i++) {
        userEl.insertAdjacentHTML('beforeend', `
        
                <div class="user">
                    <p>${el.title}</p>
                    <p>${el.body}</p>
                </div>
            `)

    }
} */

