let btn=document.getElementById("btn");
let jokes=document.getElementById("jokes")
let preloder=document.querySelector('#span');

const generadJoks = () => {

    const setHeader = () =>{
        headers:{
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com/slack', setHeader)
    .then((res)=>(res.json()))
    .then((data)=>{jokes.innerHTML=data.attachments[0].fallback
    })
    .catch((err)=>{
        console.log(err);
    })
}

btn.addEventListener("click",generadJoks);
generadJoks();

window.addEventListener("load",()=>{
    preloder.style.display="none";
})