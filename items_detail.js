import navbar from "./cmmponents/navbar.js"
const navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./cmmponents/footer.js"
const footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()



let addedItems=JSON.parse(localStorage.getItem("cartitems")) || [];
// cart length 
let total_cart_products = document.getElementById("cartitems")
total_cart_products.innerText = addedItems.length;



let data = JSON.parse(localStorage.getItem('swiped_data'))
console.log(data)

let left = document.getElementById("left")
let div1 = document.getElementById("div1")
// let cartArr = JSON.parse(localStorage.getItem("addcart")) || []
const append = ((data) => {
    let div = document.createElement("div");
    div.setAttribute("class","items_detail_div")
    let image = document.createElement("img");
    image.src = data.image;
    let name = document.createElement("h1")
    name.setAttribute("class","style1")
    name.innerText = data.name;
    let price = document.createElement("p")
    price.id = "items_price"
    price.innerText = `Price: ${data.price}`;
    price.setAttribute("class","style1")
    let div_star = document.createElement("div")
    div_star.setAttribute("class","style1")
    for (let i = 0; i < data.star; i++) {
        let star = document.createElement("i")
        star.setAttribute("class", "fa-solid fa-star")
        div_star.append(star)
    }
    let ship = document.createElement("p");
    ship.setAttribute("class","style1")
    let btn = document.createElement("button")
    btn.id = "add_to_cart_btn"
    btn.innerText = "Add To Cart"
    btn.setAttribute("class", "style1")
    btn.onclick = () => {
       btn.innerText = "Added" 
       btn.disabled = true;
       addedItems.push(data)
       total_cart_products.innerText = addedItems.length;
       localStorage.setItem("cartitems",JSON.stringify(addedItems))
    }
    left.append(image)
    div.append(name, price, div_star, ship, btn);
    div1.append(div);
})
append(data)
let likeCount=0;
let like=document.getElementById("like")
like.onclick=()=>{
    likeCount++
    like.innerText=null
    // like.style.backgroundColor="skyblue"
    like.style.width = "150px"
    like.style.paddingBottom = "2px"
    like.style.paddingTop = "2px"
    let div=document.createElement("div")
    let p=document.createElement("p")
    p.innerText=`You and ${likeCount} other Like this`
    div.append(p)
    like.append(div)
} 


// category js 

let mens_cat = document.getElementsByClassName("mens")
let womens_cat = document.getElementsByClassName("womens")
let beauty_cat = document.getElementsByClassName("beauty")
let electronics_cat = document.getElementsByClassName("electronics")
let jewellery_cat = document.getElementsByClassName("jewellery")
let kids_cat = document.getElementsByClassName("kids")
let videogame_cat = document.getElementsByClassName("videogame")

for(let i=0;i<mens_cat.length;i++){
    mens_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","mens")
         window.location.href = "category.html"
    })
}
for(let i=0;i<womens_cat.length;i++){
    womens_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","womens")
         window.location.href = "category.html"
    })
}
for(let i=0;i<beauty_cat.length;i++){
    beauty_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","beauty")
         window.location.href = "category.html"
    })
}
for(let i=0;i<electronics_cat.length;i++){
    electronics_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","electronics")
         window.location.href = "category.html"
    })
}
for(let i=0;i<jewellery_cat.length;i++){
    jewellery_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","jewellery")
         window.location.href = "category.html"
    })
}
for(let i=0;i<kids_cat.length;i++){
    kids_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","kids")
         window.location.href = "category.html"
    })
}
for(let i=0;i<videogame_cat.length;i++){
    videogame_cat[i].addEventListener("click",function(){
        console.log("nikhil");
        localStorage.setItem("category_call","videogame")
         window.location.href = "category.html"
    })
}




// login logout status 
let homePage_username_logout_div = document.getElementById("username_logout_homePage_div")
let Username_onHomePage = document.getElementById("Username_onHomePage")
let homePage_logout_btn = document.getElementById("homePage_logout_btn")
let signup_login_homePage_div = document.getElementById("signup_login_homePage_div")

let login_logout_status = JSON.parse(localStorage.getItem("login_logout_status"))
if(login_logout_status.login_status=="loggedin"){
    signup_login_homePage_div.style.display = "none";
    Username_onHomePage.innerText = login_logout_status.username;
    homePage_username_logout_div.style.display = "flex";
}

homePage_logout_btn.onclick = ()=>{
    localStorage.removeItem("login_logout_status")
    signup_login_homePage_div.style.display = "block";
    homePage_username_logout_div.style.display = "none";
}
