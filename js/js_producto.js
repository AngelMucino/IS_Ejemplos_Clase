// componente mejorado

const productos = [
    {nombre: "escudo", precio: 20, img:"https://images.cults3d.com/FAW5o_8cX5X1SjMUJyUmvQZdNzA=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/34498706/illustration-file/a3bb75f8-4f46-4acc-8c86-676f19eaa08e/Captura-de-pantalla-2025-09-09-160749.png"},
    {nombre: "escudo", precio: 20, img:"https://images.cults3d.com/FAW5o_8cX5X1SjMUJyUmvQZdNzA=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/34498706/illustration-file/a3bb75f8-4f46-4acc-8c86-676f19eaa08e/Captura-de-pantalla-2025-09-09-160749.png"},
    {nombre: "escudo", precio: 20, img:"https://images.cults3d.com/FAW5o_8cX5X1SjMUJyUmvQZdNzA=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/34498706/illustration-file/a3bb75f8-4f46-4acc-8c86-676f19eaa08e/Captura-de-pantalla-2025-09-09-160749.png"},
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

    contenedor.appendChild(card);
});