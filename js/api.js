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
  const u = document.getElementById('post');
  for(const post of data){
    const l = document.createElement('li');
    l.innerText = `title: ${post.title} .....
     body: ${post.body}`;
    u.appendChild(l);
  }
}
