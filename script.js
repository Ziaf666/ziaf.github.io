function Scroll(){
    var target = document.getElementById("target");

    target.scrollIntoView({behavior: "smooth", block: "start"});
};

const btn = document.querySelector("#btn-sidebar");

btn.addEventListener("click", () => {
    const sidebar = document.querySelector(".nav-links");

    sidebar.classList.toggle("active");
});
