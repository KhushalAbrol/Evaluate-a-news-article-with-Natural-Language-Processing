function handleSubmit(event) {
    event.preventDefault()  
    //Putting Entered url into a variable
    const url=document.getElementById('url').value;
   // console.log(url);
   //checking if url is valid or not
    if(Client.checkForURL(url)){
        //if valid post url to server
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/add',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({URL:url})   
        })
        //then take response and display to screen
        .then(res => res)
        .then(function(res) {
            document.getElementById('polarity').innerHTML = res.polarity
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('text').innerHTML = res.text
        })
}}
export { handleSubmit }
