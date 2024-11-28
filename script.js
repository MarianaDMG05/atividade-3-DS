const dados = {
    liloestitch: {
        resumo: "Lilo é uma garota que adora cuidar de animais menos favorecidos. Lilo tem o costume de coletar lixo reciclável nas praias para, com o dinheiro recebido, comprar comida para peixes. Até que, em um belo dia, ela encontra um cachorro e decide adotá-lo. Entretanto, este cachorro na verdade é Stitch, um ser alienígena que é um dos criminosos mais perigosos da galáxia. Agora, Stitch esconde quatro de suas seis pernas e decide se fazer passar por um cachorro comum, ficando amigo de Lilo.",
        imagem: "images/lilo_stitch.jpg"
    },
    divertidamente: {
        resumo: "Crescer pode ser uma jornada turbulenta, e com Riley não é diferente. Conforme ela e suas emoções, Alegria , Medo, Raiva, Nojinho e Tristeza se esforçam para adaptar-se à uma nova vida, uma enorme agitação toma conta do centro de controle em sua mente. Embora Alegria, a principal e mais importante emoção de Riley, tente se manter positiva, as emoções entram em conflitos, às vezes muito divertidos, sobre qual a melhor maneira de viver em uma nova cidade, casa e escola.",
        imagem: "images/divertidamente.jpg"
    },
    pequenasereia: {
        resumo: "A jovem sereia Ariel cria um problema na família quando o poderoso Rei Triton proíbe todo tipo de música no reino submarino. Com a ajuda de suas seis irmãs, ela resolve se rebelar contra a decisão radical de seu pai autoritário.",
        imagem: "images/pequena_sereia.jpg"
    },
    ursinhopooh: {
        resumo: "Ió perde a cauda no Bosque dos Cem Acres. Pooh e seus amigos tentem encontrar uma cauda substituta. Logo em seguida, eles encontram um bilhete deixado por Christopher Robin, de que voltaria logo. O Corujão entende errado e acredita que ele foi capturado por um monstro chamado Voltogo. É o suficiente para que toda a turma elabore um plano para capturá-lo e salvar o amigo.",
        imagem: "images/ursinho_pooh.jpg"
    },
    tinkerbelleosegredodasfadas: {
        resumo: "A fada Tinker Bell e suas companheiras querem desvendar o mistério de suas asas. Elas partem em busca da ajuda de uma outra fada e acabam entrando no proibido Bosque do Inverno. Nessa grande aventura, uma descoberta mudará suas vidas para sempre.",
        imagem: "images/tinker_bell.jpg"
    },
    toystory: {
        resumo: "O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Com ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela. É o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos.",
        imagem: "images/toy_story.jpg"
    }
};

// Função para mostrar o resumo do filme ao clicar
function mostrarFilmes(filme) {
    const dadosDiv = document.getElementById('dados');
    const filmeData = dados[filme];  // Pega os dados do filme (resumo e imagem)
    
    dadosDiv.style.display = 'block';
    dadosDiv.innerHTML = `
        <p><strong>Resumo de "${filme.charAt(0).toUpperCase() + filme.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}":</strong></p>
        <img src="${filmeData.imagem}" alt="Imagem de ${filme.charAt(0).toUpperCase() + filme.slice(1)}" class="filme-imagem">
        <p>${filmeData.resumo}</p>
    `;
}

// Função para alterar o estilo da previsão
function alterarEstilo(estilo) {
    const dadosDiv = document.getElementById('dados');
    dadosDiv.className = estilo;
}
