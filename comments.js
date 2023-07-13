const row = document.querySelector(".row")

const createRow = (comment) => {
    return `
    <div class="col col-sm-5 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${comment.name}</h5>
        <p class="card-text"><b>Sender: </b>${comment.email}</p>
        <p class="card-text"><b>Comment: </b>${comment.body}</p>
      </div>
    </div>
  </div>`;
}

const getComments = async() => {
    let comments = await getData(`https://jsonplaceholder.typicode.com/comments?postId=${localStorage.getItem('postId')}`)
    comments.map(comment => {
        row.innerHTML += createRow(comment)
    })
}
getComments()