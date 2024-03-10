var typed = new Typed('#typed', {
    strings: ['Prakash Magar', 'Web Devloper','Hero'],
    typeSpeed: 50,
    loop:true,
  });
  
// document.querySelector("#hello").style.backgroundColor="green";
  // test.style.color="red";
  // console.log(document.getElementById("hello").style.color="red");
  document.getElementById("left").addEventListener("click",function() {
    // console.log("clicked");
    // document.getElementById("info").style.color="red";
    document.querySelector(".feedback").scrollBy({
      left:-100,
      behavior:"smooth"
    })
  })

  document.getElementById("right").addEventListener("click",function() {
    // console.log("clicked");
    // document.getElementById("info").style.color="red";
    document.querySelector(".feedback").scrollBy({
      left : 100,
      behavior:"smooth"
    })
  })
  //form validation starts
  function validateForm(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var password1=document.getElementById("password1").value;
    // var name=document.getElementById("name").value;
    // var name=document.getElementById("name").value;
    if(name.length==0){
      document.getElementById("name-error").innerHTML="Name is required";
      return false;
    }
    else{
      document.getElementById("name-error").innerHTML="";
    }
    if(password.length==0 ){
      document.getElementById("password-error").innerHTML="Password is required";
      return false;
    }
    else{
      document.getElementById("password-error").innerHTML="";
    }
    if(password.length<5 ){
      document.getElementById("password-error").innerHTML="Password must be atleast 5";
      return false;
    }
    else{
      document.getElementById("password-error").innerHTML="";
    }
    if(password1.length==0 ){
      document.getElementById("password1-error").innerHTML=" Confirm Password is required";
      return false;
    }
    else{
      document.getElementById("password1-error").innerHTML="";
    }
    if(password!=password1)
    {
      document.getElementById("password1-error").innerHTML="Password must be same";
      return false;
    }
    else{
      document.getElementById("password1-error").innerHTML="";
    }hhb
  }