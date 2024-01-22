var TextStyle=document.querySelector('#text-change');

const load= ()=>{
    setTimeout(()=>{
        TextStyle.textContent="Developpeur web";
        TextStyle.classList.add('text-decoration');
    },0)

    setTimeout(()=>{
        TextStyle.textContent="Web design";
        TextStyle.classList.add('text-decoration');
    },4000)

    setTimeout(()=>{
        TextStyle.textContent="Data Analyst";
        TextStyle.classList.add('text-decoration');
    },8000)  //1S =1000ms
}

setInterval(load(),12000);