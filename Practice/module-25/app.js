//step-1: add event listeners to the post bottom
document.getElementById('btn-post').addEventListener('click', function () {
    //step-2: get comment inside the div
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    console.log(newComment);

    // step-3: set the comment inside the comment container 
    //get the comment container
    const commentContainer = document.getElementById('comment-container');
    //create a new element (p tag)
    const p = document.createElement('p');
    //set the text of the comment as innerText of the p tag
    p.innerText = newComment;
    //add the p tag using append child
    commentContainer.appendChild(p);

    //Step-4: clear the text area after pushing the comment
    commentBox.value = '';

})