class myFooter extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <footer>
        <h1 class="footerHeading">LOGO</h1>
        <section class="footerSection">
            <div>
               <h3>Kontakti</h3>
               <p>Rr.Ukshin Hoti,#33,
                Prishtinë,Kosovë
               </p>
               <p>info@kujtesa.com</p>
               <p>038400400</p>
               <p>080040040</p>
            </div>
            <div>
                 <h3>Resident</h3>
                 <p>Pako Hero</p>
                 <p>Pako Super Hero</p>
                 <p>Pako Mega Hero</p>
            </div>
            <div>
                <h3>Biznis</h3>
                <p>Pako Standard</p>
                <p>Pako Pro</p>
                <p>Pako Ultra</p>
            </div>
            <div>
                <h3>Internet</h3>
                <p>Resident</p>
                <p>Biznis</p>
                <p>Dedikuar</p>
            </div>
            <div>
                <h3>Social Media</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Linkedin</p>
            </div>
            <div>
                <h3>Linqe Tjera</h3>
                <p>Pyetjet e shpeshta</p>
                <p>Kushtet e përdorimit</p>
                <p>Privacy Policy</p>
            </div>
        </section>
        <div class="line"></div>
        <h4 class="copyrightHeading">@All Rights Reserved, 2019</h4>
    </footer>    
        `
    }
}

customElements.define('my-footer', myFooter)