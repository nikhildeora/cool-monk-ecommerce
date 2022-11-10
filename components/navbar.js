function navbar(){
    return `
    <div id="top">
                <a href="index.html"> <img
                        src="https://i.ibb.co/y5f2mND/Dark-Green-and-Marigold-Regular-Sports-Logo.png" alt="">
                </a>

                <div id="signin">
                    <button>LOGIN</button>
                    <button>SIGNUP</button>
                </div>
            </div>
            <div id="bottom">
                <div id="hamburger">
                    <button id="ddn"><i class="fa-solid fa-bars"></i>Categories</button>
                    <div id="categories">
                        <p> <a href="#" class="mens">MENS</a></p>
                        <p> <a href="#" class="womens">WOMEN'S</a> </p>
                        <p> <a href="#" class="kids">KIDS</a> </p>
                        <p> <a href="#" class="electronics">ELECTRONICS</a> </p>
                        <p> <a href="#" class="jewellery">JEWELLERY</a> </p>
                        <p> <a href="#" class="beauty">BEAUTY</a> </p>
                        <p> <a href="#" class="videogame">VIDEO GAMES</a> </p>
                    </div>
                </div>

                <div id="all">
                    <a href="#" class="mens">MENS</a>
                    <a href="#" class="womens">WOMENS</a>
                    <a href="#" class="kids">KIDS</a>
                    <a href="#" class="electronics">ELECTRONICS</a>
                    <a href="#" class="beauty">BEAUTY</a>
                    <a href="#" class="jewellery">JEWELLERY</a>
                    <a href="#" class="videogame">VIDEO GAMES</a>
                </div>
                <div id="cart">
                    <i id="cart_i" class="fa-solid fa-cart-shopping"></i>
                    <span id="cart_span">Cart</span>
                    <span id="cartitems">0</span>
                </div>
            </div>
     `
}

export default navbar