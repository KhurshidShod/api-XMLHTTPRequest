const rowData = document.querySelector(".row");

const createRow = (user) => {
  return `
        <div class="col col-sm-5 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text"><b>Username: </b>${user.username}</p>
            <p class="card-text"><b>Email: </b>${user.email}</p>
            <p class="card-text"><b>Phone: </b>${user.phone}</p>
            <p class="card-text"><b>Website: </b>${user.website}</p>
            <p class="card-text"><b>Company name: </b>${user.company.name}</p>
            <p class="card-text"><b>Address: </b>${user.address.city}, ${user.address.street}, ${user.address.suite}</p>
            <a href="./posts.html" class="btn btn-primary" onclick='goToPosts(${user.id})'>Go to posts</a>
          </div>
        </div>
      </div>`;
};

const getUsers = async () => {
  let users = await getData("https://jsonplaceholder.typicode.com/users");
  users.map((user) => {
    rowData.innerHTML += createRow(user);
  });
};
getUsers();
const goToPosts = (id) => {
    console.log(id)
    localStorage.setItem('userId', id);
}