function Login()
{
    // to fetch data and send to back end 
    console.log("Login Button Clicked");
    const email=document.getElementById("loginemail").value;
    console.log("Email "+email);
     const password=document.getElementById("loginpassword").value;
    console.log("Password  "+password);

    // after clicking button to empty the data 
    document.getElementById("loginemail").value="";
    document.getElementById("loginpassword").value="";
}
function registration(){
    console.log("Registration button clicked");
    const regname=document.getElementById("regname").value;
    console.log("Name :"+regname);
    const regemail=document.getElementById("regemail").value;
    console.log("Email :"+regemail);
    const regpassword=document.getElementById("regpassword").value;
    console.log("Password"+regpassword);
    const regconfirmpassword=document.getElementById("regconfirmpassword").value;
    console.log("Confirm password"+regconfirmpassword);

     document.getElementById("regname").value="";
      document.getElementById("regemail").value="";
       document.getElementById("regpassword").value="";
        document.getElementById("regconfirmpassword").value="";
}