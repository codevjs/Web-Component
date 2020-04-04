class AppBar extends HTMLElement {

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
                <link rel="stylesheet" type="text/css" href="src/style/app-bar.css" />
               
                <nav>
                    <section class="container">
                        <img 
                            src="https://dicodingassets.azureedge.net/original/commons/new-ui-logo.png"
                            alt="Renaldi Pranata"
                        />
                    </section>
                </nav>
        `
    }
}

customElements.define('app-bar', AppBar);
