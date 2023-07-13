const row = document.querySelector('.row');

const createRow = (post) => {
    return `
    <div class="col col-sm-5 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text"><b>Post: </b>${post.body}</p>
        <a href="./comments.html" class="btn btn-primary" onclick='goToComments(${post.id})'>Go to comments</a>
      </div>
    </div>
  </div>`;
}

const getPosts = async() => {
    let posts = await getData(`https://jsonplaceholder.typicode.com/posts?userId=${localStorage.getItem('userId')}`);
    posts.map(post => {
        row.innerHTML += createRow(post)
    })
};
getPosts()
const goToComments = (id) => {
    localStorage.setItem('postId', id)
}