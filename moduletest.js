export default class Test1{
    getData() {

        var requestOptions = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            redirect: 'follow'
        };

        fetch("http://localhost:8080/getUser", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}