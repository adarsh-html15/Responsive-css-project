const slides = [
    "wallpaper.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGVC5VbFZ2UJahHyqeTOcXZ2ZlwtKLCjmSVYCwYyaSA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxerGCLpd9HaIQmAu8GwIZc6QcACHCi90QxO_Gg1xjXA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwU-XjLEkCfTQ1nYaQqTEWEX3_Hyuq1THGWOVC8zousEsCumiOT_43r80&s=10"
];

const layers = document.querySelectorAll(".hero-background");

if (layers.length === 2 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let active = 0;
    let slide = 1;
    layers[0].style.backgroundImage = `url("${slides[0]}")`;
    layers[1].style.backgroundImage = `url("${slides[1]}")`;

    window.setInterval(() => {
        const next = 1 - active;
        slide = (slide + 1) % slides.length;
        layers[next].style.backgroundImage = `url("${slides[slide]}")`;
        layers[next].style.opacity = "1";
        layers[active].style.opacity = "0";
        active = next;
    }, 5000);
}
