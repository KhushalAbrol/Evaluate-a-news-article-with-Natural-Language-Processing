function checkForURL(url) {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/; 
    var regex = new RegExp(expression); 
    console.log("::: Running checkForURL :::", url);

    if(regex.test(url)){
        console.log("1,2,3 Valid")
        return true;
    }
    else{
        console.log("Not Valid")
        return false}
}

export { checkForURL }
