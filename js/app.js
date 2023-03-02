const loadGithubUser = () => {
    fetch(`https://api.github.com/users?per_page=10`)
    .then(res => res.json())
    .then(data => displayUser(data))
}
// display 10 user

const displayUser = (data) => {
    const parent = document.getElementById("user-container");
    console.log(data);
    data.forEach((user) => {
        fetch(user.followers_url)
        .then(res => res.json())
        .then(data => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
            <img class="card-img" src=${user.avatar_url} alt="" height="500" >
            <h4 class="text-danger my-3">Name : ${user.login} </h4>
            <h4 class=" mb-5">Repo Link : ${user.repos_url} </h4>
            
            `;
            parent.appendChild(div);
        });
    });
}