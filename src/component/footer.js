class Footer extends HTMLElement {

    constructor() {
        super();

        this._shadowDOM = this.attachShadow({mode : "open"});
    }

    connectedCallback(){

        this.render();
    }

    render(){
        this._shadowDOM.innerHTML = `
                <!--    style     -->
                <link rel="stylesheet" type="text/css" href="src/style/footer.css" />
                
                <footer>
                     <div class="footer-text">
                        <div class="container">
                            <p>copyright © Renaldi Pranata</p>
                        </div>
                    </div>
                </footer>
        `
    }
}

customElements.define('footer-content', Footer);
