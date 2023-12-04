// Dados das noticias
const noticias = [

  {
    imagem: "img/materia-1.png",
    titulo: "Siri mais poderosa",
    descricao: "A Apple pode reformular a Siri para transformá-la na ferramenta de IA mais poderosa da empresa. De acordo com o informante Revegnus, conhecido como @Tech_Reve no X (antigo Twitter), a novidade seria introduzida pelo iOS 18 a partir do iPhone 16 (possível nome da próxima linha de celulares da Apple a ser lançada em 2024)..",
  },

  {
    imagem: "img/materia-2.png",
    titulo: "Xiaomi Redmi 12 5G é bom?",
    descricao: "O Redmi 12 5G foi lançado globalmente em agosto deste ano, e chegou nas lojas brasileiras no fim de setembro. O modelo teve preço inicial sugerido de R$ 1.699,99. Hoje já é possível encontrá-lo por a partir de R$ 1.629 no varejo online. O smartphone da gigante chinesa se destaca pela enorme tela de 6,79 polegadas com resolução Full HD+, conjunto de câmeras de até 50 MP e processador eficiente da Qualcomm."
  },

  {
    imagem: "img/materia-3.png",
    titulo: "7 motivos para você comprar um celular dobrável agora",
    descricao: "Há várias razões pelas quais comprar um celular dobrável pode ser uma boa ideia. Isto porque eles oferecem uma tela grande que é ideal para assistir a vídeos, jogar games e trabalhar. A tela ampla também é ideal para multitarefa, pois permite que você visualize várias janelas ao mesmo tempo. E, quando dobrado, o celular é tão compacto quanto um smartphone tradicional, ou até mais."
  }
];

// Conteudo da section materias
const content = document.getElementById("materias");

// Funcao para criação das noticias
function criarNoticias(noticia){
const div = document.createElement("div");
div.classList.add("materia__menor");


const img = document.createElement("img");
img.classList.add("materia__img");
img.src = noticia.imagem;

const descricaoMenor = document.createElement("div");
descricaoMenor.classList.add("materia__descricao");

const h3 = document.createElement("h3");
h3.classList.add("materia__titulo");
h3.textContent = noticia.titulo;

const p = document.createElement("p");
p.classList.add("materia__texto");
p.textContent = noticia.descricao


// Adicionando elementos criados ao conteudo principal
div.appendChild(img);
div.appendChild(descricaoMenor);
descricaoMenor.appendChild(h3);
descricaoMenor.appendChild(p);

return div;

};

// Adiciona as notícias ao conteúdo
for (let noticia of noticias) {
  content.appendChild(criarNoticias(noticia));
}
