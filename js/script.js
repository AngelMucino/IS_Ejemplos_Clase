const x = 10;
console.log(x);

// iteraciones
const cielo = document.getElementById("cielo");

for(let i=0; i<5; i++){
    cielo.innerHTML += "⭐";
}

const planetas = ["🌍", "🪐", "🌕"];

for(const planeta of planetas){
    cielo.innerHTML += planeta;
}

let n = 0;  
while(n<5){
    cielo.innerHTML += "☁️";
    n++;
}

let m = 0;
do{
    cielo.innerHTML += "🚀";
    m++;
}while(m<4)

// eventos
// click
const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click", ()=> {
    cielo.innerHTML += "⭐";
})
// doble click
const btnPlaneta = document.getElementById("btnPlaneta");

btnPlaneta.addEventListener("dblclick", ()=>{
    cielo.innerHTML += "🪐";
})

const inputEmoji = document.getElementById("inputEmoji");

const btnAgregarEmoji = document.getElementById("btnAgregarEmoji");

btnAgregarEmoji.addEventListener("click", ()=>{
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo.innerHTML += emoji;
    inputEmoji.value = "";
})

inputEmoji.addEventListener("keydown", e =>{  //keydown (pulsas y funciona); keyup (pulsas, sueltas y funciona)
    if(e.key==="Escape") cielo.innerHTML = "";
})

// componente mejorado

const productos = [
    {nombre: "escudo", precio: 20, img:"https://images.cults3d.com/FAW5o_8cX5X1SjMUJyUmvQZdNzA=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/34498706/illustration-file/a3bb75f8-4f46-4acc-8c86-676f19eaa08e/Captura-de-pantalla-2025-09-09-160749.png"},
    {nombre: "playera", precio: 2000, img: "https://site-product.innovasport.com/img-test/JN8612/JN8612_1-1200x1200.jpg"}
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}>
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;
})
