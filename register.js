document.getElementById('submit').onclick=function(){
    if(document.getElementById('name')==""){
        alert("Fill out the missing fields");
    }
    else{
        console.log("Done");
    }
}