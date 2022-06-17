function navbar(){
    return `
    <div id="nav-div-1">
            <div id="email12">EMAIL SIGN UP</div>
            <div id="bobbi-brown"><a href="index.html">BOBBI BROWN</a></div>
            <div id="nav-user">
                <a href="location.html"><i class="fa-solid fa-location-pin" style="color: white;"></i></a>
                <a href="signup.html"><i class="fa-regular fa-user" style="color: white;"></i></a>
                <a href="bag.html"><i class="fa-solid fa-bag-shopping" style="color: white;"></i></a>
            </div>
        </div>
        <div id="nav-div-2">
            <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="search" placeholder="SEARCH">
            </div>
            <div id="nav-options">
                <p><a id="nav-opts" href="new.html">NEW</a></p>
                <p><a id="nav-opts" href="">FAVORITES</a></p>
                <p><a id="nav-opts" href="">MAKEUP</a></p>
                <p><a id="nav-opts" href="">SKIN CARE</a></p>
                <p><a id="nav-opts" href="">MINI BAR</a></p>
                <p><a id="nav-opts" href="offers.html">OFFERS</a></p>
                <p><a id="nav-opts" href="virtual.html">VIRTUAL SERVICES</a></p>
                <p><a id="nav-opts" href="">DISCOVER</a></p>
            </div>
        </div>
    `;
}

export default navbar;