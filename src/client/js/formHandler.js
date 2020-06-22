/* import {checkForURL} from './URLChecker' */
function handleSubmit(event) {
    event.preventDefault()  
    /*if(Client.checkForURL(JSON.parse(JSON.stringify(url)))){ */
    // check what text was put into the form field
    const url=document.getElementById('url').value;
    console.log(url);
    if(Client.checkForURL(url)){
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/add',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({URL:url})   
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.polarity
        })
}
}
export { handleSubmit }
