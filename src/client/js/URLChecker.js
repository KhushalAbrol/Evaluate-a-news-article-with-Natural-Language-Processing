function checkForURL(url) {
    var expression = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/; 
     
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
