let data = JSON.parse(localStorage.getItem('swiped_data'))
console.log(data)

let left = document.getElementById("left")
let div1 = document.getElementById("div1")
let cartArr = JSON.parse(localStorage.getItem("addcart")) || []
const append = ((data) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = data.image;
    let name = document.createElement("h2")
    name.setAttribute("class","style1")
    name.innerText = data.name;
    let price = document.createElement("p")
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
    btn.innerText = "Add To Cart"
    btn.setAttribute("class", "style1")
    btn.onclick = () => {
        cartArr.push(data)
        localStorage.setItem("addcart", JSON.stringify(cartArr))
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
    like.style.backgroundColor="skyblue"
    let div=document.createElement("div")
    let p=document.createElement("p")
    p.innerText=`You and ${likeCount} other like this`
    div.append(p)
    like.append(div)
} 

