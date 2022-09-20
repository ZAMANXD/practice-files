function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>user-${post.userId}</h4>
            <h5>post title: ${post.title}</h5>
            <p>post description: ${post.body}</p>
        `;
        postsContainer.appendChild(div);
    }
}
loadPosts();