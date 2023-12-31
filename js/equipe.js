const membros = [
    { nome: "Kaian", cidade: "Planaltina-DF", avatar: "img/kaian.jpg", github: "https://github.com/kaianfreitas", linkedin: "https://www.linkedin.com/in/kaian-freitas-2b29b4ba/" },
    { nome: "Matheus", cidade: "Botucatu-SP", avatar: "img/matheus.jpg", github: "https://github.com/matheuslpiresm", linkedin: "https://www.linkedin.com/in/matheuslpires/" }
];


const content = document.querySelector(".content");


function criarMembro(membro) {

    const div = document.createElement("div");
    div.classList.add("membros");

    const img = document.createElement("img");
    img.classList.add("avatar");
    img.src = membro.avatar;

    const h2 = document.createElement("h2");
    h2.textContent = `${membro.nome}, ${membro.cidade}`;

    const github = document.createElement("a");
    github.href = membro.github;
    github.target = "_blank";

    const iconGitHub = document.createElement("img");
    iconGitHub.classList.add("icon");
    iconGitHub.src = "img/github.png";
    iconGitHub.alt = "GitHub";

    const linkedin = document.createElement("a");
    linkedin.href = membro.linkedin;
    linkedin.target = "_blank"

    const iconLinkedin = document.createElement("img");
    iconLinkedin.classList.add("icon");
    iconLinkedin.src = "img/linkedin.png";
    iconLinkedin.alt = "Linkedin"

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(github);
    github.appendChild(iconGitHub);
    div.appendChild(linkedin);
    linkedin.appendChild(iconLinkedin);

    content.appendChild(div);

    return div;

}

membros.forEach(criarMembro);





