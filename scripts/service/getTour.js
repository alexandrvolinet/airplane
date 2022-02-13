const URL_API = '/json/airplane.json';

const getData = () => fetch(URL_API)
    .then((response) => {
        if (response.ok) {
           return response.json();
        }
        throw new Error(response.status);
    })
    .catch((err) => {console.error(err)});

export default getData;