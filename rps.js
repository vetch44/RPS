const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const wynik = document.getElementById('rps');
const ty = document.getElementById("ty");
const SI = document.getElementById("SI");
const remis = document.getElementById("rem");
const gra = document.getElementById("gra");
const rez = document.getElementById("rez");
const rewanz = document.getElementById("retry");
const rezultat = document.getElementById("wynik");

const wybor = [
"Rock",
"Paper",
"Scissors"
]

let mwy = 0;
let czw = 0;

ty.innerText=mwy;
SI.innerText=czw;

rock.addEventListener("click", kam = () => {let kami =wybor[Math.floor(Math.random()*wybor.length)]
remis.classList.add("hide");
wynik.innerText = kami;
if(mwy>=3){
    gra.classList.add("hide")
    rezultat.classList.remove("hide")
    rez.innerText = "Wygrałeś"}
else if(czw>=3){
    gra.classList.add("hide")
    rezultat.classList.remove("hide")
    rez.innerText = "Przegrałeś"}
else if(kami==="Scissors"){mwy+=1
    wynik.innerHTML = "<img src=\"noze.jpg" + "\">"}
else if (kami==="Paper"){czw+=1
    wynik.innerHTML = "<img src=\"pap.jpg" + "\">"}
else if (kami==="Rock"){remis.classList.remove("hide")
wynik.innerHTML = "<img src=\"kam.jpg" + "\">"}

ty.innerText=mwy;
SI.innerText=czw;

})
paper.addEventListener("click", pap = () => {let papi =wybor[Math.floor(Math.random()*wybor.length)]
    remis.classList.add("hide");
    //wynik.innerText = papi;
    
    if(mwy>=3){
        rez.innerText = "Wygrałeś"
        gra.classList.add("hide")
        rezultat.classList.remove("hide")}
    else if(czw>=3){
        gra.classList.add("hide")
        rezultat.classList.remove("hide")
        rez.innerText = "Przegrałeś"    }
    else if(papi==="Rock"){mwy+=1
        wynik.innerHTML = "<img src=\"kam.jpg" + "\">";}
    else if (papi==="Scissors"){czw+=1
        wynik.innerHTML = "<img src=\"noze.jpg" +"\">";}
    else if (papi==="Paper"){remis.classList.remove("hide")
    wynik.innerHTML ="<img src=\"pap.jpg" + "\">";}

    ty.innerText=mwy;
    SI.innerText=czw;
    })
scissors.addEventListener("click", noz = () => {let nozy =wybor[Math.floor(Math.random()*wybor.length)]
    remis.classList.add("hide");
    wynik.innerText = nozy;
    if(mwy>=3){
        gra.classList.add("hide")
        rezultat.classList.remove("hide")
        rez.innerText = "Wygrałeś"}
    else if(czw>=3){
            rez.innerText = "Przegrałeś"
            gra.classList.add("hide")
            rezultat.classList.remove("hide")}
    else if(nozy==="Paper"){mwy+=1
        wynik.innerHTML = "<img src=\"pap.jpg" + "\">"}
    else if (nozy==="Rock"){czw+=1
        wynik.innerHTML = "<img src=\"kam.jpg" + "\">"}
    else if (nozy==="Scissors"){
        remis.classList.remove("hide")
            wynik.innerHTML = "<img src=\"noze.jpg" + "\">"}
    ty.innerText=mwy;
    SI.innerText=czw;
    })
    rewanz.addEventListener("click", rew = () => {
        mwy=0;
        czw=0; 
        wynik.innerHTML = ""
        gra.classList.remove("hide");
        rezultat.classList.add("hide");
        ty.innerText=mwy;
        SI.innerText=czw;
    })