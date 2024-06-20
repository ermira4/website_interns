class rewardIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40.938" height="52.023" viewBox="0 0 40.938 52.023">
  <g id="Group_838" data-name="Group 838" transform="translate(-742.062 -1667.25)">
    <ellipse id="Ellipse_9" data-name="Ellipse 9" cx="16" cy="17" rx="16" ry="17" transform="translate(751 1669.58)" fill="#d0d0d0"/>
    <g id="award" transform="translate(743.812 1669)">
      <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="15.547" cy="15.547" rx="15.547" ry="15.547" transform="translate(0 0)" fill="none" stroke="#000517" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/>
      <path id="Path_15" data-name="Path 15" d="M9.667,13.9,7,33.979l11.019-6.612,11.019,6.612-2.667-20.1" transform="translate(-2.592 14.544)" fill="none" stroke="#000517" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/>
    </g>
  </g>
</svg>    
        `
    }
}

customElements.define('reward-icon', rewardIcon)


class artPiecesIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" width="45.215" height="42.256" viewBox="0 0 45.215 42.256">
  <g id="Group_19" data-name="Group 19" transform="translate(0)">
    <path id="Polygon_2" data-name="Polygon 2" d="M14,.893a2,2,0,0,1,2.393,0l12.859,9.6A2,2,0,0,1,29.96,12.7l-4.933,15.6a2,2,0,0,1-1.907,1.4H7.269a2,2,0,0,1-1.907-1.4L.429,12.7a2,2,0,0,1,.711-2.206Z" transform="translate(14.826 12.565)" fill="#d0d0d0"/>
    <g id="Polygon_1" data-name="Polygon 1" transform="translate(0)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18.862.895a2,2,0,0,1,2.395,0L38.981,14.141a2,2,0,0,1,.71,2.2L32.9,37.849a2,2,0,0,1-1.907,1.4H9.128a2,2,0,0,1-1.907-1.4L.428,16.345a2,2,0,0,1,.71-2.2Z" stroke="none"/>
      <path d="M 20.05935668945312 3.745182037353516 L 3.502365112304688 16.11865043640137 L 9.860464096069336 36.24658966064453 L 30.25825309753418 36.24658966064453 L 36.61634826660156 16.11864852905273 L 20.05935668945312 3.745182037353516 M 20.05935668945312 0.496795654296875 C 20.4804859161377 0.496795654296875 20.9016170501709 0.6294441223144531 21.25661659240723 0.8947372436523438 L 38.98105621337891 14.14066886901855 C 39.66234588623047 14.64980888366699 39.94709777832031 15.53412818908691 39.69091796875 16.34514808654785 L 32.89818572998047 37.84901809692383 C 32.6353759765625 38.68098831176758 31.86357688903809 39.24658966064453 30.9910774230957 39.24658966064453 L 9.127635955810547 39.24658966064453 C 8.255136489868164 39.24658966064453 7.483325958251953 38.68098831176758 7.220527648925781 37.84901809692383 L 0.42779541015625 16.34514808654785 C 0.1716079711914062 15.53413772583008 0.4563674926757812 14.64980888366699 1.137657165527344 14.14066886901855 L 18.86209678649902 0.8947372436523438 C 19.21709632873535 0.6294441223144531 19.63822746276855 0.496795654296875 20.05935668945312 0.496795654296875 Z" stroke="none" fill="#000517"/>
    </g>
  </g>
</svg>
    
        `
    }
}

customElements.define('art-pieces-icon', artPiecesIcon)


class materialsIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="51.082" height="45.099" viewBox="0 0 51.082 45.099">
  <g id="Group_839" data-name="Group 839" transform="translate(-1390.634 -1668.5)">
    <g id="feather" transform="translate(1406.932 1676.9)">
      <path id="Path_18" data-name="Path 18" d="M27.869,16.851C31.045,9.664,30.53-.924,31.195-2.878S19.046-2.335,11.864.846,2.32,6.384-.861,13.571s-4.006,12.018,0,16.024,8.841,3.186,16.024,0S24.692,24.038,27.869,16.851Z" transform="translate(3.565 3.568)" fill="#d0d0d0"/>
    </g>
    <g id="feather-2" data-name="feather" transform="translate(1392.755 1670)">
      <path id="Path_18-2" data-name="Path 18" d="M30.024,18.228c3.391-7.672,2.84-18.974,3.55-21.059S20.607-2.252,12.94,1.144,2.753,7.055-.643,14.726s0,17.1,0,17.1,9.437,3.4,17.1,0S26.633,25.9,30.024,18.228Z" transform="translate(6.463 3.568)" fill="none" stroke="#000517" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <line id="Line_9" data-name="Line 9" x1="13.694" y2="13.694" transform="translate(0 27.784)" fill="none" stroke="#000517" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </g>
</svg>
    
        `
    }
}

customElements.define('materials-icon', materialsIcon)

class vectorHeartIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24.609" height="22.348" viewBox="0 0 24.609 22.348">
  <path id="Vector" d="M20.865,1.8A5.94,5.94,0,0,0,18.935.468a5.779,5.779,0,0,0-4.554,0A5.94,5.94,0,0,0,12.451,1.8L11.3,2.982,10.158,1.8a5.821,5.821,0,0,0-8.415,0,6.279,6.279,0,0,0,0,8.683l1.146,1.183L11.3,20.348l8.415-8.683,1.146-1.183a6.155,6.155,0,0,0,1.29-1.992,6.319,6.319,0,0,0,0-4.7A6.155,6.155,0,0,0,20.865,1.8Z" transform="translate(1 1)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>

        `
    }
}

customElements.define('vector-heart-icon', vectorHeartIcon)

class backIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="80" viewBox="0 0 42 80">
  <text id="_" data-name="&lt;" transform="translate(0 65)" fill="#707070" font-size="60" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">&lt;</tspan></text>
</svg>

        `
    }
}

customElements.define('back-icon', backIcon)

class forwardIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="80" viewBox="0 0 42 80">
  <text id="_" data-name="&gt;" transform="translate(0 65)" fill="#707070" font-size="60" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">&gt;</tspan></text>
</svg>

        `
    }
}

customElements.define('forward-icon', forwardIcon)