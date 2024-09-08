function pesquisar():string{
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let titulo = "";
    let descricao ="";
//para cada dado dentro da lista de dados
for (let plano of planos) {
    titulo = plano.titulo.toLowerCase()
    descricao = plano.descricao.toLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        resultados +=`
 <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${plano.titulo}</a>
        </h2>
        <p class="descricao-meta">${plano.descricao}</p>
    </div>
    `;
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
}
section.innerHTML = resultados
};
