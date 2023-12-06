const conteudoMaterias = [

{
    imagem: "img/materia-4.png",
    titulo: "Como tirar uma boa foto da Lua com um iPhone?",
    descricao: "Com certeza você já tentou tirar fotos da lua com seu celular, e com certeza já deve ter se frustrado com o resultado.  Eventos como super-luas, eclipses lunares e até a mensal lua cheia atraem os olhos da humanidade para céus desde sempre."

},

{
    imagem: "img/materia-5.jpg",
    titulo: "O que é Deep Voice e como se proteger de golpes com voz clonada",
    descricao: "A era digital tem sido marcada por avanços extraordinários em diversas áreas, e a síntese de voz não é exceção. Uma tecnologia que ganha destaque nesse cenário é o “Deep Voice”, um sistema de geração de voz que utiliza técnicas avançadas de aprendizado profundo para reproduzir vozes extremamente realistas."
},

{
    imagem: "img/materia-6.jpg",
    titulo: "Como usar chat por voz no ChatGPT?",
    descricao: "O ChatGPT implementou recentemente uma nova funcionalidade ao seu serviço gratuito: a possibilidade de interagir por voz com a inteligência artificial. O processo é parecido com a utilização de uma Alexa, onde o usuário realiza uma pergunta ou comando e uma voz responde pelo alto-falante do dispositivo."
}

];

const content = document.querySelector(".materias");

function criarMaterias(materia) {

    const div = document.createElement("div");
    div.classList.add("materia");

    const img = document.createElement("img");
    img.classList.add("materia__img");
    img.src = materia.imagem;

    const conteudo = document.createElement("div");
    conteudo.classList.add("materia__conteudo")

    const h3 = document.createElement("h3");
    h3.classList.add("materia__titulo");
    h3.textContent = materia.titulo;

    const p = document.createElement("p");
    p.classList.add("materia__descricao");
    p.textContent = materia.descricao;


    div.appendChild(conteudo);
    conteudo.appendChild(img);
    conteudo.appendChild(h3);
    conteudo.appendChild(p);

    return div;

};

for (let materia of conteudoMaterias){
    content.appendChild(criarMaterias(materia));
}



