function navbar(){
    return `
    <div id="top">
                <a href="index.html"> <img
                        src="https://i.ibb.co/y5f2mND/Dark-Green-and-Marigold-Regular-Sports-Logo.png" alt="">
                </a>

                <div id="signin">

                <div id="username_logout_homePage_div">
                 <h3 id="Username_onHomePage"></h3>
                <button id="homePage_logout_btn">Log out</button>
                 </div>
                 <div id="signup_login_homePage_div">
                  <a id="homePage_login_btn" href="login.html"><button>LOGIN</button></a>
                <a id="homePage_signup_btn" href="signup.html"><button>SIGNUP</button></a> 
                </div>  
                    
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
                        <p> <a href="#" class="videogame">VIDEOGAME</a> </p>
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
                <a id="cart_href" href="cart.html">
                <div id="cart">
                    <i id="cart_i" class="fa-solid fa-cart-shopping"></i>
                    <span id="cart_span">Cart</span>
                    <span id="cartitems">0</span>
                </div>
                </a>
                
            </div>
     `
}

export default navbar