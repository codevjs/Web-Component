class DataSource {

    static get(){

        return fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(response => {

                return response.json()
            })
            .then(result => {

                return Promise.resolve(result);
            })
    }

}

export default DataSource
