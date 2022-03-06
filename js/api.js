function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
  
}

function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getUser(data));
  
}
function getUser(data){
  const ul = document.getElementById('user');
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = `name: ${user.name} email: ${user.email}`;
    ul.appendChild(li);

  }
}

function loadPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPost(data));
  
}

function getPost(data){
  const sectionContainer = document.getElementById('post');
  for(const post of data){
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    sectionContainer.appendChild(div);
  }
}
