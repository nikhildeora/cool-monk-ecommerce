// nikhil javascript part 
// div14 js 

let div14_data = [
    {
        image : "https://img.shop.com/Image/240000/248000/248061/products/1926693868.jpg?plain&size=600x600",
        name : "22' Triple Stacked Pumpkins Thanksgiving Tabletop Decor",
        price : 508,
        star : 3,
        shipping : "Free Shipping with 200 Rs. Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/U/h/vieWA9AJE.webp",
        name : "Zulay Kitchen Knife Sharpener for Straight and Serrated Knives - Easy Manual Sharpening",
        price : 2999,
        star : 4,
        shipping : "Free Shipping"
    },
    {
        image : "https://www.shop.com/feo-cdn/j/S/acUqQaqg8.webp",
        name : "Autumn Splendor - Two Pockets - Fall / Thanksgiving Wide Band Leggings",
        price : 1999,
        star : 4,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/X/b/koIw3oKTU.webp",
        name : "Artificial Christmas Trees/Unlit Christmas Trees/6 and 6.5 Feet Tall Christmas Trees",
        price : 5899,
        star : 5,
        shipping : "Free Shipping"
    },
    {
        image : "https://www.shop.com/feo-cdn/b/Z/fmljIySmo.webp",
        name : "Set of 3 Orange and White Pumpkin Spice Baking Set",
        price : 3999,
        star : 3,
        shipping : "Free Shipping"
    },
    {
        image : "https://www.shop.com/feo-cdn/5/4/o6KxJw2XU.webp",
        name : "Smart Blonde Outdoor Decor Happy Fall Novelty Metal Arrow Sign A-182",
        price : 699,
        star : 5,
        shipping : "Free Shipping with 200 Rs. Order"
    },

]

let div14_extraArr = [
    {
        image : "https://img.shop.com/Image/240000/248000/248061/products/1926693868.jpg?plain&size=600x600",
        name : "22' Triple Stacked Pumpkins Thanksgiving Tabletop Decor",
        price : 508,
        star : 3,
        shipping : "Free Shipping with 200 Rs. Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/U/h/vieWA9AJE.webp",
        name : "Zulay Kitchen Knife Sharpener for Straight and Serrated Knives - Easy Manual Sharpening",
        price : 2999,
        star : 4,
        shipping : "Free Shipping"
    },
    {
        image : "https://www.shop.com/feo-cdn/j/S/acUqQaqg8.webp",
        name : "Autumn Splendor - Two Pockets - Fall / Thanksgiving Wide Band Leggings",
        price : 1999,
        star : 4,
        shipping : "Free Shipping with 4000 Rs Order"
    }
];

const div14_second = document.getElementById("div14_second")
const append_div14 = (data)=>{
    div14_second.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement("div");
        div.setAttribute("class","div14_cards");
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class","div14_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for(let i=0;i<el.star;i++){
            let star = document.createElement("i")
            star.setAttribute("class","fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class","div14_ship")
        ship.innerText = el.shipping;

        div.append(image,name,price,div_star,ship);
        div14_second.append(div);
    });
}
append_div14(div14_extraArr);


// div 16 js 
let div16_data = [
    {
        image : "https://www.shop.com/feo-cdn/i/t/FvbIz-y9U.webp",
        name : "Isotonix OPC-3®",
        price : 1499,
        star : 4,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/P/b/dONaa4sVE.webp",
        name : "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price : 1799,
        star : 5,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/C/e/JgOnhFyg8.webp",
        name : "Isotonix® Multivitamin Without Iron",
        price : 2399,
        star : 4,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/V/Q/MjsyMSVjg.webp",
        name : "Isotonix® Activated B Complex",
        price : 1299,
        star : 3,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/M/L/jzRSTha98.webp",
        name : "Isotonix® Vitamin D with K2",
        price : 1899,
        star : 5,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/m/Z/swKdMuBZc.webp",
        name : "Probiotics-10",
        price : 1199,
        star : 4,
        shipping : "Free Shipping with 4000 Rs Order"
    }
]

let div16_extraArr = [
    {
        image : "https://www.shop.com/feo-cdn/i/t/FvbIz-y9U.webp",
        name : "Isotonix OPC-3®",
        price : 1499,
        star : 4,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/P/b/dONaa4sVE.webp",
        name : "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price : 1799,
        star : 5,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/C/e/JgOnhFyg8.webp",
        name : "Isotonix® Multivitamin Without Iron",
        price : 2399,
        star : 4,
        shipping : "Free Shipping with 4000 Rs Order"
    },
]

const div16_first = document.getElementById("div16_first")
const append_div16 = (data)=>{
    div16_first.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement("div");
        div.setAttribute("class","div16_cards");
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class","div16_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for(let i=0;i<el.star;i++){
            let star = document.createElement("i")
            star.setAttribute("class","fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class","div16_ship")
        ship.innerText = el.shipping;

        div.append(image,name,price,div_star,ship);
        div16_first.append(div);
    });
}
append_div16(div16_extraArr);

let i = 1;
let n = 3;
setInterval(() => {
    if(i==4){
        i=0;
    }
    div14_extraArr = [];
    div16_extraArr = [];
    for(let x=i;x<n+i;x++){
        div14_extraArr.push(div14_data[x]);
        div16_extraArr.push(div16_data[x]);
    }
    i++;
    append_div14(div14_extraArr);
    append_div16(div16_extraArr);
}, 4000);


// div 17 js 

let div17_data = [
    {
        image : "https://www.shop.com/feo-cdn/i/t/FvbIz-y9U.webp",
        name : "Isotonix OPC-3®",
        price : 1499,
        star : 4,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/Z/K/W8b5TLOH8.webp",
        name : "DNA Miracles Isotonix® Immune",
        price : 1299,
        star : 5,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/2/R/PseFpvzoc.webp",
        name : "ClearShield® Maximum Protection and Hydration",
        price : 1199,
        star : 4,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/1/3/TWKLEddOs.webp",
        name : "Snap™ All-Purpose Natural Concentrate",
        price : 699,
        star : 3,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/P/b/dONaa4sVE.webp",
        name : "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price : 1799,
        star : 5,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/2/8/LZoNORNQc.webp",
        name : "Snap™ Heavy Duty Concentrate",
        price : 799,
        star : 4,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/B/S/jNm3AB9Ho.webp",
        name : "Ultimate Aloe™",
        price : 999,
        star : 5,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/7/4/ipD1whsv0.webp",
        name : "Snap™ Triple Enzyme 3X Laundry Detergent",
        price : 499,
        star : 5,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/M/L/jzRSTha98.webp",
        name : "Isotonix® Vitamin D with K2",
        price : 1899,
        star : 5,
        shipping : "Free Shipping with 4000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/n/A/QC1DKml1g.webp",
        name : "Thymenol™",
        price : 1399,
        star : 3,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/F/Z/tLwzaZz8U.webp",
        name : "Isotonix Essentials® Anti-Aging",
        price : 1999,
        star : 4,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/K/s/Fwi8vPHeE.webp",
        name : "Isotonix® Complete Greens",
        price : 2199,
        star : 3,
        shipping : "Free Shipping with 1000 Rs Order"
    },
    {
        image : "https://www.shop.com/feo-cdn/C/e/JgOnhFyg8.webp",
        name : "Isotonix® Multivitamin Without Iron",
        price : 2399,
        star : 4,
        shipping : "Free Shipping with 4000 Rs Order"
    }
]

let swipper_div = document.querySelector(".swiper-wrapper")
const append_div17 = (data)=>{
    data.forEach((el)=>{
        let div = document.createElement("div");
            div.setAttribute("class","swiper-slide");
            let image = document.createElement("img");
            image.src = el.image;
            let name = document.createElement("h2")
            name.innerText = el.name;
            let price = document.createElement("p")
            price.setAttribute("class","div17_price")
            price.innerText = el.price;
            let div_star = document.createElement("div")
            for(let i=0;i<el.star;i++){
                let star = document.createElement("i")
                star.setAttribute("class","fa-solid fa-star")
                div_star.append(star)
            }
            let ship = document.createElement("p");
            ship.setAttribute("class","div17_ship")
            ship.innerText = el.shipping;
    
            div.append(image,name,price,div_star,ship);
            swipper_div.append(div);
    })
}

append_div17(div17_data)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
  });

