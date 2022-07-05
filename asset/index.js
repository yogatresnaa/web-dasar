
let span = document.getElementsByTagName('span');
let div = document.getElementsByTagName('div');
let l=0;
span[1].onclick = ()=>{
    l++;
    for(let i of div)
    {
        if(l==0){i.style.left = "0px";}
        if(l==1){i.style.left = "-310px";}
        if(l==2){i.style.left = "-800px";}
        if(l==3){i.style.left = "-1000px";}
        if(l>3){l=3;}
    }
}

span[0].onclick = ()=>{
    l--;
    for(let i of div)
    {
        if(l==0){i.style.left = "0px";}
        if(l==1){i.style.left = "-300px";}
        if(l==2){i.style.left = "-600px";}
        if(l<0){l=0;}
    }
}