$(document).ready(function(){
    console.log("ready");
    var regexUser = /^[A-Za-z0-9]{8,15}$/;
    var userName = document.getElementById("input1");
    
    var Img = document.getElementById("input2");
    var regexImg = /(jpg|pnq|gif)$/;
    
    var Movie = document.getElementById("input3");
    var regexMovie = /[A-Za-z ]$/;
    
    var Commet = document.getElementById("input4");
    var regexCommet =/^[A-Za-z ,.?!]{0,100}$/;
    
    var submitButton = document.getElementById("submit");
    
    var userInput = document.getElementById("input1");
    var userImg = document.getElementById("input2");
    var userMovieinput = document.getElementById("input3");
    var userComment = document.getElementById("input4");
    
    
    
    
    userName.onkeyup = function(){
        console.log(regexUser.test(userName.value));
        if(regexUser.test(userName.value)){
            userName.style.backgroundColor="gray";
        }else{
            userName.style.backgroundColor="red";
        }
    }
    Img.onkeyup = function(){
        console.log(regexImg.test(Img.value));
        if(regexImg.test(Img.value)){
            Img.style.backgroundColor="gray";
        }else{
            Img.style.backgroundColor="red";
        }
    }
    Movie.onkeyup = function(){
        console.log(regexMovie.test(Movie.value));
        if(regexMovie.test(Movie.value)){
            Movie.style.backgroundColor="gray";
        }else{
            Movie.style.backgroundColor="red";
        }
    }
    Commet.onkeyup = function(){
        console.log(regexCommet.test(Commet.value));
        if(regexCommet.test(Commet.value)){
            Commet.style.backgroundColor="gray";
        }else{
            Commet.style.backgroundColor="red";
        }
    }
    submitButton.onclick = function(){
        $.ajax({
        url:"http://www.omdbapi.com/?s="+userMovieinput.value,
        datatype:"jsonp",
        success:function(resp){
            console.log(resp);
            var posterDiv = document.createElement("img");
            newDiv.appendChild(posterDiv);
            posterDiv.src=resp.Search[0].Poster;
            posterDiv.style.width="100px";
            posterDiv.style.height="100px";
            posterDiv.style.position="absolute";
            posterDiv.style.right="52px";
            posterDiv.style.marginTop="-70px";
            posterDiv.style.borderRadius="50%";
        }
    })
        var newBigDiv= document.createElement("div");
        document.body.appendChild(newBigDiv);
        newBigDiv.style.width="93%";
        newBigDiv.style.height="180px";
        newBigDiv.style.marginTop="70px";
        newBigDiv.style.marginLeft="50px";
        
        
        var newDiv= document.createElement("div");
        newBigDiv.appendChild(newDiv);
        newDiv.style.width="93%";
        newDiv.style.height="120px";
        newDiv.style.marginTop= '70px';
        newDiv.style.marginLeft='50px';
        newDiv.style.backgroundColor="aquamarine";
        var commentDiv = document.createElement("div");
        var text = document.createTextNode(userComment.value);
        commentDiv.style.textAlign="center";
        commentDiv.style.fontSize="200%";
        commentDiv.appendChild(text);
        newDiv.appendChild(commentDiv);
        commentDiv.style.marginLeft="50px";
      
        
        var userDiv = document.createElement("div");
        newDiv.appendChild(userDiv);
        userDiv.style.width="200px";
        userDiv.style.height="100px";
        userDiv.style.position="absolute";
        userDiv.style.right="52px";
        userDiv.style.marginTop="70px";
        userDiv.style.backgroundColor="cornsilk";
        userDiv.style.borderRadius="10%";
        userDiv.style.textAlign="center";
        userDiv.style.fontSize="170%";
        userDiv.innerHTML=userInput.value;
        
        var imgDiv = document.createElement("img");
        newDiv.appendChild(imgDiv);
        imgDiv.style.width="80px";
        imgDiv.style.height="80px";
        imgDiv.style.position="absolute";
        imgDiv.style.marginTop="-40px";
        imgDiv.style.marginLeft="-40px";
        imgDiv.src=userImg.value;
        
        
        
    }
    
    
})