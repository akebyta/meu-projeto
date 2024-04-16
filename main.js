const botoes = document.querySelectorAll(".botao");
const textos= document. querySelectorAll("aba.conteudo");
 for (let i=0; i < botoes.length; i++) {
    botoes[1].onclick = function () {
        for (let j=0; j < botoes.lenght; j++) {
            botoes{j}.classlist.remove("ativo");
            textos{j}.classlist.remove("ativo");
        }
        botoes[1].classlist.add("ativo");
        textos[1].classlist.add("ativo");
    }
 }

