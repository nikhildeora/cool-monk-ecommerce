import navbar from "./cmmponents/navbar.js"
const navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./cmmponents/footer.js"
const footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()

var toys = [
    {
        image: "https://img.shop.com/Image/240000/243400/243406/products/1953965126.jpg?plain&size=600x600",
        star: 5,
        name: "FurReal Cinnamon My Stylin' Pony Interactive Pet Toy",
        price: 620,
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://img.shop.com/Image/270000/274900/274929/products/1949640014.jpg?plain&size=450x450",
        star: 4,
        name: "Barbie Signature - 2022 Holiday Barbie Doll, Black Hair, One Size",
        price: 900,
        shipping: "Free Shipping"
    },
    {
        image: "https://img.shop.com/Image/240000/243400/243406/products/1909271529.jpg?plain&size=1467x1467",
        star: 3,
        name: "FurReal Friends GoGo My Dancing Pup",
        price: 752,
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://img.shop.com/Image/240000/243400/243406/products/1903478098.jpg?plain&size=1467x1467",
        star: 4,
        name: "FurReal Friends Snackin' Sam the Bronto Plush Toy",
        price: 1000,
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://img.shop.com/Image/240000/243500/243545/products/1908038413.jpg?plain&size=956x956",
        star: 4,
        name: "Aurora World Sam I Am Plush Dood Toy Multi",
        price: 440,
        shipping: "Free Shipping"
    },
    {
        image: "https://img.shop.com/Image/240000/243500/243545/products/1908038410.jpg?plain&size=956x956",
        star: 5,
        name: "Aurora World Horton Plush Toy Multi",
        price: 110,
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://img.shop.com/Image/240000/243500/243545/products/1918149955.jpg?plain&size=956x956",
        star: 5,

        name: "Aurora World Cow Plush Toy Multi",
        price: 200,
        shipping: "Free Shipping"
    },

]



let swipper_div4_first = document.querySelector("#div4_main>#div4_first>.mySwiper3>.swiper-wrapper")
const append_div4_first = (data) => {
    data.forEach((el) => {
        // console.log(el);
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div17_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div17_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        swipper_div4_first.append(div);
    })
}

append_div4_first(toys)
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
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

//   https://img.shop.com/Image/homepage/shop-gbr-102789-holiday-hot-toys-banners-600x600-img-min1666631558062.jpg
// one more image for hottest toys side 




var medicine = [
    {
        image: "https://img.shop.com/Image/240000/247900/247927/products/1948463047.jpg?plain&size=1600x1600",
        star: 3,
        name: "Shopping Annuity® Brand Premium Extra Strength Pain Relief Spray",
        price: "Rs 1010",
        rating: "112",
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/q/W/gwOZuHBJ0.webp",
        star: 5,
        name: "AXIS Nutrition™ Advanced Digestive Support",
        price: "Rs 950",
        rating: "64",
        shipping: "Free Shipping"
    },
    {
        image: "https://www.shop.com/feo-cdn/-/5/8968QA4Z0.webp",
        star: 4,
        name: "Pet Health CBD Formula for Cats & Dogs Pet Tincture",
        price: "Rs 620",
        rating: "56",
        shipping: "Free Shipping"
    },

    {
        image: "https://www.shop.com/feo-cdn/R/j/mhinj93tY.webp",
        star: 5,
        name: "Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies",
        price: "Rs 870",
        rating: "91",
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/6/q/Jxj__g10Y.webp",
        star: 3,
        name: "AXIS Nutrition™ Advanced Digestive Support",
        price: "Rs 620",
        rating: "136",
        shipping: "Free Shipping"
    },
    {
        image: "https://www.shop.com/feo-cdn/5/c/-DV5JOK74.webp",
        star: 5,
        name: "Pet Health CBD Formula for Cats & Dogs Pet Tincture",
        price: "Rs 1120",
        rating: "86",
        shipping: "Free Shipping with 500 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/J/X/Cxq1d2u7c.webp",
        star: 4,
        name: "Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies",
        price: "Rs 960",
        rating: "111",
        shipping: "Free Shipping with 500 Rs Order"
    },

]

let swipper_div_medicine = document.querySelector("#div7_main>#sample_swipper>.mySwiper2>.swiper-wrapper")
const append_medicine = (data) => {
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div17_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div17_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        swipper_div_medicine.append(div);
    })
}

append_medicine(medicine)

var swiper2 = new Swiper(".mySwiper2", {
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



// Utkarsh js 
// div 10 
// https://img.shop.com/Image/homepage/motives-usa-can-eng-105076-2022-holiday-banner-600x600-img-min1666019864593.jpg
// extra image for div 10 
let div10_data = [
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=600x600",
        name: "Motives X Amber Essentials Collection",
        price: 500,
        star: 4,
        shipping: "Free Shipping"



    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1939204281.jpg?plain&size=600x600",
        name: "Motives Gel-ous Brow Gel",
        price: 400,
        star: 3,
        shipping: "Free Shipping with 300 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1841776313.jpg?plain&size=600x600",
        name: "Motives Lip Kit",
        price: 699,
        star: 3,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1942133481.jpg?plain&size=600x600",
        name: "Motives Essentials Complexion 4-Piece Brush Set",
        price: 899,
        star: 4,
        shipping: "Free Shipping with 400 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1487570156.jpg?plain&size=600x600",
        name: "Motives Fiber Lush Mascara",
        price: 1299,
        star: 2,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1942133520.jpg?plain&size=600x600",
        name: "Motives Essential Eye 7-Piece Brush Test",
        price: 499,
        star: 5,
        shipping: "Free Shipping"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1942133484.jpg?plain&size=600x600",
        name: "Motives 30th Anniverary Lip Collection",
        price: 1099,
        star: 2,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1905765309.jpg?plain&size=600x600",
        name: "Motives LALA Liquid Lipstick",
        price: 1499,
        star: 1,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/536366061.jpg?plain&size=600x600",
        name: "Motives 10 Years Younger Makeup Setting Spray",
        price: 599,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/243300/243380/products/1942133569.jpg?plain&size=600x600",
        name: "Motives Eye Prime",
        price: 299,
        star: 2,
        shipping: "Free Shipping"


    }
]

let swipper_div10_second = document.querySelector("#div10_main>#div10_second>.mySwiper4>.swiper-wrapper")
const append_div10_second = (data) => {
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div17_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div17_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        swipper_div10_second.append(div);
    })
}

append_div10_second(div10_data)
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
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


// div 11 
// https://img.shop.com/Image/homepage/lumiere-usa-104869-holiday-2022-banner-600x600-img-min1666027440902.jpg
// extra image for div 11 
let div11_data = [
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1766653370.jpg?plain&size=600x600",
        name: "Lumière de Vie - Rose Quartz Roller",
        price: 500,
        star: 4,
        shipping: "Free Shipping"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1849034699.jpg?plain&size=600x600",
        name: "Lumière de Vie - Lumi Stick",
        price: 400,
        star: 3,
        shipping: "Free Shipping with 1000 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/270000/274000/274036/products/1827874989.jpg?plain&size=600x600",
        name: "Lumière de Vie - Hommes Skin Care Value",
        price: 699,
        star: 3,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1865413644.jpg?plain&size=600x600",
        name: "Lumière de Vie - Renewal Hand & Body Creme",
        price: 899,
        star: 4,
        shipping: "Free Shipping"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1939501238.jpg?plain&size=600x600",
        name: "Lumière de Vie - Refine & Moisturize Lip Duo",
        price: 1299,
        star: 2,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1769489571.jpg?plain&size=600x600",
        name: "Lumière de Vie - Matte Moisturizer",
        price: 499,
        star: 5,
        shipping: "Free Shipping with 700 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1942133542.jpg?plain&size=600x600",
        name: "Lumière de Vie - Hydrate 3.0",
        price: 1099,
        star: 2,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1942133509.jpg?plain&size=600x600",
        name: "Lumière de Vie - The Elixir",
        price: 1499,
        star: 1,
        shipping: "Free Shipping with 800 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1887211674.jpg?plain&size=600x600",
        name: "Lumière de Vie - Skincare Brush Collection",
        price: 599,
        star: 4,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1935915380.jpg?plain&size=600x600",
        name: "Lumière de Vie - Soothe & Renew Hydrogel Masque",
        price: 299,
        star: 2,
        shipping: "Free Shipping"


    }
]

let swipper_div11_first = document.querySelector("#div11_main>#div11_first>.mySwiper5>.swiper-wrapper")
const append_div11_first = (data) => {
    data.forEach((el) => {
        // console.log(el);
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div17_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div17_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        swipper_div11_first.append(div);
    })
}

append_div11_first(div11_data)
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 3,
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

// div 12 
// https://img.shop.com/Image/homepage/layered-usa-105249-ambers-favorites-banner-600x600-img-min1666023332340.jpg
// extra image for div 12 
let div12_data = [
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943471860.jpg?plain&size=600x600",
        name: "OLIVIA - FReshwater Pearl & Paperclip Bracelet",
        price: 500,
        star: 4,
        shipping: "Free Shipping"



    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1932866534.jpg?plain&size=600x600",
        name: "SELENA - Pave Cuban Link Chain",
        price: 400,
        star: 3,
        shipping: "Free Shipping with 800 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1925345920.jpg?plain&size=600x600",
        name: "ENZO - Cable Link Bracelet",
        price: 699,
        star: 3,
        shipping: "Free Shipping"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472049.jpg?plain&size=600x600",
        name: "KOURTNEY - Nine Cross Necklace",
        price: 899,
        star: 4,
        shipping: "Free Shipping with 1100 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/240000/248600/248698/products/1939501238.jpg?plain&size=600x600",
        name: "Lumière de Vie - Refine & Moisturize Lip Duo",
        price: 1299,
        star: 2,
        shipping: "Free Shipping with 1500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472083.jpg?plain&size=600x600",
        name: "EDEN - Chain Link Pendant",
        price: 499,
        star: 5,
        shipping: "Free Shipping with 700 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472043.jpg?plain&size=600x600",
        name: "HARPER - Ultra Wide Herringbone",
        price: 1099,
        star: 2,
        shipping: "Free Shipping with 900 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943471807.jpg?plain&size=600x600",
        name: "SEBASTIAN - Slider Hoops",
        price: 1499,
        star: 1,
        shipping: "Free Shipping with 500 Rs Order"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943471851.jpg?plain&size=600x600",
        name: "SAYLOR - Satin Finish Cuff",
        price: 599,
        star: 4,
        shipping: "Free Shipping"


    },
    {
        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472078.jpg?plain&size=600x600",
        name: "ELLIS - Micro Pearl Link Chain",
        price: 299,
        star: 2,
        shipping: "Free Shippingr"


    }
]

let swipper_div12_second = document.querySelector("#div12_main>#div12_second>.mySwiper6>.swiper-wrapper")
const append_div12_second = (data) => {
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div17_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div17_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        swipper_div12_second.append(div);
    })
}

append_div12_second(div12_data)
var swiper = new Swiper(".mySwiper6", {
    slidesPerView: 3,
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


// nikhil javascript part 
// div14 js 

let div14_data = [
    {
        image: "https://img.shop.com/Image/240000/248000/248061/products/1926693868.jpg?plain&size=600x600",
        name: "22' Triple Stacked Pumpkins Thanksgiving Tabletop Decor",
        price: 508,
        star: 3,
        shipping: "Free Shipping with 200 Rs. Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/U/h/vieWA9AJE.webp",
        name: "Zulay Kitchen Knife Sharpener for Straight and Serrated Knives - Easy Manual Sharpening",
        price: 2999,
        star: 4,
        shipping: "Free Shipping"
    },
    {
        image: "https://www.shop.com/feo-cdn/j/S/acUqQaqg8.webp",
        name: "Autumn Splendor - Two Pockets - Fall / Thanksgiving Wide Band Leggings",
        price: 1999,
        star: 4,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/X/b/koIw3oKTU.webp",
        name: "Artificial Christmas Trees/Unlit Christmas Trees/6 and 6.5 Feet Tall Christmas Trees",
        price: 5899,
        star: 5,
        shipping: "Free Shipping"
    },
    {
        image: "https://www.shop.com/feo-cdn/b/Z/fmljIySmo.webp",
        name: "Set of 3 Orange and White Pumpkin Spice Baking Set",
        price: 3999,
        star: 3,
        shipping: "Free Shipping"
    },
    {
        image: "https://www.shop.com/feo-cdn/5/4/o6KxJw2XU.webp",
        name: "Smart Blonde Outdoor Decor Happy Fall Novelty Metal Arrow Sign A-182",
        price: 699,
        star: 5,
        shipping: "Free Shipping with 200 Rs. Order"
    },

]

let div14_extraArr = [
    {
        image: "https://img.shop.com/Image/240000/248000/248061/products/1926693868.jpg?plain&size=600x600",
        name: "22' Triple Stacked Pumpkins Thanksgiving Tabletop Decor",
        price: 508,
        star: 3,
        shipping: "Free Shipping with 200 Rs. Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/U/h/vieWA9AJE.webp",
        name: "Zulay Kitchen Knife Sharpener for Straight and Serrated Knives - Easy Manual Sharpening",
        price: 2999,
        star: 4,
        shipping: "Free Shipping"
    },
    {
        image: "https://www.shop.com/feo-cdn/j/S/acUqQaqg8.webp",
        name: "Autumn Splendor - Two Pockets - Fall / Thanksgiving Wide Band Leggings",
        price: 1999,
        star: 4,
        shipping: "Free Shipping with 4000 Rs Order"
    }
];

const div14_second = document.getElementById("div14_second")
const append_div14 = (data) => {
    div14_second.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement("div");
        div.setAttribute("class", "div14_cards");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div14_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div14_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        div14_second.append(div);
    });
}
append_div14(div14_extraArr);


// div 16 js 
let div16_data = [
    {
        image: "https://www.shop.com/feo-cdn/i/t/FvbIz-y9U.webp",
        name: "Isotonix OPC-3®",
        price: 1499,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/P/b/dONaa4sVE.webp",
        name: "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price: 1799,
        star: 5,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/C/e/JgOnhFyg8.webp",
        name: "Isotonix® Multivitamin Without Iron",
        price: 2399,
        star: 4,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/V/Q/MjsyMSVjg.webp",
        name: "Isotonix® Activated B Complex",
        price: 1299,
        star: 3,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/M/L/jzRSTha98.webp",
        name: "Isotonix® Vitamin D with K2",
        price: 1899,
        star: 5,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/m/Z/swKdMuBZc.webp",
        name: "Probiotics-10",
        price: 1199,
        star: 4,
        shipping: "Free Shipping with 4000 Rs Order"
    }
]

let div16_extraArr = [
    {
        image: "https://www.shop.com/feo-cdn/i/t/FvbIz-y9U.webp",
        name: "Isotonix OPC-3®",
        price: 1499,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/P/b/dONaa4sVE.webp",
        name: "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price: 1799,
        star: 5,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/C/e/JgOnhFyg8.webp",
        name: "Isotonix® Multivitamin Without Iron",
        price: 2399,
        star: 4,
        shipping: "Free Shipping with 4000 Rs Order"
    },
]

const div16_first = document.getElementById("div16_first")
const append_div16 = (data) => {
    div16_first.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement("div");
        div.setAttribute("class", "div16_cards");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div16_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div16_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        div16_first.append(div);
    });
}
append_div16(div16_extraArr);

let i = 1;
let n = 3;
setInterval(() => {
    if (i == 4) {
        i = 0;
    }
    div14_extraArr = [];
    div16_extraArr = [];
    for (let x = i; x < n + i; x++) {
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
        image: "https://www.shop.com/feo-cdn/i/t/FvbIz-y9U.webp",
        name: "Isotonix OPC-3®",
        price: 1499,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/Z/K/W8b5TLOH8.webp",
        name: "DNA Miracles Isotonix® Immune",
        price: 1299,
        star: 5,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/2/R/PseFpvzoc.webp",
        name: "ClearShield® Maximum Protection and Hydration",
        price: 1199,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/1/3/TWKLEddOs.webp",
        name: "Snap™ All-Purpose Natural Concentrate",
        price: 699,
        star: 3,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/P/b/dONaa4sVE.webp",
        name: "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price: 1799,
        star: 5,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/2/8/LZoNORNQc.webp",
        name: "Snap™ Heavy Duty Concentrate",
        price: 799,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/B/S/jNm3AB9Ho.webp",
        name: "Ultimate Aloe™",
        price: 999,
        star: 5,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/7/4/ipD1whsv0.webp",
        name: "Snap™ Triple Enzyme 3X Laundry Detergent",
        price: 499,
        star: 5,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/M/L/jzRSTha98.webp",
        name: "Isotonix® Vitamin D with K2",
        price: 1899,
        star: 5,
        shipping: "Free Shipping with 4000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/n/A/QC1DKml1g.webp",
        name: "Thymenol™",
        price: 1399,
        star: 3,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/F/Z/tLwzaZz8U.webp",
        name: "Isotonix Essentials® Anti-Aging",
        price: 1999,
        star: 4,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/K/s/Fwi8vPHeE.webp",
        name: "Isotonix® Complete Greens",
        price: 2199,
        star: 3,
        shipping: "Free Shipping with 1000 Rs Order"
    },
    {
        image: "https://www.shop.com/feo-cdn/C/e/JgOnhFyg8.webp",
        name: "Isotonix® Multivitamin Without Iron",
        price: 2399,
        star: 4,
        shipping: "Free Shipping with 4000 Rs Order"
    }
]

let swipper_div = document.querySelector("#div17>#div17_main>.mySwiper>.swiper-wrapper")
const append_div17 = (data) => {
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.onclick = ()=>{
            localStorage.setItem("swiped_data",JSON.stringify(el))
            window.location.href = "./items_detail.html"
        }
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h2")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.setAttribute("class", "div17_price")
        price.innerText = el.price;
        let div_star = document.createElement("div")
        for (let i = 0; i < el.star; i++) {
            let star = document.createElement("i")
            star.setAttribute("class", "fa-solid fa-star")
            div_star.append(star)
        }
        let ship = document.createElement("p");
        ship.setAttribute("class", "div17_ship")
        ship.innerText = el.shipping;

        div.append(image, name, price, div_star, ship);
        swipper_div.append(div);
    })
}

append_div17(div17_data)
var swiper1 = new Swiper(".mySwiper", {
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





const mediaQuery_mypage = (widthSize)=>{
   
    if(widthSize.matches){
        swiper1 = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
        });

        swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 3,
            spaceBetween: 30,
        
        });
     
    }
    else{
        swiper1 = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
        });

        swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 4,
            spaceBetween: 30,
        });
    }
}


const widthSize = window.matchMedia("(max-width: 750px)")

mediaQuery_mypage(widthSize);

widthSize.addEventListener("change",mediaQuery_mypage)


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




// cart length 
let addedItems=JSON.parse(localStorage.getItem("cartitems")) || [];
let total_cart_products = document.getElementById("cartitems")
total_cart_products.innerText = addedItems.length;




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