let container = document.getElementById('start')
let post = document.getElementById('post')


// <-- Initialize Swiper -->
var swiper = new Swiper (".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
  
var toys = [
  {
    image_url: "https://img.shop.com/Image/240000/243400/243406/products/1953965126.jpg?plain&size=600x600",
    name: "FurReal Cinnamon My Stylin' Pony Interactive Pet Toy",
    price: "Rs 620",
    desc: "Free shipping with $99 orders"
  },
  {
    image_url: "https://img.shop.com/Image/270000/274900/274929/products/1949640014.jpg?plain&size=450x450",
    name: "Barbie Signature - 2022 Holiday Barbie Doll, Black Hair, One Size",
    price: "Rs 900",
    desc: "Free shipping with $99 orders"
  },
  {
    image_url: "https://img.shop.com/Image/240000/243400/243406/products/1909271529.jpg?plain&size=1467x1467",
    name: "FurReal Friends GoGo My Dancing Pup",
    price: "Rs 752",
    desc: "Free shipping with $99 orders"
  },
  {
    image_url: "https://img.shop.com/Image/240000/243400/243406/products/1903478098.jpg?plain&size=1467x1467",
    name: "FurReal Friends Snackin' Sam the Bronto Plush Toy",
    price: "Rs 1,000",
    desc: "Free shipping with $99 orders"
  },
  {
    image_url: "https://img.shop.com/Image/240000/243500/243545/products/1908038413.jpg?plain&size=956x956",
    name: "Aurora World Sam I Am Plush Dood Toy Multi",
    price: "Rs 440",
    desc: "Free shipping with $99 orders"
  },
  {
    image_url: "https://img.shop.com/Image/240000/243500/243545/products/1908038410.jpg?plain&size=956x956",
    name: "Aurora World Horton Plush Toy Multi",
    price: "Rs 110",
    desc: "Free shipping with $99 orders"
  },
  {
    image_url: "https://img.shop.com/Image/240000/243500/243545/products/1918149955.jpg?plain&size=956x956",
    
    name: "Aurora World Cow Plush Toy Multi",
    price: "Rs 200",
    desc: "Free shipping with $99 orders"
  },

]
toys.forEach(function (el) {
  let card = document.querySelector(".swiper-slide")
  let img = document.createElement("img")
  img.src = el.image_url;
  let name = document.createElement("p")
  name.innerText = el.name;
  let price = document.createElement("p")
  price.innerText = el.price;
  let desc=document.createElement("p")
  desc.innerText=el.desc;

  card.append(img, name, price,desc)
  document.querySelector(".swiper-wrapper").append(card)
})
var medicine = [
    {
      image_url: "https://img.shop.com/Image/240000/247900/247927/products/1948463047.jpg?plain&size=1600x1600",
      name: "Shopping Annuity® Brand Premium Extra Strength Pain Relief Spray",
      price: "Rs 1010",
      rating:"112",
      desc: "Free shipping with $99 orders"
    },
    {
        image_url: "https://www.shop.com/feo-cdn/q/W/gwOZuHBJ0.webp",
        name: "AXIS Nutrition™ Advanced Digestive Support",
        price: "Rs 950",
        rating:"64",
        desc: "Free shipping with $99 orders"
      },
      {
        image_url: "https://www.shop.com/feo-cdn/-/5/8968QA4Z0.webp",
        name: "Pet Health CBD Formula for Cats & Dogs Pet Tincture",
        price: "Rs 620",
        rating:"56",
        desc: "Free shipping with $99 orders"
      }, 
     
      {
        image_url: "https://www.shop.com/feo-cdn/R/j/mhinj93tY.webp",
        name: "Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies",
        price: "Rs 870",
        rating:"91",
        desc: "Free shipping with $99 orders"
      },
      {
        image_url: "https://www.shop.com/feo-cdn/6/q/Jxj__g10Y.webp",
        name: "AXIS Nutrition™ Advanced Digestive Support",
        price: "Rs 620",
        rating:"136",
        desc: "Free shipping with $99 orders"
      },
      {
        image_url: "https://www.shop.com/feo-cdn/5/c/-DV5JOK74.webp",
        name: "Pet Health CBD Formula for Cats & Dogs Pet Tincture",
        price: "Rs 1120",
        rating:"86",
        desc: "Free shipping with $99 orders"
      },
      {
        image_url: "https://www.shop.com/feo-cdn/J/X/Cxq1d2u7c.webp",
        name: "Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger Gummies",
        price: "Rs 960",
        rating:"111",
        desc: "Free shipping with $99 orders"
      },
    //   {
    //     image_url: "",
    //     name: "",
    //     price: "Rs 620",
    //     rating:"56",
    //     desc: "Free shipping with $99 orders"
    //   },
]
medicine.forEach(function (el) {
    let card = document.querySelector(".swiper-slide")
    // let card=document.createElement("div")
    // console.log(el)
    // card.setAttribute("class" , "swiper-slide")
    let img = document.createElement("img")
    img.src = el.image_url;
    let name = document.createElement("p")
    name.innerText = el.name;
    let price = document.createElement("p")
    price.innerText = el.price;
    let rating=document.createElement("p")
    rating.textContent=el.rating;
    let desc=document.createElement("p")
    desc.innerText=el.desc;
  
    card.append(img, name, price,rating, desc)
    document.querySelector(".swiper-wrapper2").append(card)
  })
  var swiper = new Swiper (".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });