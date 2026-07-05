const textos = [
    "Desarrollador Web",
    "Backend Developer",
    "Software Developer",
    "Estudiante de Ingeniería"
];

let indiceTexto = 0;
let indiceLetra = 0;
let escribiendo = true;

const typing = document.getElementById("typing");

function maquinaEscribir() {
    const textoActual = textos[indiceTexto];
    if (escribiendo) {
        typing.textContent = textoActual.substring(0, indiceLetra++);
        if (indiceLetra > textoActual.length) {
            escribiendo = false;
            setTimeout(maquinaEscribir, 1800);
            return;
        }
    } else {
        typing.textContent = textoActual.substring(0, indiceLetra--);
        if (indiceLetra < 0) {
            escribiendo = true;
            indiceTexto++;
            if (indiceTexto >= textos.length) {
                indiceTexto = 0;
            }
        }
    }
    setTimeout(maquinaEscribir, escribiendo ? 90 : 50);
}

maquinaEscribir();

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scroll");
    }else{
        header.classList.remove("scroll");
    }
});

const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider=>{

    const slides = slider.querySelectorAll(".slide");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let index = 0;

    function showSlide(i){
        slides.forEach(s=>s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.addEventListener("click",()=>{
        index++;
        if(index>=slides.length){
            index=0;
        }
        showSlide(index);
    });

    prev.addEventListener("click",()=>{
        index--;
        if(index<0){
            index=slides.length-1;
        }
        showSlide(index);
    });
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }
});