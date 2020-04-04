 class ArticleList extends HTMLElement {

    constructor() {
        super();

        this._shadowDOM = this.attachShadow({mode : "open"});
        this._articles = []
    }

    // Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM).
    // Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data,
    // atau mengatur attribute.

    connectedCallback() {

        this.render();
    }

    set articles(articles) {

        this._articles = articles;

        this.render()
    }

    render() {

        const element = this._articles.map(item => (`
            <!--    style     -->
            <link rel="stylesheet" type="text/css" href="src/style/article.css" />
            
            <article>
                <div class="article-image">
                    <img 
                         src="${item.image}"
                         alt="${item.title}"
                    />
                </div>
                <div class="article-content">
                    <h4>${item.title}</h4>
                    <p>
                       ${item.description}
                    </p>
                </div>
            </article>
        `));

        this._shadowDOM.innerHTML = element.join('<br/>')
    }
}

customElements.define("article-list", ArticleList);
