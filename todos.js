const row = document.querySelector('.row');

const createRow = (post) => {
    return `
    <div class="col col-sm-5 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <h1>${post.completed ? '✅' : '🚫'}</h1>
      </div>
    </div>
  </div>`;
}

const getPosts = async() => {
    let posts = await getData(`https://jsonplaceholder.typicode.com/todos?userId=${localStorage.getItem('userId')}`);
    posts.map(post => {
        row.innerHTML += createRow(post)
    })
};
getPosts()
const goToComments = (id) => {
    localStorage.setItem('postId', id)
}