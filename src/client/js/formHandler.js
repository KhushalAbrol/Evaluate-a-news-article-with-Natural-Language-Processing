import {checkForURL} from './URLChecker'




function handleSubmit(event) {
    event.preventDefault()
    

    // check what text was put into the form field
    const url=document.getElementById('url').value;
    Client.checkForURL(url)
    console.log(url);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/add',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({url})   
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
