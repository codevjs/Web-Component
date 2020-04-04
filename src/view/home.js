import '../component/article-list.js';

const data = [
    {
        image: 'https://www.dicoding.com/blog/wp-content/uploads/2020/03/Blog-Apa_Pentingnya_SEO_untuk_Developer_dan_Apa_Hubungannya_Dengan_Developer.png',
        title: 'Apa Pentingnya SEO untuk Developer? Apa pula Hubungan SEO dengan Developer?',
        description: `Apa Pentingnya SEO untuk Developer? Apa pula Hubungan SEO dengan Developer? Halo
                           teman-teman, Sering kan dengar istilah “SEO?” Tapi sebenarnya apa SEO itu sih? Apa
                           pentingnya SEO? Sederhananya ...`
    },
    {
        image: 'https://www.dicoding.com/blog/wp-content/uploads/2020/03/Blog-Apa_Pentingnya_SEO_untuk_Developer_dan_Apa_Hubungannya_Dengan_Developer.png',
        title: 'Apa Pentingnya SEO untuk Developer? Apa pula Hubungan SEO dengan Developer?',
        description: `Apa Pentingnya SEO untuk Developer? Apa pula Hubungan SEO dengan Developer? Halo
                           teman-teman, Sering kan dengar istilah “SEO?” Tapi sebenarnya apa SEO itu sih? Apa
                           pentingnya SEO? Sederhananya ...`
    },
    {
        image: 'https://www.dicoding.com/blog/wp-content/uploads/2020/03/Blog-Apa_Pentingnya_SEO_untuk_Developer_dan_Apa_Hubungannya_Dengan_Developer.png',
        title: 'Apa Pentingnya SEO untuk Developer? Apa pula Hubungan SEO dengan Developer?',
        description: `Apa Pentingnya SEO untuk Developer? Apa pula Hubungan SEO dengan Developer? Halo
                           teman-teman, Sering kan dengar istilah “SEO?” Tapi sebenarnya apa SEO itu sih? Apa
                           pentingnya SEO? Sederhananya ...`
    }
];

const home = () => {

    const articleItem = document.querySelector('article-list');
    articleItem.articles = data;


};

export default home;


