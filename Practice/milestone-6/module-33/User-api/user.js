const loadUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
};
loadUsers();
const displayUsers = users => {
    const userContainer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h3>name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>email: ${user.email}</p>
            <p>user location: ${user.location.city} ${user.location.country}</p>
            <p>image:
            <img src="${user.picture.large}" alt="">
             </p>
        `;
        userContainer.appendChild(userDiv);
    }
}