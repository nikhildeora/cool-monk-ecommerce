import navbar from "./cmmponents/navbar.js"
let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./cmmponents/footer.js"
let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()

let total_cart_amout = localStorage.getItem("cart_total")

let cash_total = document.getElementById("cash_total_amount")
cash_total.innerText = total_cart_amout;
let card_total = document.getElementById("total_amount")
card_total.innerText = total_cart_amout;

let select = document.getElementById("change")

select.onchange =()=>{
    handlePayment()
}


function handlePayment(){
    let selected = document.getElementById("change").value
    
    
    let prepaid = document.getElementById("Prepaid")
    let COD = document.getElementById("COD")

    if(selected=="COD"){
        
        COD.style.display="block"
        prepaid.style.display="none"


    }else if(selected=="Prepaid"){
        
        prepaid.style.display="block"
        COD.style.display="none"
    }
}

// let Cbtn=document.getElementById("cbtn")

// Cbtn.onclick=()=>{
//     orderPlace()
// }


// function orderPlace(){
//     alert("Hurray! Your order has been placed")
// }
// let Pbtn=document.getElementById("Pbtn")

// Pbtn.onclick=()=>{
//     orderPlaced()
// }


// function orderPlaced(){
//     alert("Hurray! Your order has been placed")
// }




// complete sentence 
let customer = JSON.parse(localStorage.getItem("billing_address"))
let cus_name = document.getElementById("cus_name")
cus_name.innerText = customer.name;
let cus_address = document.getElementById("cus_address")
cus_address.innerText = customer.address;
let cus_city = document.getElementById("cus_city")
cus_city.innerText = customer.city;
let cus_state = document.getElementById("cus_state")
cus_state.innerText = customer.state;
let cus_pin = document.getElementById("cus_pincode")
cus_pin.innerText = customer.pincode;

let addedItems=JSON.parse(localStorage.getItem("cartitems")) || [];
let total_cart_products = document.getElementById("cartitems")
total_cart_products.innerText = addedItems.length;

let cash_button = document.getElementById("cbtn")
cash_button.onclick = ()=>{
    localStorage.removeItem("cartitems")
    total_cart_products.innerText = 0;
    alert("Hurray! Your order has been placed")
    window.location.href = "./index.html"
}


let card_button = document.getElementById("Pbtn")
card_button.onclick = ()=>{
    let card_number = document.getElementById("card_number").value
    let card_name = document.getElementById("card_name").value
    let card_month = document.getElementById("card_month").value
    let card_year = document.getElementById("card_year").value
    let card_cvv = document.getElementById("card_cvv").value
    
    if(card_number==""||card_name==""||card_month==""||card_year==""||card_cvv==""){
        alert("please fill all details")
    }
    else if(card_number.length<16){
        alert("Please fill complete Card Number")
    }
    else if(card_cvv.length<3 || card_cvv.length>3){
        alert("Please fill correct cvv")
    }
    else{
        localStorage.removeItem("cartitems")
        total_cart_products.innerText = 0;
        alert("Hurray! Your order has been placed")
        window.location.href = "./index.html"
    }
    
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