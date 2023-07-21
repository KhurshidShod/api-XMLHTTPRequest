const row = document.querySelector('.row');

const createRow = (post) => {
    return `
    <div class="col col-sm-5 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><img src="${post.url}" alt="" /></h5>
        <p class="card-text"><b>Title: </b>${post.title}</p>
      </div>
    </div>
  </div>`;
}

const getPosts = async() => {
    let posts = await getData(`https://jsonplaceholder.typicode.com/photos?albumId=${localStorage.getItem('userId')}`);
    posts.map(post => {
        row.innerHTML += createRow(post)
    })
};
getPosts()
const goToComments = (id) => {
    localStorage.setItem('postId', id)
}