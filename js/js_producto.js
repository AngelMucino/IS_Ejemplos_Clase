// componente mejorado

const productos = [
    {nombre: "Escudo", precio: 20, img:"https://i.pinimg.com/736x/9a/0e/5d/9a0e5d586eaabeb908c3741f07289e41.jpg"},
    {nombre: "Gear of war", precio: 500, img:"https://cdn.gearsofwar.com/gearsofwar/sites/2/2024/05/GearsOfWar_thumbnail-664e4063714f1.png"},
    {nombre: "Halo", precio: 450, img:"https://store-images.s-microsoft.com/image/apps.11841.13531531932619944.82dbf3be-c184-4698-8305-d3e67ea97305.aea3a546-986c-46c1-af84-4ea543ac437f?q=90&w=480&h=270"},
    {nombre: "Galletas", precio: 50, img:"https://recetinas.com/wp-content/uploads/2019/09/galletas-de-chocolate-al-microondas-1.jpg"},
    {nombre: "Refresco", precio: 25, img:"https://www.mayoreototal.mx/cdn/shop/products/Captura_de_pantalla_2019-04-01_a_la_s_15.33.05_436x.png?v=1563808793"}, 
    {nombre: "Playera", precio: 2000, img: "https://site-product.innovasport.com/img-test/JN8612/JN8612_1-1200x1200.jpg"}
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});