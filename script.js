const render = () => {
    const contenedor = document.querySelector("#cuadro");
contenedor.addEventListener("click", (event) => {
    console.log(event);
    alert("se hace click");
})

contenedor.addEventListener("mouseenter", () => {
    contenedor.classList.remove("contenedor");
    contenedor.classList.add("contenedorDos");
  
    
})
contenedor.addEventListener("mouseleave", () => {
    contenedor.classList.remove("contenedorDos");
    contenedor.classList.add("contenedor");
    
    
})

}
document.addEventListener("DOMContentLoaded", render);   //DOMContentLoaded es un evento que se activa cuando el documento HTML ha sido cargado completamente.
//. metimos todo lo que hicimos en un cost reder osea una funcion. 