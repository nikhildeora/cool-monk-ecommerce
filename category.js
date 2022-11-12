import navbar from "./cmmponents/navbar.js"
const navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./cmmponents/footer.js"
const footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()


let beauty_products = [
    {
        id: 1,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24e6c50NYCETA0000010_1.jpg",
        price: 290,
        name: "Cetaphil gentle skin cleanser ",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 2,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd77ce48809559347633_1.jpg",
        price: 500,
        name: "LANEIGE Lip sleeping Mask",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 3,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd0f1fb4710032517839_1.jpg",
        price: "450",
        name: "Nutogena Water Gel",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 4,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/6/86e2144PLUMX00000055_1.jpg",
        price: 999,
        name: "Plum green tea oil moisturizer",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 5,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/3/132a0bd8904256005227_1.jpg",
        price: 599,
        name: "NIVEA'S face wash",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 6,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/e/3e9a21cMCAFF00000210_1.jpg",
        price: 999,
        name: "MCaffiene SPF 50 Sunscreen",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 7,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/7/77368018906087771333_1.jpg",
        price: 699,
        name: "Mamaearth Sunscreen",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 8,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/1/a1392a08904256008198_1.jpg",
        price: 399,
        name: "Nivea Body Lotion",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 9,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/7/d74fb75WOW_BOLO_SBCB400_1.jpg",
        price: 999,
        name: "WOW Science Body Lotion",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 10,
        category: "skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/9/8904245708252_1_1.jpg",
        price: 299,
        name: "Nykaa Jasmine Body Lotion",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 11,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/9/0938e6eNYLOPROF00002_aa1.jpg",
        price: 695,
        name: "L'OREAL Professional shampoo ",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 12,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/0/80048468904091128419_1.jpg",
        price: 229,
        name: "Scalpe Anti-Dandruff",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 13,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/e/fe8558826118_S1-8901030704680.jpg",
        price: 713,
        name: "Tressemme Shampoo",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 14,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nykcmbstp0006.jpg",
        price: 899,
        name: "Streax hair combo",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 15,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/e/ee502866946537083809_1.jpg",
        price: 871,
        name: "L'Oreal hair serum",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 16,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/6/d6ebe6eNYLOPROF00001_aa1.jpg",
        price: 4000,
        name: "L'Oreal Professionals Hair mask",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 17,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/e/6e85e6eNYMATRIX00078_aa1.jpg",
        price: 299,
        name: "Matrix opti conditioner",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 18,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/6/d6ebe6eNYLOPROF00001_aa1.jpg",
        price: 860,
        name: "L'Oreal Professionals Hair mask",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 19,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/f/7fcce608906087772439_1.jpg",
        price: 259,
        name: "Mamaearth Aloe Vera Gel",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 20,
        category: "hair",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/e/0ede7d33600542143608_1.jpg",
        price: 62990,
        name: "Garnier Fructis hair mask ",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 21,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/0/8011003993802.jpg",
        price: 4100,
        name: "Versace Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 22,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/c/7c517038411061823514_1.jpg",
        price: 4999,
        name: "Carolina Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 23,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/2/32d53f83614271994806_1.jpg",
        price: 32999,
        name: "Giorgio Armani Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 24,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/c/4c9fe6b3348901368254_a.jpg",
        price: 8999,
        name: "Dior Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 25,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/0/f0030e8888066075138_1.jpg",
        price: 9700,
        name: "Tom Ford leather",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 26,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/g/dg_lb_ei_edp_25ml_3423473032793.jpg",
        price: 5000,
        name: "Dolce & Gabbana Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 27,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/d/dd3fc63JOMAL00000033_1.jpg",
        price: 4100,
        name: "Jo Malone Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 28,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/2/625dfb7fores00000026_1.jpg",
        price: 2870,
        name: "Forrest Essientials Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 29,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/w/h/white_flower.jpg",
        price: 5999,
        name: "Kayali Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 30,
        category: "fragrance",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/5/65107430000_1.jpg",
        price: 5399,
        name: "Calvin Klein Eau De Toilette",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 31,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24815_h-8901030790065.jpg",
        price: 299,
        name: "Lakme absolute Primer",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 32,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/b/dbeb4e88904330900424_1.jpg",
        price: 599,
        name: "Kay 24 hr Kajal",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 33,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/6/066c973N_8904052432975_1.jpg",
        price: 361,
        name: "Colorbar Eyeliner",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 34,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/7/279c0c58904245710927_0.jpg",
        price: 1249,
        name: "Nykaa creme matte Lipstick",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 35,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/a/ca52eecpacxx00000133_1.jpg",
        price: 999,
        name: "PAC X jovita Brush Kit",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 36,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/e/0e16461NYLAGRL000033_1.jpg",
        price: 599,
        name: "L.A girl concealer",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 37,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/9/8904245711146_1.jpg",
        price: 599,
        name: "Nykaa eyeshadow Palette ",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 38,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/04a1b136902395487432_1.jpg",
        price: 4999,
        name: "Maybeline Foundation",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 39,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/3/13967ab8904245700454_1.jpg",
        price: 140,
        name: "Nykaa nail Enamel",
        shipping: 'Sold by BHFO',
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 40,
        category: "makeup",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/8/786e1908904320702274_1.jpg",
        price: 999,
        name: "SUGAR Cosmetics matte Lipstick",
        shipping: 'Sold by BHFO',
        star: 5,
    }


]

let electronics = [
    {
        id: 1,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/6/f/k/-original-imagg34whmtp6p5s.jpeg?q=70",
        price: 39999,
        name: "MOTOROLA Edge 30 Fusion ",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 2,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/kz7bcsw0/screen-guard/front-and-back-screen-guard/o/p/j/rr44-twenteesky-original-imagb9dh2hm4fzhw.jpeg?q=70",
        price: 39999,
        name: "SAMSUNG Galaxy S21 FE 5G",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 3,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/y/y/z/iphone-11-64-a-mwlw2hn-a-apple-0-original-imafkg25qghgbxmm.jpeg?q=70",
        price: "37999",
        name: "APPLE Iphone 11",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 4,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/a/e/-original-imagge6puyb5czec.jpeg?q=70",
        price: 45999,
        name: "OPPO Reno 8 Pro 5G",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 5,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/i/j/-original-imaggceewkgkxthq.jpeg?q=70",
        price: 48789,
        name: "ONE PLUS 10T 5G",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 6,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70",
        price: 49999,
        name: "IQOO 9T 5G",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 7,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/k6zda4w0/mobile/v/m/q/realme-x50-pro-rmx2076-original-imafpbbvwqm4kjnv.jpeg?q=70",
        price: 47999,
        name: "REALME X50 Pro 5G",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 8,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70",
        price: 46999,
        name: "ASUS ROG 5s",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 9,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/kg6vfrk0/mobile/e/s/6/mi-10t-pro-mzb07zdin-original-imafwhbrythgcddt.jpeg?q=70",
        price: 38999,
        name: "MI 10T Pro",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 10,
        category: "mobile",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70",
        price: 84999,
        name: "GOOGLE PIXEL 7 Pro",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 11,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/c/q/t/lenovo-na-thin-and-light-laptop-original-imafuzt873zgp9xe.jpeg?q=70",
        price: 37228,
        name: "Lenovo IdeaPad 11th Gen ",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 12,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70",
        price: 29999,
        name: "Redmi Notebook",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 13,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/b/e/h/-original-imagjyc69gh3a8wu.jpeg?q=70",
        price: 45990,
        name: "acer Aspire 7",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 14,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70",
        price: 33990,
        name: "Asus Vivobook 15",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 15,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/l2qhjm80/computer/l/t/g/gf63-thin-11uc-867in-gaming-laptop-msi-original-imageyk5hzuthuyf.jpeg?q=70",
        price: 49999,
        name: "MSi 13th Gen",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 16,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/l1dwknk0/computer/e/u/0/inspiron-3525-notebook-dell-original-imagcyrebyny33kd.jpeg?q=70",
        price: 45000,
        name: "DELL Inspiron 15000",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 17,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/kwdv3bk0/computer/r/m/c/15-ec2145ax-gaming-laptop-hp-original-imag92vp9cznphgg.jpeg?q=70",
        price: 65000,
        name: "HP Pavalion",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 18,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/p/p/o/macbook-air-thin-and-light-laptop-apple-original-imagfdfpnjjpdhq2.jpeg?q=70",
        price: 149900,
        name: "APPLE Macbook Air M2",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 19,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/k9he0sw0/computer/m/h/d/microsoft-original-imafr9qyecvfeyta.jpeg?q=70",
        price: 99999,
        name: "Microsoft Surface",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 20,
        category: "laptop",
        image: "https://rukminim1.flixcart.com/image/312/312/l37mtu80/computer/q/v/i/np750xed-kb1in-thin-and-light-laptop-samsung-original-imagednvcrgdxpam.jpeg?q=70",
        price: 62990,
        name: "SAMSUNG Galaxy Book2 ",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 21,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70",
        price: 32000,
        name: "One Plus U1S",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 22,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/l3929ow0/television/h/d/m/kd-65x75k-in5-sony-original-imagef3zkuszrfgh.jpeg?q=70",
        price: 83999,
        name: "Sony Bravia",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 23,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/television/b/c/7/-original-imaggz6zd5rchpuq.jpeg?q=70",
        price: 32999,
        name: "Toshiba C350LP",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 24,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/l2krs7k0/air-conditioner-new/0/j/q/-original-imagdvx8xhqjgevy.jpeg?q=70",
        price: 32999,
        name: "Voltas 1.5 Ton Split AC",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 25,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/jua4djk0/air-conditioner-new/f/r/q/jw-q18wuza-1-5-window-lg-fixed-speed-original-imaffg2mbghyfcgb.jpeg?q=70",
        price: 44999,
        name: "LG 1.5 Ton Split AC",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 26,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/kmqn3bk0/air-conditioner-new/t/n/u/rsng317heea-split-hitachi-inverter-original-imagfkkspgrjuc29.jpeg?q=70",
        price: 65000,
        name: "Hitachi 1.5 Ton Split AC",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 27,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/l51d30w0/refrigerator-new/j/y/q/neo-fresh-245l-3-star-magnum-steel-1490-3-2022-54-whirlpool-665-original-imagfsxhaermmh7g.jpeg?q=70",
        price: 24999,
        name: "Whirlpool 245L",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 28,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/kpinwy80/refrigerator-new/k/q/y/rt28t3743s8-hl-3-2020-samsung-original-imag3qf9pnsjubtt.jpeg?q=70",
        price: 32999,
        name: "SAMSUNG 253L Double Door",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 29,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/s/y/z/-original-imaggsgpp5bz9h8k.jpeg?q=70",
        price: 35999,
        name: "LG 253L Double Door",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 30,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/l37mtu80/washing-machine-new/m/d/s/-original-imagedm8qgrzh6fb.jpeg?q=70",
        price: 25999,
        name: "IFB 6kg 5star front load",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 31,
        category: "appliances",
        image: "https://rukminim1.flixcart.com/image/312/312/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
        price: 32999,
        name: "SAMSUNG 6kg 5star front load",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 32,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/312/312/l27wtjk0/headphone/n/l/z/-original-imagdm83tckkzsek.jpeg?q=70",
        price: 599,
        name: "Boult Audio Bass Q2",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 33,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/300/300/ksdjma80/headphone/o/f/c/airdopes-131-airdopes-138-boat-original-imag5yz96jehyqrg.jpeg?q=90",
        price: 1299,
        name: "BOAT airdrops",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 34,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/612/612/kfcv6vk0/power-bank/q/z/q/power-bank-10000-plm13zm-mi-original-imafvtreeefx5thb.jpeg?q=70",
        price: 1249,
        name: "Mi 10000mah Powerbank",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 35,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/612/612/l5jxt3k0/power-bank/w/e/o/-original-imagg7nqmp6wzhfn.jpeg?q=70",
        price: 999,
        name: "Ambrane 10000mah Poerbank",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 36,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/612/612/ke7ff680/memory-card/microsdxc/p/x/z/samsung-mb-mc64ha-in-original-imafuxz4u4qkfuh5.jpeg?q=70",
        price: 599,
        name: "SAMSUNG 64gb MicroSD",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 37,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/612/612/ki3gknk0/memory-card/microsdxc/m/c/h/sandisk-sdsqua4-064g-gn6mn-original-imafxyzvahgcusue.jpeg?q=70",
        price: 599,
        name: "San-Disk Ultra 64gb MicroSD ",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 38,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/300/300/jpwxxu80/external-hard-drive/hdd/r/f/s/wd-wdbu6y0015bbk-wesn-original-imafcfqyjdue4hpf.jpeg?q=90",
        price: 4999,
        name: "WD 1.5TB External HD",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 39,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/312/312/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70",
        price: 4999,
        name: "Canon inkjet Printer",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 40,
        category: "accesories",
        image: "https://rukminim1.flixcart.com/image/312/312/kwl0akw0/printer/m/n/n/-original-imag989fzjs35wfb.jpeg?q=70",
        price: 12999,
        name: "EPSON multi function printer",
        shipping: 'Sold by BHFO',
        star: 5,
    }



]

let jewellery = [
    {
        id: 1,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943471860.jpg?plain&size=600x600",
        price: 290,
        name: "OLIVIA - FReshwater Pearl & Paperclip Bracelet ",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 2,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1932866534.jpg?plain&size=600x600",
        price: 500,
        name: "SELENA - Pave Cuban Link Chain",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 3,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1925345920.jpg?plain&size=600x600",
        price: "450",
        name: "ENZO - Cable Link Bracelet",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 4,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472049.jpg?plain&size=600x600",
        price: 999,
        name: "KOURTNEY - Nine Cross Necklace",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 5,

        image: "https://img.shop.com/Image/240000/248600/248698/products/1939501238.jpg?plain&size=600x600",
        price: 599,
        name: "Lumière de Vie - Refine & Moisturize Lip Duo",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 6,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472083.jpg?plain&size=600x600",
        price: 999,
        name: "EDEN - Chain Link Pendan",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 7,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472043.jpg?plain&size=600x600",
        price: 699,
        name: "HARPER - Ultra Wide Herringbone",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 8,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943471807.jpg?plain&size=600x600",
        price: 399,
        name: "SEBASTIAN - Slider Hoops",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 9,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943471851.jpg?plain&size=600x600",
        price: 999,
        name: "SAYLOR - Satin Finish Cuff",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 10,

        image: "https://img.shop.com/Image/280000/282000/282022/products/1943472078.jpg?plain&size=600x600",
        price: 299,
        name: "ELLIS - Micro Pearl Link Chain",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 11,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/9/0938e6eNYLOPROF00002_aa1.jpg",
        price: 695,
        name: "Zaveri Pearl gold ",
        shipping: 'Sold by BHFO',
        star: 3,
    },
    {
        id: 12,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/d/fddc20boomph00000772_1.jpg",
        price: 229,
        name: "OOMPH Pink Large Drop",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 13,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/0432e88zaver00000401__1_.jpg",
        price: 713,
        name: "Zaveri Pearls antique necklace",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 14,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/a/2a69c18o-nv18br0037677_1.jpg",
        price: 899,
        name: "Pipa Bella mangalsutra",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 15,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/6/065b2feblueb00000179.jpg",
        price: 871,
        name: "Blueberry set of 10 Bracelet",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 16,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/2/3289e88zaver00000377__1_.jpg",
        price: 5000,
        name: "Zaveri Pearls Autrian Diamond",
        shipping: 'Sold by BHFO',
        star: 2,
    },
    {
        id: 17,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/4/348e7a8nykpriy000874.jpg",
        price: 299,
        name: "Priyaasi Gold plated kundan",
        shipping: 'Sold by BHFO',
        star: 4,
    },
    {
        id: 18,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/c/7c3683ejg-pc-erg-8618_1.jpg",
        price: 860,
        name: "Gold Plated earrings",
        shipping: 'Sold by BHFO',
        star: 5,
    },
    {
        id: 19,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/4/94d23c7zpfk8882__1_.jpg",
        price: 259,
        name: "Zaveri Pearls Bridal Set",
        shipping: 'Sold by BHFO',
        star: 5,
    },

    {
        id: 20,

        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/8/8871d6e8904306299507_02S_1.jpg",
        price: 4100,
        name: "Frida gold toned jewellery set",
        shipping: 'Sold by BHFO',
        star: 4,
    },

]

let kids = [
    {
        id: 1,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1854175325.jpg?plain&size=400x400',
        name: 'Toddler Boys 7 Pack Spiderman Briefs, 4t , Multiple Colors',
        price: 960,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 2,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1853777717.jpg?plain&size=400x400',
        name: 'Toddler Boys 7 Pack Spiderman Briefs, 2t-3t , Multiple Color',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 3,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908233213.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shocks Combo',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 4,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1915512615.jpg?plain&size=400x400',
        name: 'Baby Boys Long-Sleeve Bodysuits, Pack of 5',
        price: 1700,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 5,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950241311.jpg?plain&size=400x400',
        name: 'First Impressions Baby Boys Star-Print Puffer Coat, Created for Macy',
        price: 2500,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 6,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1922848179.jpg?plain&size=400x400',
        name: 'First Impressions Baby Boys Star-Print Puffer Coat, Created for Macy',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 7,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950992524.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shades Pullover Boy',
        price: 4000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 8,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950995873.jpg?plain&size=400x400',
        name: 'Baby Boy Carter Camo Puffer Heavyweight Jacket',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 9,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908175428.jpg?plain&size=400x400',
        name: 'Skip*hop Zoo Bath Fishin Fox Multii',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 10,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908078820.jpg?plain&size=400x400',
        name: 'Disney Minnie Mouse Inflatable Bath Tub',
        price: 1620,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 11,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908239284.jpg?plain&size=400x400',
        name: 'Skip*hop Moby Bath Kneeler In Grey',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 12,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907787947.jpg?plain&size=400x400',
        name: 'Sassy Soft Swimmers Bath Toys',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 13,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907784302.jpg?plain&size=400x400',
        name: 'Elegant Baby Monster Truck Party Bath Squirties Multii',
        price: 1200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 14,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907250923.jpg?plain&size=400x400',
        name: 'Kanga Care Lil Joey Newborn All in One AIO Cloth Diaper (2pk)',
        price: 2400,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 15,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907775044.jpg?plain&size=400x400',
        name: 'BKanga Care Rumparooz Reusable One Size Pocket Cloth Diaper',
        price: 2000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 16,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1854175325.jpg?plain&size=400x400',
        name: 'Toddler Girls 7 Pack Spiderman Briefs, 4t , Multiple Colors',
        price: 960,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 17,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1853777717.jpg?plain&size=400x400',
        name: 'Toddler Girls 7 Pack Spiderman Briefs, 2t-3t , Multiple Color',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 18,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908233213.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shocks Combo',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 19,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1915512615.jpg?plain&size=400x400',
        name: 'Baby Girls Long-Sleeve Bodysuits, Pack of 5',
        price: 1700,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 20,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950241311.jpg?plain&size=400x400',
        name: 'First Impressions Baby Girls Star-Print Puffer Coat, Created for Macy',
        price: 2500,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 21,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1922848179.jpg?plain&size=400x400',
        name: 'First Impressions Baby Girls Star-Print Puffer Coat, Created for Macy',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 22,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950992524.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shades Pullover Girl',
        price: 4000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 23,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950995873.jpg?plain&size=400x400',
        name: 'Baby Girl Carter Camo Puffer Heavyweight Jacket',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 24,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908175428.jpg?plain&size=400x400',
        name: 'Skip*hop Zoo Bath Fishin Fox Multii',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 25,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908078820.jpg?plain&size=400x400',
        name: 'Disney Minnie Mouse Inflatable Bath Tub',
        price: 1620,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 26,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908239284.jpg?plain&size=400x400',
        name: 'Skip*hop Moby Bath Kneeler In Grey',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 27,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907787947.jpg?plain&size=400x400',
        name: 'Sassy Soft Swimmers Bath Toys',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 28,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907784302.jpg?plain&size=400x400',
        name: 'Elegant Baby Monster Truck Party Bath Squirties Multii',
        price: 1200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 29,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907250923.jpg?plain&size=400x400',
        name: 'Kanga Care Lil Joey Newborn All in One AIO Cloth Diaper (2pk)',
        price: 2400,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 30,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907775044.jpg?plain&size=400x400',
        name: 'BKanga Care Rumparooz Reusable One Size Pocket Cloth Diaper',
        price: 2000,
        shipping: 'Sold by BHFO',
        star: 3
    },
]

let mens = [
    {
        id: 1,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909955.jpg?plain&size=400x400',
        name: 'Clique Mens Reliance Packable Jacket',
        price: 1500,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 2,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909956.jpg?plain&size=400x400',
        name: 'Clique Mens Hudson Jacket Clique Mens Hudson Jacket',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 3,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910019.jpg?plain&size=400x400',
        name: 'Clutter and Buck mens Advantage Zip Mocket Jacket ',
        price: 7200,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 4,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909955.jpg?plain&size=400x400',
        name: 'Clique Colorado Mens Jacket',
        price: 12000,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 5,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910028.jpg?plain&size=400x400',
        name: 'Clique and Buck Mens Shoreline Packable Jacket',
        price: 8000,
        shipping: 'Sold by Cutter & Buck',
        star: 2
    },
    {
        id: 6,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836733.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip jacket',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 7,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/292000/292019/products/1932866045.jpg?plain&size=400x400',
        name: 'Cinch Work Denim Jeans Mens FR Blue Label Utility WRX',
        price: 6500,
        shipping: 'Sold by Ranch and Home',
        star: 3
    },
    {
        id: 8,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/290400/290461/products/1942803010.jpg?plain&size=400x400',
        name: 'Dolce & Gabbana Blue Cotton Stretch Slim Fit Denim Men',
        price: 24000,
        shipping: 'Sold by LUX LAIR',
        star: 3
    },
    {
        id: 9,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836733.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip Jeans',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 10,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1936329597.jpg?plain&size=400x400',
        name: 'LUCKY BRAND Mens Blue Relaxed Fit Denim Jeans',
        price: 4000,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 11,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1935359763.jpg?plain&size=400x400',
        name: 'LEVIS Mens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 2400,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 12,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1899351355.jpg?plain&size=400x400',
        name: 'LEVIS Mens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 4800,
        shipping: 'Sold by JC Penny',
        star: 4
    },
    {
        id: 13,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1934733443.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip jacket',
        price: 4400,
        shipping: 'Sold by Cutter & Buck',
        star: 1
    },
    {
        id: 14,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1915600598.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Jeans',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 15,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939500270.jpg?plain&size=400x400',
        name: 'Cutter & Buck Mens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 4000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 16,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1943601116.jpg?plain&size=400x400',
        name: 'Cutter & Buck Mens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 8000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 17,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910020.jpg?plain&size=400x400',
        name: 'Cutter & Buck Versatech Multi Check Stretch Mens Big and Tall',
        price: 7500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 18,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910013.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 7200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 19,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939500311.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 20,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910042.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 6600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 21,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909978.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 160,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 22,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1921848209.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 20000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 23,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1919207483.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 16000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 24,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1919085971.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 14400,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 25,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1919208138.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 21000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 26,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1925626770.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 26000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 27,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1925886109.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 13600,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 28,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938902935.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 29,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1928248230.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style ',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 30,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938883217.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 31,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938901572.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style ',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 32,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1948834533.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 1560,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 33,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/248200/248295/products/1946132994.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style ',
        price: 4800,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 34,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1918670890.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 13200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 35,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1946209252.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 1320,
        shipping: 'Sold by BHFO',
        star: 2
    }
]

let videoGame_arr = [
    {
        id: 1,
        name: "Dream Wireless Y-D002-189 Wireless Remote Controller with Bluetooth Gaming Controller USB Gamepad Joystick for Switch Console, Windows PC & Android Device, Blue",

        image: "https://img.shop.com/Image/250000/251800/251872/products/1880427534.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by UnbeatableSale",
        price: 2822,
    },
    {
        id: 2,
        name: "Hyperkin Armor3 Travel Kit for Nintendo Switch Lite (GameStop)",

        image: "https://img.shop.com/Image/250000/250900/250986/products/1937190551.jpg?plain&size=400x400",
        star:  4 ,
        shipping: "Sold by GameStop",
        price: 4513,
    },
    {
        id: 3,
        name: "Atrix Glass Screen Protector for Nintendo Switch Lite (GameStop)",

        image: "https://img.shop.com/Image/250000/250900/250986/products/1937190530.jpg?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by GameStop",
        price: 4513,
    },
    {
        id: 4,
        name: "At Games Legends Core Plus Gamepad & Streaming Arcade Console",

        image: "https://img.shop.com/Image/290000/290600/290680/products/1928297410.png?plain&size=400x400",
        star:  4 ,
        shipping: "Sold by eWirelessGear",
        price: 3456,
    },
    {
        id: 5,
        name: "Planet Coaster: Console Edition (Sold Out Sales), Pre-Owned - GameStop",

        image: "https://img.shop.com/Image/250000/250900/250986/products/1937195038.jpg?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 6,
        name: "ENHANCE Xbox Console Gaming Backpack (GameStop)",
        image: "https://img.shop.com/Image/250000/250900/250986/products/1938844248.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 7,
        name: "Observer: System Redux - PlayStation 5 (Deep Silver), New - GameStop",

        image: "https://img.shop.com/Image/250000/250900/250986/products/1937202549.jpg?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 8,
        name: "Nintendo 64 Console Card N64 - Tomee",
        image: "https://img.shop.com/Image/260000/266800/266829/products/1851146812.jpg?plain&size=400x400",
        star:  4 ,
        shipping: "Sold by Shop Jada's",
        price: 1995
    },
    {
        id: 9,
        name: "Motorola Y-D002-117 Classic Controller for Nintendo Wii, Wiiu, Nes Classic Edition, Classic Console Gamepad Gaming Pad Joypad for Nintendo Wii Wii U - Black",
        image: "https://img.shop.com/Image/250000/251800/251872/products/1850337127.jpg?plain&size=400x400",
        star:  4 ,
        shipping: "Sold by UnbeatableSale",
        price: 4412
    },
    {
        id: 10,
        name: "Planet Coaster: Console Edition - PlayStation 5 (Sold Out Sales), Pre-Owned - GameStop",
        image: "https://img.shop.com/Image/250000/250900/250986/products/1937202905.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 11,
        name: "Mario Kart Live: Home Circuit - Luigi Set Luigi Edition - Nintendo Switch, Nintendo Switch Lite",
        image: "https://img.shop.com/Image/290000/290600/290680/products/1928297410.png?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by Red Tags Cameras",
        price: 3242,
    },
    {
        id: 12,
        name: "3-Port HD Switcher for HD Game Consoles and Devices - Armor3",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928470149.jpg?plain&size=450x450",
        star:  5 ,
        shipping: "Sold by Shop Jada's",
        price: 2571
    },
    {
        id: 13,
        name: "Arsenal NSCON1 Switch Wireless Controller Gaming Console for Windows & PC - Black & Red",
        image: "https://img.shop.com/Image/290000/291500/291508/products/1943938135.jpg?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by UnbeatableSale",
        price: 1799,
    },
    {
        id: 14,
        name: "PDP Ultra Slim Charge System for PlayStation 4 (GameStop)",
        image: "https://img.shop.com/Image/250000/250900/250986/products/1938920325.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 15,
        name: "Casper Premium Tempered Glass Screen Protector for Nintendo Switch Lite - Clear",
        image: "https://img.shop.com/Image/290000/290400/290460/products/1918679193.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by Simple Cell",
        price: 3200
    },
    {
        id: 16,
        name: "Disney Infinity: 3.0 Edition Starter Pack - Xbox One Refurbished",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928469937.jpg?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by GamesnGadgetsPlus",
        price: 4513
    },
    {
        id: 17,
        name: "Xbox Design Lab ProBlue Certified Refurbished",
        image: "https://img.shop.com/Image/290000/290400/290460/products/1918679193.jpg?plain&size=400x400",
        star:  2 ,
        shipping: "Sold by GamesnGadgetsPlus",
        price: 4513
    },
    {
        id: 18,
        name: "Peco PCOPL-27 Point Switch Console",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928469937.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by UnbeatableSale",
        price: 2388
    },
    {
        id: 19,
        name: "Observer: System Redux - PlayStation 4 (Deep Silver), Pre-Owned - GameStop",
        image: "https://img.shop.com/Image/290000/290400/290460/products/1918679193.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 20,
        name: "ENHANCE Gaming Console Backpack, Black/Green (GameStop)",
        image: "https://img.shop.com/Image/290000/291500/291508/products/1943938135.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 3242,
    },
    {
        id: 21,
        name: "Hyperkin M05932-BK RetroN2 2 in 1 Console Videogame Hardware, Black",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928470149.jpg?plain&size=450x450",
        star:  5 ,
        shipping: "Sold by UnbeatableSale",
        price: 1288
    },
    {
        id: 22,
        name: "1tb Ssd Upgrade Kit For The Playstation 4(1/ea)",
        image: "https://img.shop.com/Image/290000/291500/291508/products/1943938135.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by Bmbrooks",
        price: 1566
    },
    {
        id: 23,
        name: "Western Digital WD Black D30 Game Drive 1TB for Xbox (GameStop)",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928469937.jpg?plain&size=400x400",
        star:  3 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 24,
        name: "ENHANCE Gaming Console Backpack, Black/Blue (GameStop)",
        image: "https://img.shop.com/Image/290000/291500/291508/products/1943938135.jpg?plain&size=400x400",
        star:  2 ,
        shipping: "Sold by GameStop",
        price: 3242,
    },
    {
        id: 25,
        name: "HORI DuraFlexi Pikachu Protector for Nintendo Switch Lite Black/Gold (GameStop)",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928469937.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 26,
        name: "Hyperkin M02888-SB Super Famicom HD for NES Gaming Console, Space Black",
        image: "https://img.shop.com/Image/250000/250900/250986/products/1938920325.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by UnbeatableSale",
        price: 3242,
    },
    {
        id: 27,
        name: "Return of Double Dragon (Compatible with Aftermarket SNES systems only) - Super Nintendo (Tradewest), Pre-Owned - GameStop",
        image: "https://img.shop.com/Image/290000/291500/291508/products/1943938135.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by GameStop",
        price: 4513
    },
    {
        id: 28,
        name: "Toshiba HDTX110XK3AA Canvio Gaming 1TB External USB 3.0 Portable Hard Drive",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928470149.jpg?plain&size=450x450",
        star:  2 ,
        shipping: "Sold by Electronic Express",
        price: 2530
    },
    {   id:29,
        name: "Hyperkin Retron Sq: HD Gaming Console For Game Boy Black & Gold",
        image: "https://img.shop.com/Image/270000/274900/274929/products/1928469937.jpg?plain&size=400x400",
        star:  5 ,
        shipping: "Sold by Shop Jada's",
        price: 2571
    },
]


let Womens = [
    {
        id: 1,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910025.jpg?plain&size=400x400',
        name: 'Cutter & Buck Ladies CB DryTec Edge Full Zip Jacket',
        price: 8000,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 2,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910016.jpg?plain&size=400x400',
        name: 'Cutter & Buck Ladies CB DryTec Edge Full Zip Jacke',
        price: 3600,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 3,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909972.jpg?plain&size=400x400',
        name: 'Clique Ladies Stora Jacket ',
        price: 6000,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 4,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910044.jpg?plain&size=400x400',
        name: 'Clique Helsa Sport Colorblock Lady Full Zip Jacket',
        price: 4300,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 5,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939500299.jpg?plain&size=400x400',
        name: 'Altitude Quilted Jacket',
        price: 16400,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 6,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910047.jpg?plain&size=400x400',
        name: 'Clique Ladies Kingsland Jacket',
        price: 5800,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 7,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1935901540.jpg?plain&size=400x400',
        name: 'PINKO Womens Sabrina Destroyed Raw Hem Skinny Jeans',
        price: 5600,
        shipping: 'Sold by Ranch and Home',
        star: 3
    },
    {
        id: 8,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/292000/292019/products/1932761893.jpg?plain&size=400x400',
        name: 'Cowgirl Tuff Western Jeans Womens Breathe Bootcut Relax Light JBRL',
        price: 8100,
        shipping: 'Sold by LUX LAIR',
        star: 3
    },
    {
        id: 9,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/292000/292019/products/1932761210.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip Jeans',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 10,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1936329597.jpg?plain&size=400x400',
        name: 'Cowgirl Tuff Western Bib Overall Women Fleece Lined Winter Dark JTWBI',
        price: 7900,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 11,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1921892767.jpg?plain&size=400x400',
        name: 'LEVIS Womens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 2400,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 12,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1935600568.jpg?plain&size=400x400',
        name: 'LEVIS Womens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 4800,
        shipping: 'Sold by JC Penny',
        star: 4
    },
    {
        id: 13,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/280000/285800/285857/products/1939697102.jpg?plain&size=400x400',
        name: 'CBUK Womens Swish Full-Zip jacket',
        price: 4400,
        shipping: 'Sold by Cutter & Buck',
        star: 1
    },
    {
        id: 14,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/240000/245300/245346/products/1900553453.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Jeans',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 15,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1943601108.jpg?plain&size=400x400',
        name: 'Cutter & Buck Womens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 2000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 16,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910038.jpg?plain&size=400x400',
        name: 'Cutter & Buck Womens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 8000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 17,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939530742.jpg?plain&size=400x400',
        name: 'Cutter & Buck Versatech Multi Check Stretch Womens Big and Tall',
        price: 7500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 18,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910014.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Shirt',
        price: 7800,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 19,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909963.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Shirt',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 20,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836745.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Shirt',
        price: 6600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 21,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836750.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Pink Destory Skinny Shirt',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 22,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/260000/264900/264928/products/1901073237.jpg?plain&size=400x400',
        name: 'Le Suit Womens Petite Pleated-Hem Skirt Suit ',
        price: 20000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 23,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/260000/264900/264928/products/1793404153.jpg?plain&size=400x400',
        name: 'Womens Burgundy Le Suit Womens Petite Pleated-Hem Skirt Suit ',
        price: 16000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 24,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1871750233.jpg?plain&size=400x400',
        name: 'Womens Belted Wool Look Blazer - Brown - 1',
        price: 14400,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 25,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1865702130.jpg?plain&size=400x400',
        name: 'Womens Belted Wool Look Blazer - Black - 88',
        price: 2100,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 26,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/240000/248200/248295/products/1905294173.jpg?plain&size=400x400',
        name: 'Club Monaco Fashion Blazer',
        price: 26000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 27,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1923609965.jpg?plain&size=400x400',
        name: 'Club Monaco Fashion Blazer',
        price: 13600,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 28,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938914710.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Womens Wacam Pullover Sweater, Style',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 29,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/260000/269300/269358/products/1909824272.jpg?plain&size=400x400',
        name: 'DC Comics Superman and Supergirl Symbol Crop Top Sweater',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 30,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1932139463.jpg?plain&size=400x400',
        name: 'BB Dakota by Steve Madden Womens Knit Right In V-Neck Cardigan Sweater',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 31,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1944335527.jpg?plain&size=400x400',
        name: 'Karen Scott Petite Curved-Hem Neps Pullover Sweater, Created for Macys ',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 32,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1871424805.jpg?plain&size=400x400',
        name: 'Diane Von Furstenberg Womens Jess Ribbed Lightweight Crewneck Sweater',
        price: 1560,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 33,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/280000/288000/288080/products/1894373587.jpg?plain&size=400x400',
        name: 'Leopard Cardigan Top Quality Women ',
        price: 4800,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 34,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1922848179.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shades Pullover Sweater',
        price: 13200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 35,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/280000/288000/288080/products/1892927825.jpg?plain&size=400x400',
        name: 'Draped Cardigan - Navy Top Quality Women',
        price: 1320,
        shipping: 'Sold by BHFO',
        star: 2
    }
] 


let addedItems=JSON.parse(localStorage.getItem("cartitems")) || [];
let total_cart_products = document.getElementById("cartitems")
total_cart_products.innerText = addedItems.length;


let category_main = document.getElementById("category_data")

const append_cat_data = (data) => {
    category_main.innerHTML = null;
    data.forEach(el => {
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
        let show_detail = document.createElement("button")
        show_detail.setAttribute("class","show_detail")
        show_detail.innerText = "See Details"
        show_detail.onclick = ()=>{
                localStorage.setItem("swiped_data",JSON.stringify(el))
                window.location.href = "./items_detail.html"
        }

        let add_to_cart = document.createElement("button")
        add_to_cart.setAttribute("class","add_to_cart")
        add_to_cart.innerText = "Add To Cart"
        add_to_cart.onclick = ()=>{
            add_to_cart.innerText = "Added"
            add_to_cart.disabled = true;
            addedItems.push(el)
            total_cart_products.innerText = addedItems.length;
            localStorage.setItem("cartitems",JSON.stringify(addedItems))
        }

        div.append(image, name, price, div_star, ship,show_detail,add_to_cart);
        category_main.append(div);
    });
}


// let addedItems=JSON.parse(localStorage.getItem("cartitems")) || [];
// addedItems.push(el)
// localStorage.setItem("cartitems",JSON.stringify(addedItems))


// cart length 



// append_cat_data(mens)

let call_category = localStorage.getItem("category_call");

function category_append(){
    if(call_category=="mens"){
        append_cat_data(mens)
    }
    else if(call_category=="womens"){
        append_cat_data(Womens)
    }
    else if(call_category=="beauty"){
        append_cat_data(beauty_products)
    }
    else if(call_category=="electronics"){
        append_cat_data(electronics)
    }
    else if(call_category=="jewellery"){
        append_cat_data(jewellery)
    }
    else if(call_category=="kids"){
        append_cat_data(kids)
    }
    else if(call_category=="videogame"){
        append_cat_data(videoGame_arr)
    }
    else{
        console.log("nothing");
    }
}

category_append()

// sorting js 

let a_to_z = document.getElementById("AtoZ")
let z_to_a = document.getElementById("ZtoA")
let g_rate = document.getElementById("Good_rate")
let h_to_l = document.getElementById("high_to_low")
let l_to_h = document.getElementById("low_to_high")
let g_4000 = document.getElementById("greater_4000")
let l_4000 = document.getElementById("lesser_4000")


// a to z functionality 
a_to_z.onclick = ()=>{
    if(call_category=="mens"){
       let me_arr =  mens.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(mens)
    }
    else if(call_category=="womens"){
        let me_arr =  Womens.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(Womens)
    }
    else if(call_category=="beauty"){
        let me_arr =  beauty_products.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(beauty_products)
    }
    else if(call_category=="electronics"){
        let me_arr =  electronics.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(electronics)
    }
    else if(call_category=="jewellery"){
        let me_arr =  jewellery.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(jewellery)
    }
    else if(call_category=="kids"){
        let me_arr =  kids.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(kids)
    }
    else if(call_category=="videogame"){
        let me_arr =  videoGame_arr.sort(function(a,b){
            if(a.name>b.name){
                return 1;
            }
            else if(a.name<b.name){
                return -1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(videoGame_arr)
    }
    else{
        console.log("nothing");
    }
}


// z to a functionality 
z_to_a.onclick = ()=>{
    if(call_category=="mens"){
       let me_arr =  mens.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(mens)
    }
    else if(call_category=="womens"){
        let me_arr =  Womens.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(Womens)
    }
    else if(call_category=="beauty"){
        let me_arr =  beauty_products.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(beauty_products)
    }
    else if(call_category=="electronics"){
        let me_arr =  electronics.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(electronics)
    }
    else if(call_category=="jewellery"){
        let me_arr =  jewellery.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(jewellery)
    }
    else if(call_category=="kids"){
        let me_arr =  kids.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(kids)
    }
    else if(call_category=="videogame"){
        let me_arr =  videoGame_arr.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            else if(a.name<b.name){
                return 1;
            }
            else{
                return 0;
            }
        })
        append_cat_data(videoGame_arr)
    }
    else{
        console.log("nothing");
    }
}


// by rating functionality 
g_rate.onclick = ()=>{
    if(call_category=="mens"){
        let me_arr = mens.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(mens)
    }
    else if(call_category=="womens"){
        let me_arr = Womens.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(Womens)
    }
    else if(call_category=="beauty"){
        let me_arr = beauty_products.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(beauty_products)
    }
    else if(call_category=="electronics"){
        let me_arr = electronics.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(electronics)
    }
    else if(call_category=="jewellery"){
        let me_arr = jewellery.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(jewellery)
    }
    else if(call_category=="kids"){
        let me_arr = kids.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(kids)
    }
    else if(call_category=="videogame"){
        let me_arr = videoGame_arr.sort(function(a,b){
            return b.star-a.star;
        })
        append_cat_data(videoGame_arr)
    }
    else{
        console.log("nothing");
    }
}


// by price high to low 
h_to_l.onclick = ()=>{
    if(call_category=="mens"){
        mens.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(mens)
    }
    else if(call_category=="womens"){
        Womens.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(Womens)
    }
    else if(call_category=="beauty"){
        beauty_products.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(beauty_products)
    }
    else if(call_category=="electronics"){
        electronics.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(electronics)
    }
    else if(call_category=="jewellery"){
        jewellery.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(jewellery)
    }
    else if(call_category=="kids"){
        kids.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(kids)
    }
    else if(call_category=="videogame"){
        videoGame_arr.sort(function(a,b){
            return b.price-a.price;
        })
        append_cat_data(videoGame_arr)
    }
    else{
        console.log("nothing");
    }
}



// low to high price functionality 
l_to_h.onclick = ()=>{
    if(call_category=="mens"){
        mens.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(mens)
    }
    else if(call_category=="womens"){
        Womens.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(Womens)
    }
    else if(call_category=="beauty"){
        beauty_products.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(beauty_products)
    }
    else if(call_category=="electronics"){
        electronics.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(electronics)
    }
    else if(call_category=="jewellery"){
        jewellery.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(jewellery)
    }
    else if(call_category=="kids"){
        kids.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(kids)
    }
    else if(call_category=="videogame"){
        videoGame_arr.sort(function(a,b){
            return a.price-b.price;
        })
        append_cat_data(videoGame_arr)
    }
    else{
        console.log("nothing");
    }
}


// more than 4000 functionality 
g_4000.onclick = ()=>{
    if(call_category=="mens"){
        let me_arr = mens.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="womens"){
        let me_arr = Womens.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="beauty"){
        let me_arr = beauty_products.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="electronics"){
        let me_arr = electronics.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="jewellery"){
        let me_arr = jewellery.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="kids"){
        let me_arr = kids.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="videogame"){
        let me_arr = videoGame_arr.filter(function(el){
            return el.price>4000
        })
        append_cat_data(me_arr)
    }
    else{
        console.log("nothing");
    }
}


// less than or equal to 4000 
l_4000.onclick = ()=>{
    if(call_category=="mens"){
        let me_arr = mens.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="womens"){
        let me_arr = Womens.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="beauty"){
        let me_arr = beauty_products.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="electronics"){
        let me_arr = electronics.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="jewellery"){
        let me_arr = jewellery.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="kids"){
        let me_arr = kids.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else if(call_category=="videogame"){
        let me_arr = videoGame_arr.filter(function(el){
            return el.price<=4000
        })
        append_cat_data(me_arr)
    }
    else{
        console.log("nothing");
    }
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