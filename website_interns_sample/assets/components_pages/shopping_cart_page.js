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