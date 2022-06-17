function footer(){
    return `
    <div id="ft-box">
        <div id="ft-div">
            <h2 id="h2">NEED HELP?</h2>
            <P id="p">Chat with an Artist</P>
            <P id="p">Text an Artist</P>
            <P id="p">Call Us(877)-310-9222</P>
            <P id="p">Shipping & Returns</P>
            <P id="p">FAQS</P>
            <P id="p">Careers</P>
            <select name="" id="ft-country">
                <option value="">CHOOSE LOCATION</option>
                <option value="">ARGENTINA</option>
                <option value="">AUSTRALIA</option>
                <option value="">AUSTRIA</option>
                <option value="">BLEGIUM</option>
                <option value="">CANADA</option>
                <option value="">CHILE</option>
                <option value="">FRANCE</option>
                <option value="">GERMANY</option>
                <option value="">GREECE</option>
                <option value="">INDIA</option>
                <option value="">ISRAEL</option>
                <option value="">ITALY</option>
                <option value="">JAPAN</option>
                <option value="">MALAYSIA</option>
                <option value="">RUSSIA</option>
                <option value="">UNITED STATES</option>
            </select>
        </div>
        <div id="ft-div">
            <h2 id="h2">MY BOBBI BROWN</h2>
            <P id="p">BB Access</P>
            <P id="p">My Account</P>
            <P id="p">My Orders</P>
            <P id="p">Store Locator</P>
        </div>
        <div id="ft-div">
            <input type="text" id="email" placeholder="ENTER YOUR EMAIL">
            <BR></BR>
            <input type="text" id="mobile" placeholder="ENTER YOUR MOBILE PHONE">
            <BR></BR>
            <BUTTON id="ft-submit">SUBMIT</BUTTON>
            <div id="ft-follow-div">
                <h2 id="h2">FOLLOW US</h2>
                <div id="ft-logo-div">
                    <i id="i" class="fa-brands fa-facebook-f fa-2x"></i>
                    <i id="i" class="fa-brands fa-twitter fa-2x"></i>
                    <i id="i" class="fa-brands fa-youtube fa-2x"></i>
                    <i id="i" class="fa-brands fa-instagram-square fa-2x"></i>
                    <i id="i" class="fa-brands fa-pinterest-square fa-2x"></i>
                </div>
            </div>
        </div>
    </div>
    <div id="ft-box2">
        <span>© Bobbi Brown Professional Cosmetics, Inc. All worldwide rights reserved.</span>
        <div id="ft-side">
            <div>
                <p id="p">Terms & Conditions</p>
                <p id="p">California Do Not Sell My Personal Information</p>
                <p id="p">Accessibility</p>
            </div>
            <div>
                <p id="p">Interest Based Ads</p>
                <p id="p">Privacy Policy</p>
            </div>
        </div>
    </div>
    `;
}

export default footer;