function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => console.log(json))
}
function displayUsers(data) {
    console.log(data);
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json)
        .then(data => displayUsers(data))
}
