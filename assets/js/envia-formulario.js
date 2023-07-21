const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "e-mail": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "msg": e.target.elements["msg"].value,
    }

    localStorage.setItem("contato", JSON.stringify(listaRespostas));

    window.location.href = './index-enviado.html';
    
})