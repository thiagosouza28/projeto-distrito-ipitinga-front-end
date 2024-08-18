function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";

    // Adiciona o evento para fechar o sidebar ao clicar fora dele
    setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
    }, 0);
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";

    // Remove o evento ao fechar o sidebar
    document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(event) {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar.contains(event.target)) {
        hideSidebar();
    }
}

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
