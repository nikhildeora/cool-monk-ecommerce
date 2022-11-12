import navbar from "./cmmponents/navbar.js"
const navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./cmmponents/footer.js"
const footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()



    // function to set items in local storage
//     let btn=document.getElementById("cart_btn")
//     btn.addEventListener("click",()=>{
// function addItems(el)
//     })

//     let Addcart=[];
//     function addItems(el){
// Addcart.push(el);
// localStorage.setItem("cartitems",JSON.stringify(Addcart))
//     }



    //function for cart page
    let addedItems=JSON.parse(localStorage.getItem("cartitems")) || [];
    // console.log(addedItems.length);
    // console.log(addedItems);


    let sum;
    function sum_append(){
        sum = 0;
    
        addedItems.forEach(function(el){
            sum += Number(el.price)
        })
    
        localStorage.setItem("cart_total",sum)
        document.getElementById('total').innerText=sum;
    }
    
    sum_append()
    
    let container=document.getElementById("container")

    const appendItems=(addedItems)=>{
        container.innerHTML=null;
        addedItems.forEach(function(el,index){
            // let div=document.createElement('div')
            // let img=document.createElement('img')
            // let name=document.createElement('h2')
            // let desc=document.createElement('p')
            // let price=document.createElement('h2')
            // let delete_btn=document.createElement('button')
            // let see_details=document.createElement('button')
            // let btn_div=document.createElement('div')
            // btn_div.id='buttons'

            // img.src=el.image;
            // name.innerText=el.name;
            // desc.innerText=el.shipping;
            // price.innerText=el.price
            // delete_btn.innerText='Remove From Cart'
            // see_details.innerText='See Details'

            // see_details.onclick = ()=>{
            //     localStorage.setItem("swiped_data",JSON.stringify(el))
            //     window.location.href = "./items_detail.html"
            // }

            // delete_btn.addEventListener("click",()=>{
            //     deleteProducts(el,index)
            // })

            // btn_div.append(delete_btn,see_details)

            // div.append(img,name,price,desc,btn_div)
            // container.append(div)

            let div = document.createElement("div");
            div.setAttribute("class", "cat_cards");
            let image = document.createElement("img");
            image.src = el.image;
            let name = document.createElement("h2")
            name.innerText = el.name;
            let price = document.createElement("p")
            price.setAttribute("class", "cat_price")
            price.innerText = el.price;
            let div_star = document.createElement("div")
            for (let i = 0; i < el.star; i++) {
                let star = document.createElement("i")
                star.setAttribute("class", "fa-solid fa-star")
                div_star.append(star)
            }
            let ship = document.createElement("p");
            ship.setAttribute("class", "cat_ship")
            ship.innerText = el.shipping;
            let btn_div = document.createElement("div")
            btn_div.id = "buttons"
            let show_detail = document.createElement("button")
            show_detail.setAttribute("class","show_detail")
            show_detail.innerText = "See Details"
            show_detail.onclick = ()=>{
                    localStorage.setItem("swiped_data",JSON.stringify(el))
                    window.location.href = "./items_detail.html"
            }
    
            let remove_btn = document.createElement("button")
            remove_btn.innerText = "Remove"
            remove_btn.setAttribute("class","remove_btn")
            remove_btn.addEventListener("click",()=>{
                    deleteProducts(el,index)
                })
            // btn_div.append(show_detail,remove_btn)    
    
            div.append(image, name, price, div_star, ship,show_detail,remove_btn);
            container.append(div)

        })
    }

    let total_cart_products = document.getElementById("cartitems")
    // total_cart_products.innerText = addedItems.length;
    
    function deleteProducts(el,index)
    {
      addedItems.splice(index,1)
      appendItems(addedItems)
      total_cart_products.innerText = addedItems.length;
      sum_append()
      localStorage.setItem("cartitems",JSON.stringify(addedItems))  
    }
   
    
    window.onload = ()=>{
        appendItems(addedItems)
        total_cart_products.innerText = addedItems.length;
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