fetch('https://api.github.com/users/lucaazalim')
    .then(response => response.json())
    .then(data => {

        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('bio').innerHTML = data.bio;

        const links = [
            {
                name: "GitHub",
                icon: "fa-brands fa-github",
                color: "#333",
                url: data.html_url
            },
            {
                name: "LinkedIn",
                icon: "fa-brands fa-linkedin",
                color: "#0077B5",
                url: "https://www.linkedin.com/in/luca-azalim-04153999/"
            },
            {
                name: "Twitter",
                icon: "fa-brands fa-twitter",
                color: "#1DA1F2",
                url: "https://twitter.com/" + data.twitter_username
            },
            {
                name: "Threads",
                icon: "fa-solid fa-at",
                color: "#000",
                url: "https://www.threads.net/@lucaazalim"
            },
            {
                name: "Instagram",
                icon: "fa-brands fa-instagram",
                color: "#E1306C",
                url: "https://www.instagram.com/lucaazalim"
            },
            {
                name: "Comidas do Luca",
                icon: "fa-solid fa-burger",
                color: "#E1306C",
                url: "https://www.instagram.com/comidasdoluca/"
            },
            {
                name: "Filmes e séries assistidos",
                icon: "fas fa-film",
                color: "#1da666",
                url: "https://docs.google.com/spreadsheets/d/15niBHmP8eMCLUAH7XefBBk2QyjQj0X57hQSq8tQXaQ0/edit#gid=991418092"
            },
            {
                name: "Rede Sky",
                icon: "fa-solid fa-heart",
                url: "https://redesky.com/"
            }
        ];

        for (const link of Object.values(links)) {

            if(!link.color) link.color = '#363636';

            document.getElementById('links').innerHTML += `
                <a class="link" href="${link.url}" target="_blank">
                    <div class="link-icon" style="background-color: ${link.color}">
                        <i class="${link.icon}"></i>
                    </div>
                    <div class="link-name">
                        ${link.name}
                    </div>
                </a>
            `
        }

    })
    .catch(error => console.log('Error fetching data:', error));