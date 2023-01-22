
// Get posts
function getPosts(userId){
    let request = new XMLHttpRequest() ;
    request.open("GET" , "https://jsonplaceholder.typicode.com/posts?userId="+userId) ;
    request.send() ;
    request.responseType = "json" ;
   request.addEventListener("readystatechange" , function(){
    if(request.status >= 200 && request.readyState == 4){
      let postText = "" ; 
      let posts = request.response ;
      for(post of posts){
        postText += `
        <div class="post ">
            <h3>${post.title}</h3>
            <h4>${post.body}</h4>
        </div>
        `
      }
      document.querySelector(".posts-details").innerHTML = postText ;
    }
   })
}
getPosts(1);

/**************************************************************************************************/

// Click on user to get his post
function userClicked(userId , element){
  getPosts(userId);
  let elements =  document.querySelectorAll(".user");
  for(ele of elements){
    ele.classList.remove("selected");
  }
  element.classList.add("selected");
}
 
/**************************************************************************************************/

// Get user

function getUsers(){
    let request = new XMLHttpRequest() ;
    request.open("GET" , "https://jsonplaceholder.typicode.com/users") ;
    request.send() ;
    request.responseType = "json" ;
   request.addEventListener("readystatechange" , function(){
    if(request.status >= 200 && request.readyState == 4){
      let userText = "" ; 
       users = request.response ;
      for(user of users){
        userText += `
        <div class="user " id=${user.id} onclick="userClicked(${user.id} , this)" >
            <h3>${user.name}</h3>
            <h3>${user.email}</h3>
        </div>
        `
      }
      document.querySelector(".users-details").innerHTML = userText ;
      document.querySelector(".user").classList.add("selected");
    }
   })
   
}

 getUsers();



/**************************************************************************************************/

