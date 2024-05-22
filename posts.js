import { posts } from "./data.js";
class Posts{
    constructor(){
        this.data = posts;
    }
    
    search(usernameId){
        return this.data.filter((post) => post.userId == usernameId);

        

    }

}

let publicaciones = new Posts()

const searchPost = document.getElementById("searchPost");
const searchBtn = document.getElementById("postBtn");
const listPost = document.getElementById("listPost")
const clearBtn = document.getElementById('clearBtn')
const newPostBtn = document.getElementById('newPostBtn')
const newPostTitle = document.getElementById('newPostTitle')
const newPost = document.getElementById('newPost')
const cleanPosts = document.getElementById('clearPostsBtn');


const cleanInputs = () => {
    if(clearBtn){
        listPost.innerHTML = ''
        searchPost.value = ''
    }
    if(cleanPosts){
        newPostTitle.innerHTML = ''
        newPost.innerHTML = ''
        newPostTitle.value = ''
        newPost.value= ''
    }
    
    
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let input = Number(searchPost.value)

    let value = publicaciones.search(input);
    console.log(value)
    // cleanInputs();
    if(value){
        value.forEach(valu => {
            listPost.innerHTML += `<h3 class="h3Post">${valu.title}</h3>
                                   <p class="postsBody">${valu.userId}: <br>${valu.body}</p>`
        });
        
        

    }
    

})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    cleanInputs();
})

cleanPosts.addEventListener('click', (e) => {
    e.preventDefault();
    cleanInputs()
})


newPostBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(newPost.value){
        listPost.innerHTML += `
        <h3 class="h3Post">${newPostTitle.value}</h3>
        <p class="postsBody">${newPost.value}</p>

        `
    }
    
})



