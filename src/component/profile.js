// import '../style/profile.css'

class Profile extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback(){

        this.render()
    }

    render(){

        this.innerHTML = `
            <aside>
                <div style="text-align: center">
                    <img class="avatar"
                         src="https://scontent.fsub6-2.fna.fbcdn.net/v/t1.0-1/p320x320/36990073_2095822724011545_8035866587997143040_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_eui2=AeGuct4kCFHOsn0r-KTBbqKAALiZFqaBmaxL1ke_BaPgpXFvemBt2_JEZfxtlX1pdcKXKxZlnxYTRWAojNurg1deRfXRII2pCOSIfA8_dOXBXQ&_nc_ohc=WUJc28cAAukAX86V-AG&_nc_ht=scontent.fsub6-2.fna&_nc_tp=6&oh=667277097de642d639992bedbef43906&oe=5E9B492B"
                         alt="renaldi pranta image"
                    />
                    <p>
                        <b style="color: #ff5483">Renaldi Pranata</b>
                    </p>
                </div>
                <div>
                    <p style="font-size: 13px;">
                        Experienced Web Developer with a demonstrated history of working in the information
                        technology and services industry. Skilled in Reactjs, React Native, Nodejs, and Internet of
                        Things. Strong engineering professional with a S.kom focused in Tehnik Informatika from
                        <b>STMIK KHARISMA Makassar</b>.
                    </p>
                </div>
            </aside>
        `
    }
}

customElements.define('profile-figure', Profile);
