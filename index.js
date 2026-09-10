//----------------------------------------------------------//
//----------- 1- Limite de linhas, codifica URL ------------//
//----------------------------------------------------------//  

const form = document.getElementById("formConsulta");
const mensagem = document.getElementById("mensagem");

//limita a quantidade de linhas do campo de texto do CEP em 8 números.
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entrada =
     document.getElementById("cep").value.trim();
    const cidade =
     document.getElementById("cidade")
        .value.trim().replace(/\s+/g, " ");
    mensagem.textContent = "";

    if (!/^\d{5}-?\d{3}$/.test(entrada)) {
        mensagem.textContent = "Informe um CEP com 8 números.";
        return;
    }
    if (!cidade) {
        mensagem.textContent = "Informe a cidade.";
        return;
    }

    //Codifica CEP e cidade para transporte.
    const cep = entrada.replace("-", "");
    const parametros = new URLSearchParams({ cep, cidade });
    window.location.href = `resultado.html?${parametros}`;
});