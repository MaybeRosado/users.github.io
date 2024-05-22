import { users } from "./data.js";
class Users{
    constructor(){
        this.data = users;
    }

    addUser(newUser){
        this.data.push(newUser);

    }

    list(){
        return this.data;
        


    }

    search(username){
        return this.data.find((dato) => dato.username === username);
        

    }
 
   
}

let app = new Users();

    let nameInput = document.getElementById("name");
    let websiteInput = document.getElementById("website");
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    

    const add = document.getElementById("addBtn")

add.addEventListener("click", function(e){
    e.preventDefault()
    let name = nameInput.value;
    let website = websiteInput.value;
    let username = usernameInput.value;
    let email = emailInput.value;
    
    const userObject = {
        name,
        website,
        username,
        email
    }

    console.log(userObject)
    app.addUser(userObject);
    console.log(app.list())
    document.getElementById("announce").innerHTML = "<p>A new user has been signed up</p>";

})

 
const cleanInputs = () => {
    nameInput.value = ''
    websiteInput.value = ''
    usernameInput.value = ''
    emailInput.value = ''
}


add.addEventListener("click",function(e){
    e.preventDefault()
    const table = document.getElementById("tbl");
    let usuarios = app.list()

    table.innerHTML = "";
        usuarios.forEach(usuario =>{
            table.innerHTML += `
        <td scoope="row">${usuario.name}</td>
        <td scoope="row">${usuario.username}</td>
        <td scoope="row">${usuario.website}</td>
        <td scoope="row">${usuario.email}</td>
        `
        })

        showTable()
        cleanInputs()
        
        
        



});


const search = document.getElementById("searchBtn")
search.addEventListener("click", (e) =>{
    e.preventDefault()
    const username = document.getElementById("username").value;
    const encontrado = document.getElementById("searchList")
    
    encontrado.innerHTML = "";

    let usuario = app.search(username);
    if(usuario){ 
        nameInput.value = usuario.name
        usernameInput.value =  usuario.username
        websiteInput.value = usuario.website
        emailInput.value = usuario.email

        // nameInput.disabled = true;
        // usernameInput.disabled = true;
        // websiteInput.disabled = true;
        // emailInput.disabled = true;
        

    }else{
        encontrado.innerHTML += "Didn't found;("

    }



    
    

})







