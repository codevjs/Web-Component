class AppBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){

        this.render();
    }

    render(){
        this.innerHTML = `
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
