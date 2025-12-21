async function getnewjoke(){

    const response=await fetch("https://official-joke-api.appspot.com/jokes/random");
    // console.log(response);

    const data=await response.json();
    // console.log(data);
    document.getElementById("setup").innerText=data.setup;
    document.getElementById("punchline").innerText=data.punchline;
}
async function getnewjoke1(){

    const response=await fetch("https://official-joke-api.appspot.com/jokes/random");

    const data=await response.json();
    document.getElementById("setup1").innerText=data.setup;
    document.getElementById("punchline1").innerText=data.punchline;
}