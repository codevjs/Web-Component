import '../component/article-list.js';
import DataSource from "../data/data-source.js";


const home = async () => {

    const articleItem = document.querySelector('article-list');

    const renderRestut = async () => {

        articleItem.articles =  await DataSource.get()
    };

    return  renderRestut();
};

export default home;


