console.log("wassup");

/*JS do menu*/

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu)

/*JS do carrossel*/

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach(item => item.style.display = 'none');
        items[index].style.display = 'block';
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    // Iniciar o carrossel
    showItem(currentIndex);

    // intervalo para avançar automaticamente
    setInterval(nextItem, 3100);
});


//adicionar informações sobre notícias

// Notícia 1
var noticia1Div = document.getElementById('noticia1');

var imgNoticia1 = document.createElement('img');
imgNoticia1.src = "/img/Fortnite 2.jpg";
imgNoticia1.title = "Fortnite";
imgNoticia1.className = "imgnot";

var txtImgNoticia1 = document.createElement('div');
txtImgNoticia1.className = "txtimg";

var tituloNoticia1 = document.createElement('h1');
tituloNoticia1.className = "titulo";
tituloNoticia1.innerHTML = '<strong><a target="_blank" href="https://www.bbc.com/portuguese/articles/ce9p1m7qr97o#:~:text=A%20Epic%20Games%2C%20empresa%20respons%C3%A1vel,ficarem%20presas%20em%20filas%20virtuais.">Recorde registrado pelo Fortnite OG com mais de 40 milhões de jogadores</a></strong>';

var textoNoticia1 = document.createElement('p');
textoNoticia1.innerHTML = 'A Epic Games, empresa responsável, diz que 44,7 milhões de jogadores registraram um total de 102 milhões de horas de jogo na nova temporada Fortnite OG no domingo (5/11). Isso apesar de algumas pessoas terem dificuldade para fazer login ou ficarem presas em filas virtuais.';

txtImgNoticia1.appendChild(tituloNoticia1);
txtImgNoticia1.appendChild(textoNoticia1);

noticia1Div.appendChild(imgNoticia1);
noticia1Div.appendChild(txtImgNoticia1);

// Notícia 2
var noticia2Div = document.getElementById('noticia2');

var imgNoticia2 = document.createElement('img');
imgNoticia2.src = "/img/marte.png";
imgNoticia2.title = "imagem marte";
imgNoticia2.className = "imgnot";

var txtImgNoticia2 = document.createElement('div');
txtImgNoticia2.className = "txtimg";

var tituloNoticia2 = document.createElement('h1');
tituloNoticia2.className = "titulo";
tituloNoticia2.innerHTML = '<strong><a target="_blank" href="https://www.youtube.com/watch?v=KsBveF-PwAY&t=4s&ab_channel=NPGPress">Robô operado por I.A produz oxigênio com solo marciano</a></strong>';

var textoNoticia2 = document.createElement('p');
textoNoticia2.innerHTML = 'Pesquisadores internacionais desenvolveram um robô digno de ficção científica. Com a ajuda de inteligência artificial, a máquina foi capaz de produzir oxigênio a partir de meteoritos recolhidos em Marte. O feito poderá ter grande impacto nas futuras missões tripuladas para o planeta vermelho. Isso porque a produção de oxigênio a partir de recursos marcianos poderá tornar as viagens espaciais mais simples, econômicas e seguras.';

txtImgNoticia2.appendChild(tituloNoticia2);
txtImgNoticia2.appendChild(textoNoticia2);

noticia2Div.appendChild(imgNoticia2);
noticia2Div.appendChild(txtImgNoticia2);

// Notícia 3
var noticia3Div = document.getElementById('noticia3');

var imgNoticia3 = document.createElement('img');
imgNoticia3.src = "/img/whatsapp.jpeg";
imgNoticia3.title = "imagem whatsapp";
imgNoticia3.className = "imgnot";

var txtImgNoticia3 = document.createElement('div');
txtImgNoticia3.className = "txtimg";

var tituloNoticia3 = document.createElement('h1');
tituloNoticia3.className = "titulo";
tituloNoticia3.innerHTML = '<strong><a target="_blank" href="https://g1.globo.com/tecnologia/noticia/2023/11/13/whatsapp-lanca-chats-por-voz-para-conectar-membros-de-grupo-veja-como-funciona.ghtml">WhatsApp lança chats por voz para conectar membros de grupo</a></strong>';

var textoNoticia3 = document.createElement('p');
textoNoticia3.innerHTML = 'Novo recurso, que é diferente da chamada em grupo, vai notificar a chamada na conversa. Assim, só participa quem está disponível, os contatos que não puderem entrar na chamada não serão surpreendidos com o toque de uma ligação. Objetivo é ter menos incômodos.';

txtImgNoticia3.appendChild(tituloNoticia3);
txtImgNoticia3.appendChild(textoNoticia3);

noticia3Div.appendChild(imgNoticia3);
noticia3Div.appendChild(txtImgNoticia3);
