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

    regiData(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": "4",
            "pw": "1234",
            "age": "5",
            "name": "abcccc",
            "phone": "234",
            "email": "222@naver.com"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/regiUser2", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    putData(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": "4",
            "pw": "1234",
            "age": "5",
            "name": "abcccc_toto",
            "phone": "234",
            "email": "222@naver.com"
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/updateUser2/3", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    delUser(){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/delUser/3", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    login(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": "4",
            "pw": "1234"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/loginDo", requestOptions)
            .then(response => response.text())
            .then(result => {
                    console.log(result);
                    localStorage.setItem("token", result);
                }
            )
            .catch(error => console.log('error', error));
    }
}