class heartIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25.48" height="22.416" viewBox="0 0 25.48 22.416">
                <path id="heart_2_" data-name="heart(2)" d="M23.68,4.847a6.31,6.31,0,0,0-8.925,0L13.538,6.063,12.322,4.847A6.311,6.311,0,0,0,3.4,13.772l1.216,1.216,8.925,8.925,8.925-8.925,1.216-1.216a6.31,6.31,0,0,0,0-8.925Z" transform="translate(-0.799 -2.248)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
              </svg>      
        `
    }
}

customElements.define('heart-icon', heartIcon)


class loginIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="19.845" height="21.993" viewBox="0 0 19.845 21.993">
                <g id="user_2_" data-name="user(2)" transform="translate(0.75 0.75)">
                  <path id="Path_710" data-name="Path 710" d="M22.345,21.879V19.586A4.586,4.586,0,0,0,17.759,15H8.586A4.586,4.586,0,0,0,4,19.586v2.293" transform="translate(-4 -1.387)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                  <circle id="Ellipse_19" data-name="Ellipse 19" cx="4.314" cy="4.314" r="4.314" transform="translate(4.868 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </g>
              </svg>      
        `
    }
}

customElements.define('login-icon', loginIcon)


class bagIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="23.443" height="21.005" viewBox="0 0 23.443 21.005">
                <g id="shopping-bag_1_" data-name="shopping-bag(1)" transform="translate(0.75 0.75)">
                  <path id="Path_1" data-name="Path 1" d="M3,6V23.067a2.438,2.438,0,0,0,2.438,2.438H22.505a2.438,2.438,0,0,0,2.438-2.438V6H3Z" transform="translate(-3 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                  <path id="Path_2" data-name="Path 2" d="M17.753,10A4.876,4.876,0,0,1,8,10" transform="translate(-1.905 -5.124)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </g>
              </svg>     
        `
    }
}

customElements.define('bag-icon', bagIcon)


class myHeader extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
           <header>
        
        <div>
            <h1 class="logoHeading">LOGO</h1>
        </div>
        <div class="navbar">
            <div class="burgerMenu" id="burgerMenu">
                <span class="burgerIcon">&#9776;</span>
                <span class="closeIcon">&times;</span>
            </div>
        </div>
            <nav>
                <div class="sideBar" id="sideBar">
                   <ul class="navList">
                        <li><a href="../home_page/home_page.html">Home</a></li>
                        <li>About</li>
                        <li><a href="../product_page/product_page.html">Products</a></li>
                        <li><a href="../contact_page/contact_page.html">Contact</a></li>
                    </ul>
                </div>
                
               <ul class="navList">
                    <li class="hideMenu"><a href="../home_page/home_page.html">Home</a></li>
                    <li class="hideMenu">About</li>
                    <li class="hideMenu"><a href="../product_page/product_page.html">Products</a></li>
                    <li class="hideMenu"><a href="../contact_page/contact_page.html">Contact</a></li>
                </ul>
            
            </nav>
            <div class="navBarSvg">
                <div>
                    <heart-icon></heart-icon>
                </div>
                <div>
                    <login-icon></login-icon>
                </div>
                <div>
                    <bag-icon></bag-icon>
                </div>
            </div>
        </div>
    </header>
        `
    }
}

customElements.define('my-header', myHeader)





