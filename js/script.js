function store(e) {
    e.preventDefault();

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");

    if (nome.value && email.value) {
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);

        alert("Cadastrado com Sucesso!");
    }
}